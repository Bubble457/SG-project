import React, { useState } from 'react';
import '../css/Question.css';
import { questions } from '../question';
import Result from '../components/Result';

function Question() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [ranks, setRanks] = useState(Array(5).fill(""));

  const handleChange = (index, value) => {
    const newRanks = [...ranks];
    newRanks[index] = value;
    setRanks(newRanks);
  };

  const isValid = () => {
    const nums = ranks.map(r => parseInt(r));
    return (
      nums.every(n => !isNaN(n)) &&
      new Set(nums).size === 5 &&
      nums.every(n => n >= 1 && n <= 5)
    );
  };

  const handleSubmit = () => {
    const ranked = ranks.map(r => parseInt(r));
    setAnswers(prev => [...prev, ranked]);
    setRanks(Array(5).fill(""));
    setCurrent(current + 1);
  };

  if (current >= questions.length) {
    return <Result answers={answers} questions={questions} />;
  }

  const data = questions[current];

  return (
    <div className="question-container">
      <h2 className="question-title">ข้อที่ {current + 1} จาก {questions.length}</h2>
      <p className="question-text">{data.text}</p>
      {data.choices.map((choice, index) => (
        <div key={index} className="choice-row">
          <select
            value={ranks[index]}
            onChange={e => handleChange(index, e.target.value)}
            className="select-box"
          >
            <option value="">เลือกลำดับ</option>
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          <span>{choice.text}</span>
        </div>
      ))}
      <button
        className="button-next"
        onClick={handleSubmit}
        disabled={!isValid()}
      >
        ต่อไป
      </button>
    </div>
  );
}

export default Question;