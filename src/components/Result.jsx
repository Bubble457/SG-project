import React from 'react';
import Personality from './Personality';
import '../css/Result.css';

function Result({ answers, questions }) {
  const scores = {
    "Impulsivity": 0,
    "Anti-Authority": 0,
    "Resignation": 0,
    "Macho": 0,
    "Invulnerability": 0
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
    <div className="result-container">
      <Personality type={topType} />
    </div>
  );
}

export default Result;
