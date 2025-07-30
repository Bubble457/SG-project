import '../../../css/drag_and_drop2.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useNavigate } from 'react';

import morsaibon from '../../../asset3/Misc/morsaibon.png';
import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import car from '../../../asset3/Misc/รถ.png';

const cars = [
  { id: "car6", img: morsaibon },
  { id: "car1", img: morsaibon },
  { id: "car2", img: car },
  { id: "car3", img: car },
  { id: "car4", img: morsaibon },
  { id: "car5", img: car }
];

const App = () => {
  useEffect(() => {
    document.body.className = 'page-bg500';

    return () => {
      document.body.className = '';
    };
  }, []);

  const navigate = useNavigate();
  const [selectedIds, setSelectedIds] = useState([]);

  const handleClick = (carId) => {
    if (selectedIds.includes(carId)) {
      // ลบออกถ้าเลือกไว้แล้ว
      setSelectedIds(prev => prev.filter(id => id !== carId));
    } else {
      // เพิ่มถ้ายังไม่เลือก และไม่เกิน 3 ตัว
      if (selectedIds.length >= 3) return;
      setSelectedIds(prev => [...prev, carId]);
    }
  };

  return (
    <div>
      {selectedIds.length === 3 && (
        <Link className="btnnextdad2" to="/p51" /*state={{ selectedCars: selectedIds }}*/> ตรวจคำตอบ</Link>
      )}
      <Link className="btnbackdad2" to="/pdad" data-discover="true">ย้อนกลับ</Link>
      <div className="centerdad2">
        <h2>ตามหารถที่เสี่ยงอันตราย</h2>
        <img src={character} />
      </div>
      <div className="carderdad2">
        {cars.map(({ id, img }) => {
          const isSelected = selectedIds.includes(id);
          return (
            <div
              key={id}
              className={`${id}dad2 ${isSelected ? "active" : ""}`}
              onClick={() => handleClick(id)}
            >
              <img src={img} />
            </div>
          );
        })}
        <img className="buntookbondad2" src={buntookbon} />
      </div>
    </div>
  );
};

export default App;
