// หน้าประกาศคะแนน ยังไม่เสร็จ
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../../../css/drag_and_drop6.css'

import morsaibon from '../../../asset3/Misc/morsaibon.png';
import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import car from '../../../asset3/Misc/รถ.png';


const PageDad6 = () => {
  useEffect(() => {
    document.body.className = 'page-bg500';

    return () => {
      document.body.className = '';
    };
  }, []);
  const location = useLocation();
  const { correctCount } = location.state || {};  // ใช้ || {} กัน null
  return (
    
    <div>
          <div className='centerfaildad6'>
            <h2>ไม่ผ่าน</h2>
            <h3>คะแนน: {correctCount}/3</h3>
          </div>
          <Link className='btnansdad6' to='/pdad5'>เฉลย</Link>
          <Link className='notbtnfaildad6' to='/pdad7'>ต่อไป</Link>
        
      <div className='overlaydad6'></div>
      <div className='top-squaredad6'></div>
      <div className='left-triangledad6'></div>
      <div className='right-triangledad6'></div>
      <div className='bottom-triangledad6'></div>
        <div className="carderdad6">
          <div className="car6dad6">
            <img src={morsaibon} />
          </div>
          <div className="car1dad6">
            <img src={morsaibon} />
          </div>
          <div className='car2dad6'>
            <img src={car} />
          </div>
          <div className='car3dad6'>
            <img src={car} />
          </div>
          <div className='car4dad6'>
            <img src={morsaibon} />
          </div>
          <div className='car5dad6'>
            <img src={car} />
          </div>
          <img className="buntookbondad6" src={buntookbon} />
          <div className='popupdad6'>
            
          </div>
      </div>
    </div>
  );
};

export default PageDad6;
