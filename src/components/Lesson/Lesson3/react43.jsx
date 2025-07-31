import '../../../css/43.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import korb from '../../../asset3/Misc/เทส.png';
import kajog from '../../../asset3/Misc/กระจกรถ.png';

const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg43';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <Link className="btnpink43" to="/p44" data-discover="true">หายตัวได้</Link>
      <Link className="btnblue43" to="/p44" data-discover="true">อยู่ในที่ที่มองไม่เห็น</Link>
      <Link className="btnback43" to="/p42" data-discover="true">ย้อนกลับ</Link>
      <div className="center43">
        <h2>รถมอเตอร์ไซต์หายไปไหน</h2>
        <img src={character} />
      </div>
      <div className="block43"></div>
      <div className="carder43">
        <img className="korb43" src={korb} />
        <img className="kajog43" src={kajog} />
      </div>
    </div>
  );
};

export default App;
