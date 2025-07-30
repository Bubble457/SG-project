import React, { useState } from 'react';
import '../../../css/check.css'; 

const scenes = [
  {
    bg: '../../../../public/check.png',
    answer: { x: 0, y: 62, w: 50, h: 50 },
  },
  {
    bg: '../../../../public/check.png',
    answer: { x: 20, y: 35, w: 30, h: 30 },
  },
  {
    bg: '../../../../public/check.png',
    answer: { x: 60, y: 20, w: 20, h: 30 },
  },
];

export default function GameScene() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [marker, setMarker] = useState(null);

  const handleClick = (e) => {
    if (clicked) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;

    const { x, y, w, h } = scenes[sceneIndex].answer;
    const isCorrect = clickX >= x && clickX <= x + w && clickY >= y && clickY <= y + h;

    setClicked(true);
    if (isCorrect) setScore(score + 1);
    setMarker({ x: clickX, y: clickY, correct: isCorrect });

    setTimeout(() => {
      setMarker(null);
      if (sceneIndex < scenes.length - 1) {
        setSceneIndex(sceneIndex + 1);
        setClicked(false);
      }
    }, 1000);
  };

  return (
    <div
      className="scene-container"
      style={{ backgroundImage: `url(${scenes[sceneIndex].bg})` }}
      onClick={handleClick}
    >
      <div className="score">{score}/{scenes.length}</div>
      {marker && (
        <span
          className={`marker ${marker.correct ? 'correct' : 'wrong'}`}
          style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
        >
          {marker.correct ? '✅' : '❌'}
        </span>
      )}
    </div>
  );
}
