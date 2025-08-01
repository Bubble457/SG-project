import '../../../css/50_1.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import check from '../../../asset3/icon/ถูก.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import car from '../../../asset3/Misc/รถ.png';

const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg501';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <Link className="btnnext501" to="/pdad" data-discover="true">ต่อไป &gt;&gt;</Link>
      <Link className="btnback501" to="/p49" data-discover="true">ย้อนกลับ</Link>
      <img className='check501' src={check} />
      <div className="center501">
        <h2>ถูกต้องแล้วคะ</h2>
        <img className='character501' src={character} />
      </div>
      <div className='block501'></div>
      <div className="carder501">
        <Link className="maipodpai1501" to="/p50_3" data-discover="true">
            <img src={car} />
        </Link>
        <Link className="maipodpai2501" to="/p50_1" data-discover="true">
            <img src={car} />
        </Link>
        <Link className='rod1501' to="/p50_2" data-discover="true">
          <img src={car} />
        </Link>
        <Link className='rod2501' to="/p50_4" data-discover="true">
          <img src={car} />
        </Link>
        <img className="buntookbon501" src={buntookbon} />
      </div>
    </div>
  );
};

export default App;
