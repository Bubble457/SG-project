import React, { useEffect, useRef, useState } from 'react';
import '@mediapipe/hands/hands.js';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { Hands } from '@mediapipe/hands';
import '../../../css/TrafficCatch.css';

const signs = [
  { id: 1, src: './turnleft.png' },
  { id: 2, src: './ทางจักรยาน.png' },
  { id: 3, src: './not.png' },
  { id: 4, src: './ถนนลื่น.png' },
  { id: 5, src: './ห้ามแซง.png' },
  { id: 6, src: './notuturn.png' },
  { id: 7, src: './notturnright.png' },
  { id: 8, src: './รถสวนทาง.png' }
];

const TrafficCatch = () => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [fallingSigns, setFallingSigns] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
      video.srcObject = stream;
      video.play();
    });

    const hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    hands.setOptions({
      maxNumHands: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7
    });

    hands.onResults((results) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);
      if (results.multiHandLandmarks.length > 0) {
        const hand = results.multiHandLandmarks[0];
        drawConnectors(ctx, hand, Hands.HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 2 });
        drawLandmarks(ctx, hand, { color: '#FF0000', lineWidth: 1 });

        const palm = hand[0]; // Wrist landmark
        checkCatch(palm.x * canvas.width, palm.y * canvas.height);
      }
    });

    const cameraInterval = setInterval(() => {
      hands.send({ image: video });
    }, 100);

    const dropInterval = setInterval(() => {
      setFallingSigns(prev => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * 500 + 50,
          y: 0,
          img: signs[Math.floor(Math.random() * signs.length)].src
        }
      ]);
    }, 2000);

    return () => {
      clearInterval(cameraInterval);
      clearInterval(dropInterval);
    };
  }, []);

  useEffect(() => {
    const move = setInterval(() => {
      setFallingSigns(prev => prev
        .map(sign => ({ ...sign, y: sign.y + 5 }))
        .filter(sign => sign.y < 400));
    }, 100);
    return () => clearInterval(move);
  }, []);

  const checkCatch = (handX, handY) => {
    setFallingSigns(prev => {
      const updated = prev.filter(sign => {
        const isCatch =
          handX >= sign.x && handX <= sign.x + 60 &&
          handY >= sign.y && handY <= sign.y + 60;
        if (isCatch) setScore(s => s + 1);
        return !isCatch;
      });
      return updated;
    });
  };

  return (
    <div className="traffic-game">
      <h2>🚦 เกมจับป้ายจราจร</h2>
      <p>คะแนน: {score}</p>

      <div className="game-area">
        <video ref={videoRef} width="640" height="480" hidden muted></video>
        <canvas ref={canvasRef} width="640" height="480" className="video-canvas"></canvas>

        {fallingSigns.map(sign => (
          <img
            key={sign.id}
            src={sign.img}
            alt="sign"
            className="falling-sign"
            style={{ left: sign.x, top: sign.y }}
          />
        ))}
      </div>
    </div>
  );
};

export default TrafficCatch;