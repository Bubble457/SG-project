// components/Result.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Result({ answers, questions }) {
  const navigate = useNavigate();

  const scores = {
    "Impulsivity": 0,
    "Anti-Authority": 0,
    "Resignation": 0,
    "Invulnerability": 0,
    "Macho": 0,
  };

  answers.forEach((rankedIndexes, qIndex) => {
    rankedIndexes.forEach((rank, choiceIndex) => {
      const type = questions[qIndex].choices[choiceIndex].type;
      scores[type] += 6 - rank;
    });
  });

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [topType] = sorted[0];

  useEffect(() => {
    if (topType) {
      const traitRouteMap = {
        "Impulsivity": "/impulsivity",
        "Anti-Authority": "/antiAuthority",
        "Resignation": "/resignation",
        "Invulnerability": "/invulnerability",
        "Macho": "/macho",
      };
      navigate(traitRouteMap[topType]);
    }
  }, [topType, navigate]);

  return null;
}

export default Result;
