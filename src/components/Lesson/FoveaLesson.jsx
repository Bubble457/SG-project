import React, { useEffect, useRef, useState } from "react";
import { Hands } from "@mediapipe/hands";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { Camera } from "@mediapipe/camera_utils";
import "../../css/Fovea.css";

const FoveaLesson = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [inCenter, setInCenter] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");

    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    });

    hands.setOptions({
      maxNumHands: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.7,
    });

    hands.onResults((results) => {
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

      if (results.multiHandLandmarks.length > 0) {
        for (const landmarks of results.multiHandLandmarks) {
          drawConnectors(canvasCtx, landmarks, Hands.HAND_CONNECTIONS, { color: "#00FF00", lineWidth: 2 });
          drawLandmarks(canvasCtx, landmarks, { color: "#FF0000", lineWidth: 1 });

          const x = landmarks[0].x;
          const y = landmarks[0].y;

          if (x > 0.3 && x < 0.7 && y > 0.3 && y < 0.7) {
            setInCenter(true);
          } else {
            setInCenter(false);
          }
        }
      } else {
        setInCenter(false);
      }

      canvasCtx.restore();
    });

    const camera = new Camera(videoElement, {
      onFrame: async () => {
        await hands.send({ image: videoElement });
      },
      width: 640,
      height: 480,
    });
    camera.start();
  }, []);

  return (
    <div className="fovea-container">
      <h2 className="fovea-title">👁️ รู้จักโฟเวียด้วยตัวเราเอง</h2>

      <div className="fovea-frame">
        <video ref={videoRef} style={{ display: "none" }} />
        <canvas ref={canvasRef} width={640} height={480} className="fovea-canvas" />
        <div className="fovea-center-box" />
        <div className="fovea-status-box">
          {inCenter ? "✔️ อยู่ตรงกลาง!" : "ชูมือไว้ตรงกลาง"}
        </div>
      </div>
    </div>
  );
};

export default FoveaLesson;
