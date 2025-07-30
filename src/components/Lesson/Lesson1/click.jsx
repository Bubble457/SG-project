import React, { useRef, useState, useEffect } from 'react';
import '../../../css/Click.css';

const hazardData = [
  { timeStart: 7, timeEnd: 10, x: [420, 600], y: [160, 300] },
  { timeStart: 25, timeEnd: 28, x: [250, 400], y: [120, 250] },
  { timeStart: 40, timeEnd: 43, x: [300, 500], y: [100, 220] }
];

const HazardClickGame = () => {
  const videoRef = useRef(null);
  const logEndRef = useRef(null);
  const [score, setScore] = useState(0);
  const [messages, setMessages] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [clickMarkers, setClickMarkers] = useState([]);

  const handleClick = (e) => {
    if (gameEnded) return;

    const rect = videoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const videoTime = videoRef.current.currentTime;

    const hit = hazardData.some(h =>
      videoTime >= h.timeStart &&
      videoTime <= h.timeEnd &&
      x >= h.x[0] && x <= h.x[1] &&
      y >= h.y[0] && y <= h.y[1]
    );

    const id = Date.now();
    setClickMarkers(prev => [...prev, { x, y, correct: hit, id }]);

    if (hit) {
      setScore(s => s + 1);
      setMessages(m => [...m, { msg: `✅ ถูกต้อง! (${videoTime.toFixed(1)}s)`, correct: true }]);
    } else {
      setMessages(m => [...m, { msg: `❌ พลาด (${videoTime.toFixed(1)}s)`, correct: false }]);
    }

    setTimeout(() => {
      setClickMarkers(prev => prev.filter(m => m.id !== id));
    }, 5000);
  };

  const handleEnd = () => {
    setGameEnded(true);
    setMessages(prev => [...prev, { msg: '🎉 เกมจบแล้ว!', correct: true }]);
  };

  const resetGame = () => {
    setScore(0);
    setMessages([]);
    setGameEnded(false);
    setClickMarkers([]);
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  // Scroll log
  useEffect(() => {
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="hazard-container">
      <h2>🚗 เกมตรวจจับจุดเสี่ยง</h2>
      <p>คะแนน: {score}</p>

      <div className="controls">
        <button className="control-btn" onClick={() => videoRef.current.play()}>▶️ เริ่ม</button>
        <button className="control-btn" onClick={() => videoRef.current.pause()}>⏸️ หยุด</button>
        {gameEnded && (
          <button className="reset-btn" onClick={resetGame}>🔁 เล่นใหม่</button>
        )}
      </div>

      <div className="video-wrapper" onClick={handleClick}>
        <video
          ref={videoRef}
          src="/Clicktest.mp4"
          width="640"
          height="360"
          controls
          onEnded={handleEnd}
          className="video-element"
        />
        {clickMarkers.map((m) => (
          <span
            key={m.id}
            className={`marker ${m.correct ? 'correct' : 'wrong'}`}
            style={{ left: m.x, top: m.y }}
          >
            {m.correct ? '✅' : '❌'}
          </span>
        ))}
      </div>

      <div className="log">
        {messages.map((entry, idx) => (
          <div key={idx} className={entry.correct ? 'correct' : 'wrong'}>
            {entry.msg}
          </div>
        ))}
        <div ref={logEndRef} />
      </div>
    </div>
  );
};

export default HazardClickGame;
    