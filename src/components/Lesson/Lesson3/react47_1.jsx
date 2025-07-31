import '../../../css/47_1.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import number1 from '../../../asset3/Misc/1.png';
import number2 from '../../../asset3/Misc/2.png';
import number3 from '../../../asset3/Misc/3.png';
import number4 from '../../../asset3/Misc/4.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import term from '../../../asset3/Misc/เสี่ยง1.png';


const App = () => {
  const [showNextButton, setShowNextButton] = useState(false);
      useEffect(() => {
      document.body.className = 'page-bg471';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);

    useEffect(() => {
      const visited = JSON.parse(localStorage.getItem("visitedPages") || "[]");
      const updated = Array.from(new Set([...visited, "p47_1"]));
      localStorage.setItem("visitedPages", JSON.stringify(updated));
    }, []);

    useEffect(() => {
  localStorage.setItem("visited_p47_1", "true");
      const visitedAll = 
    localStorage.getItem("visited_p47_1") === "true" &&
    localStorage.getItem("visited_p47_2") === "true" &&
    localStorage.getItem("visited_p47_3") === "true" &&
    localStorage.getItem("visited_p47_4") === "true";

    if (visitedAll) {
      setShowNextButton(true);  // เปิดปุ่ม "ถัดไป"
    }
}, []);

  return (
    <div>
      {showNextButton && (
        <Link className="btnnext470" to="/p48" data-discover="true"
          onClick={() => {
            localStorage.removeItem("visited_p47_1");
            localStorage.removeItem("visited_p47_2");
            localStorage.removeItem("visited_p47_3");
            localStorage.removeItem("visited_p47_4");
          }}>
            แบบฝึกหัด &gt;&gt;
        </Link>
      )}
      <Link className="btnback471" to="/p47_0" data-discover="true">ย้อนกลับ</Link>
      <div className="center471">
        <h2>
          ความสูงของตัวรถ ทำให้บดบัง
          <br />ทัศนวิสัยในการทองเห็น ควรเว้น
          <br />ระยะห่างเผื่อเบรกของรถบรรทุก
        </h2>
        <img src={character} />
      </div>
      <div className="carder471">
        <img className="buntookbon471" src={buntookbon} />
      </div>
      <div className="left-triangle471"></div>
      <div className="right-triangle471"></div>
      <div className="bottom-triangle471"></div>
      <div className="top-square471"></div>
      <Link to="/p47_1" onClick={() => handleVisit(1)}>
        <img className="number1470" src={number1} />
      </Link>

      <Link to="/p47_2" onClick={() => handleVisit(2)}>
        <img className="number2470" src={number2} />
      </Link>

      <Link to="/p47_3" onClick={() => handleVisit(3)}>
        <img className="number3470" src={number3} />
      </Link>

      <Link to="/p47_4" onClick={() => handleVisit(4)}>
        <img className="number4470" src={number4} />
      </Link>
      <div className="text471">
        <img src={term} />
      </div>
    </div>
  );
};

export default App;
