import '../../../css/drag_and_drop2.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';


import morsaibon from '../../../asset3/Misc/morsaibon.png';
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
      <Link className="btnbackdad2" to="/p49" data-discover="true">ย้อนกลับ</Link>
      <div className="centerdad2">
        <h2>ตามหารถที่เสี่ยงอันตราย</h2>
        <img src={character} />
      </div>
      <div className="carderdad2">
        <div className="maipodpai1dad2">
            <img src={morsaibon} />
        </div>
        <div className="maipodpai2dad2">
            <img src={morsaibon} />
        </div>
        <div className='rod1dad2'>
          <img src={car} />
        </div>
        <div className='rod2dad2'>
          <img src={car} />
        </div>
        <div className='morsaibon1dad2'>
            <img src={morsaibon} />
        </div>
        <div className='rod3dad2'>
            <img src={car} />
        </div>
        <img className="buntookbondad2" src={buntookbon} />
      </div>
    </div>
  );
};

export default App;
