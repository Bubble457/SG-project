import '../../../css/50_0.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import car from '../../../asset3/Misc/รถ.png';

const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg500';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <Link className="btnback500" to="/p49" data-discover="true">ย้อนกลับ</Link>
      <div className="center500">
        <h2>ตามหารถที่เสี่ยงอันตราย</h2>
        <img src={character} />
      </div>
      <div className="carder500">
        <Link className="maipodpai1500" to="/p50_3" data-discover="true">
            <img src={car} />
        </Link>
        <Link className="maipodpai2500" to="/p50_1" data-discover="true">
            <img src={car} />
        </Link>
        <Link className='rod1500' to="/p50_2" data-discover="true">
          <img src={car} />
        </Link>
        <Link className='rod2500' to="/p50_4" data-discover="true">
          <img src={car} />
        </Link>
        <img className="buntookbon500" src={buntookbon} />
      </div>
    </div>
  );
};

export default App;
