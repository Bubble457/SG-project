import React, { useState } from "react";
import "../../../css/drag_and_drop.css";

const character = require('../asset/Misc/halfcharacter.PNG');
const buntook = require('../asset/Misc/รถบรรทุกสุดหล่อ.png');
const morsai = require('../asset/Misc/มอไซ.png');
const eyebutton = require('../asset/icon/eye.png')
const korb = require('../asset/Misc/เทส.png')
const kajog = require('../asset/Misc/กระจกรถ.png')
const wrong = require('../asset/icon/wrong.webp')
const news = require('../asset/background/news.jpg')
const check = require('../asset/icon/ถูก.png')
const arrow = require('../asset/Misc/ลูกษร.png')
const number1 = require('../asset/Misc/1.png')
const number2 = require('../asset/Misc/2.png')
const number3 = require('../asset/Misc/3.png')
const number4 = require('../asset/Misc/4.png')
const buntookbon = require('../asset/Misc/รถบรรทุก.png')
const term = require('../asset/Misc/เติม.png')
const muang = require('../asset/icon/ม่วง.png')
const eye = require('../asset/Misc/eye.png')
const book = require('../asset/Misc/11.png')
const mouse = require('../asset/Misc/เมาส์.png')
const car = require('../asset/Misc/รถ.png')


function App() {
  const boxWidth = 250;
  const boxHeight = 250;
  const snapZone = [
    { id: 1, x: 570, y: 734, width: 120, height: 230 },
    { id: 2, x: 710, y: 734, width: 120, height: 230 },
    { id: 3, x: 840, y: 507, width: 120, height: 230 }
  ];
  const snapThreshold = 50;

  const [position, setPosition] = useState({ x: 515, y: 425 });
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
    }
  };

  return (
    <div
      className="container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <a class="btnnext" href="../html/storyboard_number_51.html" data-discover="true">ต่อไป &gt;&gt;</a>
      <a class="btnback" href="../html/storyboard_number_49.html" data-discover="true">ย้อนกลับ</a>
      <div class="center">
        <h2>ลากรถไปยังจุดที่ปลอดภัย</h2>
        <img src={character} />
      </div>
      <div class="carder">
        <div class="maipodpai1">
            <img src={car} />
        </div>
        <div className='rod1'>
          <img src={car} />
        </div>
          <div className='rod2'>
          <img src={car} />
        </div>
        <img class="buntookbon" src={buntookbon} />
      </div>
      {/* snapZone */}
      {snapZone.map(zone => (
        <div
          key={zone.id}
          className="target-hole"
          style={{
            left: zone.x,
            top: zone.y,
            width: zone.width,
            height: zone.height,
            borderRadius: '10px',
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
        className="draggable-box"
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
