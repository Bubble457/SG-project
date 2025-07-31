import '../../../css/49.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import number1 from '../../../asset3/Misc/1.png';
import number2 from '../../../asset3/Misc/2.png';
import number3 from '../../../asset3/Misc/3.png';
import eye from '../../../asset3/Misc/eye.png';
import book from '../../../asset3/Misc/11.png';
import mouse from '../../../asset3/Misc/เมาส์.png';

const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg49';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <div className="background49">
        <div className="buttongroup49">
          <Link className="btnnext49" to="/p50_0" data-discover="true">เริ่ม</Link>
          <Link className="btnback49" to="/p48" data-discover="true">ย้อนกลับ</Link>
        </div>
        <div className="number49">
          <img className="number149" src={number1} />
          <img className="number249" src={number2} />
          <img className="number349" src={number3} />
        </div>
        <div className="center49">
          <h1>วิธีการเล่น</h1>
          <h2 className="first49">
            <p>สังเกตตำแหน่ง</p>
            <p>ของรถคันสีขาว</p>
            <img src={eye} />
          </h2>
          <h2 className="second49">
            <p>วิเคราะห์รถที่คิด</p>
            <p>ว่าอยู่ตรงจุดบอด</p>
            <img src={book} />
          </h2>
          <h2 className="third49">
            <p>ใช้เมาส์คลิก</p>
            <p>เลือกรูปรถ</p>
            <p>ที่ต้องการ</p>
            <img src={mouse} />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default App;
