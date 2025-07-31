import '../../../css/47_0.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import number1 from '../../../asset3/Misc/1.png';
import number2 from '../../../asset3/Misc/2.png';
import number3 from '../../../asset3/Misc/3.png';
import number4 from '../../../asset3/Misc/4.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import term from '../../../asset3/Misc/เติม.png';



const App = () => {
  const [showNextButton, setShowNextButton] = useState(false);
  const [visitedPages, setVisitedPages] = useState([]);

  useEffect(() => {
    document.body.className = 'page-bg470';
    // โหลดข้อมูลว่าเคยไปหน้ารองยัง
    const stored = localStorage.getItem('visited470');
    if (stored) {
      setVisitedPages(JSON.parse(stored));
    }
    const visitedAll = 
    localStorage.getItem("visited_p47_1") === "true" &&
    localStorage.getItem("visited_p47_2") === "true" &&
    localStorage.getItem("visited_p47_3") === "true" &&
    localStorage.getItem("visited_p47_4") === "true";

    if (visitedAll) {
      setShowNextButton(true);  // เปิดปุ่ม "ถัดไป"
    }

    localStorage.removeItem("visited_p47_1");
    localStorage.removeItem("visited_p47_2");
    localStorage.removeItem("visited_p47_3");
    localStorage.removeItem("visited_p47_4");

    return () => {
      document.body.className = '';
    };
  }, []);

  const handleVisit = (pageId) => {
    const newVisited = [...new Set([...visitedPages, pageId])]; // กันซ้ำ
    setVisitedPages(newVisited);
    localStorage.setItem('visited470', JSON.stringify(newVisited));
  };

  const allVisited = [1, 2, 3, 4].every(n => visitedPages.includes(n)); //ใส่ค่า


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
      <Link className="btnback470" to="/p46" data-discover="true">ย้อนกลับ</Link>
      <div className="center470">
        <h2>คลิกที่ปุ่มตัวเลขเพื่อเรียนรู้จุดเสี่ยงในแต่ละจุด</h2>
        <img src={character} />
      </div>
      <div className="carder470">
        <img className="buntookbon470" src={buntookbon} />
      </div>
      <div className="left-triangle470"></div>
      <div className="right-triangle470"></div>
      <div className="bottom-triangle470"></div>
      <div className="top-square470"></div>
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
      <div className="text470">
        <img src={term} />
      </div>
    </div>
  );
};

export default App;
