// หน้าประกาศคะแนน ยังไม่เสร็จ
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../../../css/drag_and_drop4.css'

import morsaibon from '../../../asset3/Misc/morsaibon.png';
import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import car from '../../../asset3/Misc/รถ.png';


const PageDad4 = () => {
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
      {correctCount === 3 && (
        <>
          <Link className='btnnextpassdad4' to='/pdad7'>ต่อไป</Link>
          <div className='centerdad4'>
            <h2>ผ่าน</h2>
            <h3>คะแนน: 3/3</h3>
          </div>
        </>
      )}
      {correctCount < 3 && (
        <>
          <div className='centerfaildad4'>
            <h2>ไม่ผ่าน</h2>
            <h3>คะแนน: {correctCount}/3</h3>
          </div>
          <Link className='btnansdad4' to='/pdad5' state={{correctCount}} >เฉลย</Link>
          <h4 className='notbtnfaildad4' >ต่อไป</h4>
        </>
      )}


      <div className='overlaydad4'></div>
      <div className='top-squaredad4'></div>
      <div className='left-triangledad4'></div>
      <div className='right-triangledad4'></div>
      <div className='bottom-triangledad4'></div>
        <div className="carderdad4">
          <div className="car6dad4">
            <img src={morsaibon} />
          </div>
          <div className="car1dad4">
            <img src={morsaibon} />
          </div>
          <div className='car2dad4'>
            <img src={car} />
          </div>
          <div className='car3dad4'>
            <img src={car} />
          </div>
          <div className='car4dad4'>
            <img src={morsaibon} />
          </div>
          <div className='car5dad4'>
            <img src={car} />
          </div>
          <img className="buntookbondad4" src={buntookbon} />
          <div className='popupdad4'>
            
          </div>
      </div>
    </div>
  );
};

export default PageDad4;
