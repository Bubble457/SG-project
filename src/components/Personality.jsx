import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Personality.css';
import nextImg from '../assets/next.png';
import imgImpulsivity from '../assets/Impulsivity.png';
import imgAntiAuthority from '../assets/Anti-Authority.png';
import imgResignation from '../assets/Resignation.png';
import imgMacho from '../assets/Macho.png';
import imgInvulnerability from '../assets/Invulnerability.png';
import mascot from '../assets/Impulsivity.png';

const personalityInfo = {
  Impulsivity: {
    name: "IMPULSIVITY",
    description: "(รีบร้อนลุกลน)",
    detail: "คือ คนที่ขาดความยั้งคิดก่อนลงมือทํา มักทําตามความคิด แว๊บแรก",
    image: imgImpulsivity,
    bgColor: "#ffe6e6",
    scores: [
      { label: "การประเมินความเสี่ยง", level: 1, color: "red" },
      { label: "สมรรถนะของสายตา", level: 2, color: "orange" },
      { label: "การรู้สึกเกตุจุดบอด", level: 3, color: "yellow" }
    ]
  },
  "Anti-Authority": {
    name: "ANTI-AUTHORITY",
    description: "(กฎเกณฑ์ ไม่อาทรณ์)",
    detail: "คือ คนที่ไม่เชื่อฟังกฎ มักทำตามความคิดตัวเอง",
    image: imgAntiAuthority,
    bgColor: "#e6f7ff",
    scores: []
  },
  Resignation: {
    name: "RESIGNATION",
    description: "(ตายดีกว่าไม่สู้)",
    detail: "คือ คนที่มักถอดใจเมื่อเผชิญปัญหา",
    image: imgResignation,
    bgColor: "#f9f9d2",
    scores: []
  },
  Macho: {
    name: "MACHO",
    description: "(ฮีโร่คือตัวข้า)",
    detail: "คือ คนที่คิดว่าตัวเองเก่ง ต้องเป็นผู้นำเสมอ",
    image: imgMacho,
    bgColor: "#f0e6ff",
    scores: []
  },
  Invulnerability: {
    name: "INVULNERABILITY",
    description: "(คิดว่าตนดวงดี)",
    detail: "คือ คนที่ประเมินความเสี่ยงต่ำเกินไป เพราะคิดว่าดวงดี",
    image: imgInvulnerability,
    bgColor: "#e6ffe6",
    scores: []
  }
};

function PersonalityCard({ type, name }) {
  const info = personalityInfo[type];
  if (!info) return <div>ไม่พบข้อมูลบุคลิกภาพ</div>;

  return (
    <div style={{ backgroundColor: info.bgColor, minHeight: "100vh", padding: "2rem" }}>
      <h2 style={{ color: "#ffa500", fontWeight: "bold" }}>มีอัตลักษณ์อย่างไร</h2>

      <div className="card-per" style={{ background: "#fff", padding: "20px", borderRadius: "15px" }}>
        <h3 style={{ fontSize: "20px", margin: 0 }}>{name}</h3>
        <p style={{ fontSize: "18px", margin: "8px 0" }}>มีทัศนคติแบบ</p>
        <h2 style={{ color: "#ff9900", marginBottom: "0" }}>{info.name} {info.description}</h2>

        <div style={{ textAlign: "left", marginTop: "15px" }}>
          {info.scores.map((s, i) => (
            <p key={i}>
              {s.label} ระดับ {s.level}
              <span style={{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                backgroundColor: s.color,
                borderRadius: '50%',
                marginLeft: '8px'
              }}></span>
            </p>
          ))}
        </div>
      </div>

      <div className="speech-bubble" style={{ marginTop: "20px", maxWidth: "600px", margin: "20px auto" }}>
        <p className="text-per" style={{ fontSize: "18px" }}>{info.name} {info.description}</p>
        <p className="text-per1">{info.detail}</p>
      </div>

      <img src={info.image} className="img-Im" width="300" alt={info.name} />
      <img src={mascot} alt="mascot" width="150" />

      <Link to="/mission">
        <div className="next-per">
          <p className="next-pper">ต่อไป</p>
        </div>
        <img src={nextImg} className="next-next-per" alt="next" />
      </Link>
    </div>
  );
}

export default PersonalityCard;
