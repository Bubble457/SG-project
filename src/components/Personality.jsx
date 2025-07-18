// components/PersonalityCard.jsx
import React from 'react';
import '../css/Personality.css';

const personalityInfo = {
  "Impulsivity": {
    name: "Impulsivity",
    image: "/images/impulsivity.png",
    description: "คุณเป็นคนวู่วาม ตัดสินใจเร็ว กล้าตอบสนองโดยไม่ลังเล"
  },
  "Anti-Authority": {
    name: "Anti-Authority",
    image: "/images/anti-authority.png",
    description: "คุณไม่ชอบการถูกควบคุม ท้าทายกฎ มีแนวคิดอิสระ"
  },
  "Resignation": {
    name: "Resignation",
    image: "/images/resignation.png",
    description: "คุณมักยอมจำนน ไม่ชอบเผชิญหน้ากับความขัดแย้ง"
  },
  "Macho": {
    name: "Macho",
    image: "/images/macho.png",
    description: "คุณมั่นใจในตนเองสูง ชอบแสดงความแข็งแกร่ง"
  },
  "Invulnerability": {
    name: "Invulnerability",
    image: "/images/invulnerability.png",
    description: "คุณทำตัวเหมือนไม่รู้สึกอะไร รับมือกับทุกอย่างอย่างเฉยชา"
  }
};

function PersonalityCard({ type }) {
  const info = personalityInfo[type];

  return (
    <div className="card">
      <img src={info.image} alt={info.name} className="card-img" />
      <h3 className="card-title">{info.name}</h3>
      <p className="card-desc">{info.description}</p>
    </div>
  );
}

export default PersonalityCard;
