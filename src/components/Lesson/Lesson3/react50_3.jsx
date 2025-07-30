import '../../../css/50_3.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import wrong from '../../../asset3/icon/ผิด2.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import car from '../../../asset3/Misc/รถ.png';


const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg503';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <Link className="btnback503" to="/p49" data-discover="true">ย้อนกลับ</Link>
      <img className='check503' src={wrong} />
      <div className="center503">
        <h2>ยังไม่ถูกต้อง ลองอีกทีนะคะ</h2>
        <img className='character503' src={character} />
      </div>
      <div className='block503'></div>
      <div className="carder503">
        <Link className="maipodpai1503" to="/p50_3" data-discover="true">
            <img src={car} />
        </Link>
        <Link className="maipodpai2503" to="/p50_1" data-discover="true">
            <img src={car} />
        </Link>
        <Link className='rod1503' to="/p50_2" data-discover="true">
          <img src={car} />
        </Link>
        <Link className='rod2503' to="/p50_4" data-discover="true">
          <img src={car} />
        </Link>
        <img className="buntookbon503" src={buntookbon} />
      </div>
    </div>
  );
};

export default App;
