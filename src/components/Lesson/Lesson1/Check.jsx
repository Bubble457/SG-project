import React, { useState } from 'react';
import '../../../css/Check.css';

const questions = [
  {
    image: '/public/check.png',
    answerArea: { x: 120, y: 150, radius: 30 },
    explanation: 'เล่นโทรศัพท์มือถือระหว่างขับขี่',
    arrowPos: { top: 140, left: 150 }
  },
  {
    image: '/public/check.png',
    answerArea: { x: 300, y: 220, radius: 35 },
    explanation: 'สายไฟระโยงระยาง',
    arrowPos: { top: 210, left: 330 }
  },
  {
    image: '/public/check.png',
    answerArea: { x: 210, y: 120, radius: 25 },
    explanation: 'วางของเกะกะทางเดิน',
    arrowPos: { top: 110, left: 240 }
  }
];

export default function RiskGame() {
  const [started, setStarted] = useState(false);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleClick = (e) => {
    if (showExplanation) return;
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const { x: ax, y: ay, radius } = questions[questionIdx].answerArea;
    const dist = Math.sqrt((x - ax) ** 2 + (y - ay) ** 2);

    if (dist <= radius) {
      setShowExplanation(true);
      setFeedback('ถูกต้องแล้วค่ะ ✅');
    } else {
      setFeedback('ผิด ❌ ลองใหม่');
    }
  };

  const handleNext = () => {
    if (questionIdx + 1 < questions.length) {
      setQuestionIdx(q => q + 1);
      setShowExplanation(false);
      setFeedback('');
    } else {
      setCompleted(true);
    }
  };

  if (!started) {
    return (
      <div className="start-container">
        <div className="start-card">
          <h1>🎮 เกมจับจุดเสี่ยง</h1>
          <p>คลิกหาจุดเสี่ยงในภาพให้ถูกต้อง เพื่อทดสอบความสังเกตของคุณ</p>
          <button className="start-btn" onClick={handleStart}>เริ่มเกม</button>
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="game-container">
        <h2>สรุปผล</h2>
        <p>คุณระบุจุดเสี่ยงได้ครบทุกข้อแล้ว 🎉</p>
        <p>ขอบคุณที่เล่นเกม</p>
      </div>
    );
  }

  const question = questions[questionIdx];

  return (
    <div className="game-container">
      <h3>โจทย์ข้อ {questionIdx + 1}</h3>
      <div className="image-box" onClick={handleClick} style={{ position: 'relative' }}>
        <img src={question.image} alt={`question-${questionIdx}`} />

        {showExplanation && (
          <div
            className="arrow-box"
            style={{
              position: 'absolute',
              top: question.arrowPos.top,
              left: question.arrowPos.left,
              backgroundColor: 'red',
              color: '#fff',
              padding: '6px 10px',
              borderRadius: '6px',
              whiteSpace: 'nowrap'
            }}
          >
            ➤ {question.explanation}
          </div>
        )}

        {showExplanation && (
          <div
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'green',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '8px'
            }}
          >
            ถูกต้องแล้วค่ะ
          </div>
        )}
      </div>

      <div className="feedback">{feedback}</div>

      {showExplanation && (
        <div className="explanation">
          <button onClick={handleNext}>ถัดไป</button>
        </div>
      )}
    </div>
  );
}
