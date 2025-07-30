import React from 'react';
import Personality from './Personality';
import '../css/Register.css';
import { Link } from 'react-router-dom';   
import bg from '../assets/personality.png';

function Result({ answers, questions }) {
  const scores = {
    "Impulsivity": 0,
    "Anti-Authority": 0,
    "Resignation": 0
  };

  answers.forEach((rankedIndexes, qIndex) => {
    rankedIndexes.forEach((rank, choiceIndex) => {
      const type = questions[qIndex].choices[choiceIndex].type;
      scores[type] += 6 - rank;
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [topType, topScore] = sorted[0];

  return (
    <div>
      <img src={bg} className='bg-result'/>
      
      <div className="result-box">
        <Personality type={topType} />
      </div>
    </div>  
  );
}

export default Result;
