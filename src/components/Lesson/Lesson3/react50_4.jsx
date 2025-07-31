import '../../../css/50_4.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import wrong from '../../../asset3/icon/ผิด2.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import car from '../../../asset3/Misc/รถ.png';


const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg504';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <Link className="btnback504" to="/p49" data-discover="true">ย้อนกลับ</Link>
      <img className='check504' src={wrong} />
      <div className="center504">
        <h2>ยังไม่ถูกต้อง ลองอีกทีนะคะ</h2>
        <img className='character504' src={character} />
      </div>
      <div className='block504'></div>
      <div className="carder504">
        <Link className="maipodpai1504" to="/p50_3" data-discover="true">
            <img src={car} />
        </Link>
        <Link className="maipodpai2504" to="/p50_1" data-discover="true">
            <img src={car} />
        </Link>
        <Link className='rod1504' to="/p50_2" data-discover="true">
          <img src={car} />
        </Link>
        <Link className='rod2504' to="/p50_4" data-discover="true">
          <img src={car} />
        </Link>
        <img className="buntookbon504" src={buntookbon} />
      </div>
    </div>
  );
};

export default App;
