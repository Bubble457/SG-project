// import React, { useEffect, useState } from 'react';
// import '../../../css/TrafficGame.css';

// const objectTypes = [
//   {
//     id: 'dont',
//     name: 'dont',
//     label: 'ห้ามเข้า',
//     category: 'ป้ายบังคับ',
//     image: '/assets/dont.png',
//     points: 10,
//     color: '#ff6b6b',
//     size: 80,
//   },
//   {
//     id: 'leawleft',
//     name: 'leawleft',
//     label: 'เลี้ยวซ้าย',
//     category: 'ป้ายบังคับ',
//     image: '/assets/leawleft.png',
//     points: 5,
//     color: '#ffa502',
//     size: 80,
//   },
//   {
//     id: 'wong',
//     name: 'wong',
//     label: 'ทางโค้งไปมา',
//     category: 'ป้ายเตือน',
//     image: '/assets/wong.png',
//     points: 5,
//     color: '#6a89cc',
//     size: 80,
//   },
//   // เพิ่ม objectTypes อื่น ๆ ตามต้องการ
// ];

// export default function TrafficSignGame() {
//   const [currentTarget, setCurrentTarget] = useState(null);
//   const [time, setTime] = useState(0);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     setRandomTarget();
//     const timer = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const setRandomTarget = () => {
//     const randomIndex = Math.floor(Math.random() * objectTypes.length);
//     setCurrentTarget(objectTypes[randomIndex]);
//   };

//   return (
//     <div className="traffic-sign-game">
//       <div className="top-bar">
//         <div>เวลา: <span style={{ color: 'red' }}>{(time / 100).toFixed(2)}</span> วินาที</div>
//         <div>
//           ประเภท: <span>{currentTarget?.category}</span><br />
//           ตามหา: <span>{currentTarget?.label}</span>
//         </div>
//         <div>คะแนน : {score}</div>
//       </div>
//       <div className="camera-area">
//         <video autoPlay muted playsInline className="webcam" />
//         {objectTypes.map((obj) => (
//           <img
//             key={obj.id}
//             src={obj.image}
//             alt={obj.label}
//             className="floating-sign"
//             style={{ top: `${Math.random() * 60 + 20}%`, left: `${Math.random() * 80 + 10}%` }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
