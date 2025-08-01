// เกมลาก
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../../../css/drag_and_drop.css";

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import car from '../../../asset3/Misc/รถ.png';


function App() {
  const [message, setMessage] = useState("ลากรถไปยังจุดที่ปลอดภัย");
  const [showNextButton, setShowNextButton] = useState(false);
  const handleDrop = (boxId, holeId, holeColor) => {
    if (boxId === holeId) {
      setMessage("วางถูกแล้ว! เยี่ยมมาก!");

      if (holeColor === "green" || holeColor === "#90ee90") {
        setShowNextButton(true); // แสดงปุ่มถัดไปเมื่อเจอรูเขียว
      }
    } else {
      setMessage("ยังไม่ถูกต้องนะครับ คนขับอาจจะมองไม่เห็นด้านหลังได้");
    }
  };

  const boxWidth = 200;
  const boxHeight = 200;
  const snapZone = [
    { id: 1, x: 570, y: 734, width: 130, height: 220 },
    { id: 2, x: 710, y: 734, width: 130, height: 220 },
    { id: 3, x: 840, y: 430, width: 130, height: 220 }
  ];
  const snapThreshold = 50;

  const [position, setPosition] = useState({ x: 545, y: 525 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [snapped, setSnapped] = useState(false);
  const [activeZoneId, setActiveZoneId] = useState(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - offset.x;
    const newY = e.clientY - offset.y;

    if (snapped) {
      const dx = Math.abs(newX - snapZone[1].x);
      const dy = Math.abs(newY - snapZone[1].y);
      if (dx > snapThreshold || dy > snapThreshold) {
        setSnapped(false);
        setActiveZoneId(null);
        setPosition({ x: newX, y: newY });
      }
    } else {
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    let closestZone = null;
    let minDist = Infinity;

    snapZone.forEach(zone => {
      const centerX = zone.x + zone.width / 2 - boxWidth / 2;
      const centerY = zone.y + zone.height / 2 - boxHeight / 2;

      const dx = Math.abs(position.x - centerX);
      const dy = Math.abs(position.y - centerY);
      if (dx < snapThreshold && dy < snapThreshold) {
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          minDist = dist;
          closestZone = zone;
        }
      }
    });

    if (closestZone) {
      setPosition({
        x: closestZone.x + closestZone.width / 2 - boxWidth / 2,
        y: closestZone.y + closestZone.height / 2 - boxHeight / 2,
      });
      setSnapped(true);
      setActiveZoneId(closestZone.id);
      handleDrop(1, closestZone.id, closestZone.id === 1 ? "green" : "red");
    }
  };

  return (
    <div
      className="containerdad"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {showNextButton && (
        <Link className="btnnextdad" to="/pdad2" data-discover="true">ต่อไป &gt;&gt;</Link>
      )}
      <Link className="btnbackdad" to="/p50_0" data-discover="true">ย้อนกลับ</Link>
      <div className="centerdad">
        <h2>{message}</h2>
        <img src={character} />
      </div>
      <div className="carderdad">
        <div className="maipodpai1dad">
            <img src={car} />
        </div>
        <div className='rod1dad'>
          <img src={car} />
        </div>
          <div className='rod2dad'>
          <img src={car} />
        </div>
        <img className="buntookbondad" src={buntookbon} />
      </div>
      {/* snapZone */}
      {snapZone.map(zone => (
        <div
          key={zone.id}
          className="target-holedad"
          style={{
            left: zone.x,
            top: zone.y,
            width: zone.width,
            height: zone.height,
            borderRadius: '50px',
            position: 'absolute',
            backgroundColor: activeZoneId === zone.id
              ? (zone.id === 1 ? '#90ee90' : '#ff6666')  // ✅ เขียวเมื่อ id=1, แดงเมื่อ id=2/3
              : '#ffffff40',
            border: '2px solid #999',
            transition: '0.3s',
          }}
        />
      ))}

      {/* draggable box */}
      <div
        className="draggable-boxdad"
        onMouseDown={handleMouseDown}
        style={{
          left: position.x,
          top: position.y,
          width: boxWidth,
          height: boxHeight,
          position: 'absolute',
          cursor: 'grab',
        }}
      >
        <img src={car} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </div>
    </div>
  );
}

export default App;
