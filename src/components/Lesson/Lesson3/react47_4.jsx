import '../../../css/47_4.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import number1 from '../../../asset3/Misc/1.png';
import number2 from '../../../asset3/Misc/2.png';
import number3 from '../../../asset3/Misc/3.png';
import number4 from '../../../asset3/Misc/4.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import term from '../../../asset3/Misc/เสี่ยง4.png';

const App = () => {
  const [showNextButton, setShowNextButton] = useState(false);
      useEffect(() => {
      document.body.className = 'page-bg474';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);

    useEffect(() => {
      const visited = JSON.parse(localStorage.getItem("visitedPages") || "[]");
      const updated = Array.from(new Set([...visited, "p47_4"]));
      localStorage.setItem("visitedPages", JSON.stringify(updated));
    }, []);

    useEffect(() => {
  localStorage.setItem("visited_p47_4", "true");
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
      <Link className="btnback474" to="/p47_3" data-discover="true">ย้อนกลับ</Link>
      <div className="center474">
        <h2>
          มีวิสัยทัศน์แคบ คนขับรถบรรทุก
          <br />จะสังเกตเห็นรถอื่นได้ยาก
        </h2>
        <img src={character} />
      </div>
      <div className="carder474">
        <img className="buntookbon474" src={buntookbon} />
      </div>
      <div className="left-triangle474"></div>
      <div className="right-triangle474"></div>
      <div className="bottom-triangle474"></div>
      <div className="top-square474"></div>
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
      <div className="text474">
        <img src={term} />
      </div>
    </div>
  );
};

export default App;
