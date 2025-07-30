import React, { useEffect, useRef, useState } from 'react';
import * as handpose from '@mediapipe/hands';
import * as cam from '@mediapipe/camera_utils';
import './css/TrafficCatch.css';

import stopSign from '../../assets/traffic-signs/stop.png';

const TrafficCatchGame = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [handX, setHandX] = useState(null);
  const [handY, setHandY] = useState(null);
  const [signY, setSignY] = useState(0);
  const [score, setScore] = useState(0);

  // สุ่มตำแหน่ง X ของป้าย
  const [signX] = useState(() => Math.floor(Math.random() * 500) + 50);

  // โหลด MediaPipe
  useEffect(() => {
    const hands = new handpose.Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 0,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    hands.onResults((results) => {
      if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        const hand = results.multiHandLandmarks[0][9]; // ใช้จุดกลางฝ่ามือ
        const x = hand.x * 640;
        const y = hand.y * 480;
        setHandX(x);
        setHandY(y);
      } else {
        setHandX(null);
        setHandY(null);
      }
    });

    if (typeof videoRef.current !== 'undefined' && videoRef.current !== null) {
      const camera = new cam.Camera(videoRef.current, {
        onFrame: async () => {
          await hands.send({ image: videoRef.current });
        },
        width: 640,
        height: 480
      });
      camera.start();
    }
  }, []);

  // อัปเดตตำแหน่งป้ายทุก 100ms
  useEffect(() => {
    const interval = setInterval(() => {
      setSignY(prevY => {
        const newY = prevY + 10;

        // ตรวจจับชนกับมือ
        if (handX && handY && newY >= handY - 30 && newY <= handY + 30 && handX >= signX && handX <= signX + 100) {
          setScore(s => s + 1);
          return 0; // รีเซ็ตป้าย
        }

        if (newY > 480) return 0; // รีเซ็ตถ้าหลุดจอ
        return newY;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [handX, handY, signX]);

  return (
    <div className="game-container">
      <h2>🖐️ เกมจับป้ายจราจร</h2>
      <p>คะแนน: {score}</p>
      <div className="game-area">
        <video ref={videoRef} className="video-feed" autoPlay playsInline muted width="640" height="480" />
        <img src={stopSign} className="traffic-sign" style={{ top: signY + 'px', left: signX + 'px' }} alt="sign" />
        {handX && handY && <div className="hand-dot" style={{ left: handX, top: handY }}></div>}
      </div>
    </div>
  );
};

export default TrafficCatchGame;
