import React, { useRef, useState, useEffect } from 'react';
import '../../../css/Click.css';

const hazardData = [
  { timeStart: 7, timeEnd: 10 },  // hazard 1 (7-10 sec)
  { timeStart: 20, timeEnd: 22 }, // hazard 2 (20-22 sec)
  { timeStart: 22, timeEnd: 28 }  // hazard 3 (25-28 sec)
];

const HazardClickGame = () => {
  const videoRef = useRef(null);
  const logEndRef = useRef(null);
  const [score, setScore] = useState(0);
  const [messages, setMessages] = useState([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [clickMarkers, setClickMarkers] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = (e) => {
    if (gameEnded || !isPlaying) return;

    const rect = videoRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const videoTime = videoRef.current.currentTime;

    const hit = hazardData.some(h =>
      videoTime >= h.timeStart && videoTime <= h.timeEnd
    );

    const id = Date.now();
    setClickMarkers(prev => [...prev, { x, y, correct: hit, id }]);

    if (hit) {
      setScore(s => s + 1);
      setMessages(m => [...m, { msg: `✅ ถูกต้อง! (${videoTime.toFixed(1)}s x: ${Math.round(x)} y: ${Math.round(y)})`, correct: true }]);
    } else {
      setMessages(m => [...m, { msg: `❌ ไม่ถูกต้อง (${videoTime.toFixed(1)}s x: ${Math.round(x)} y: ${Math.round(y)})`, correct: false }]);
    }

    setTimeout(() => {
      setClickMarkers(prev => prev.filter(m => m.id !== id));
    }, 2000);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  const handleEnd = () => {
    setGameEnded(true);
    setIsPlaying(false);
    setMessages(prev => [...prev, { msg: '🎉 เกมจบแล้ว!', correct: true }]);
  };

  const resetGame = () => {
    setScore(0);
    setMessages([]);
    setGameEnded(false);
    setClickMarkers([]);
    videoRef.current.currentTime = 0;
  };

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="hazard-container">
      <h2>🚗 เกมตรวจจับจุดเสี่ยง</h2>
      <p className="score-display">คะแนน: {score}</p>

      <div className="controls">
        <button 
          className={`control-btn ${isPlaying ? 'active' : ''}`} 
          onClick={handlePlay}
          disabled={isPlaying}
        >
          ▶️ เริ่ม
        </button>
        <button 
          className={`control-btn ${!isPlaying ? 'active' : ''}`} 
          onClick={handlePause}
          disabled={!isPlaying}
        >
          ⏸️ หยุด
        </button>
        {gameEnded && (
          <button className="reset-btn" onClick={resetGame}>
            🔁 เล่นใหม่
          </button>
        )}
      </div>

      <div className="video-wrapper" onClick={handleClick}>
        <video
          ref={videoRef}
          src="/public/Test.mp4"
          controls={false}
          onEnded={handleEnd}
          className="video-element"
        />
        {clickMarkers.map((m) => (
          <div
            key={m.id}
            className={`marker ${m.correct ? 'correct' : 'wrong'}`}
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
          >
            {m.correct ? '✅' : '❌'}
          </div>
        ))}
      </div>

      <div className="log-container">
        <div className="log">
          {messages.map((entry, idx) => (
            <div key={idx} className={`log-entry ${entry.correct ? 'correct' : 'wrong'}`}>
              {entry.msg}
            </div>
          ))}
          <div ref={logEndRef} />
        </div>
      </div>
    </div>
  );
};

export default HazardClickGame;