// components/PersonalityCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Personality.css';
import img from '../assets/Impulsivity.png';
import nextImg from '../assets/next.png';

const personalityInfo = {
  "Impulsivity": {
    name: "Impulsivity",
    image: "/images/impulsivity.png",
    description: "( รีบร้อนลุกลน )"
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
  }
};

function PersonalityCard({ type }) {
  const info = personalityInfo[type];

  return (
    <div>
      <div className="card-per">
        <h3 className="card-title">{info.name}</h3>
        <p className="card-desc">{info.description}</p>
      </div>
      <div className='speech-bubble'>
        <p className='text-per'>IMPULSIVITY (รีบร้อนลุกลน) 
        </p>
        <p className='text-per1'>คือ คนที่ขาดความยั้งคิดก่อนลงมือทํา มักทําตามความคิด แว๊บแรก</p>
      </div>
      <img src={img} className='img-Im' width='300' height='auto' />
      <Link to='/mission'>
          <div className='next-per'>
              <p className='next-pper'>ต่อไป</p>
          </div>
          <img src={nextImg} className='next-next-per' />
      </Link>
    </div>
  );
}

export default PersonalityCard;
