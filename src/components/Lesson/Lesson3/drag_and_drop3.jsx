import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../../../css/drag_and_drop3.css'
import { Navigate } from 'react-router-dom';

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
  const { score, selectedCars } = location.state || {};  // ใช้ || {} กัน null
  const correctAnswers = ['car1', 'car3', 'car4'];
  const correctCount = selectedCars.filter(car => correctAnswers.includes(car)).length;
  return (
    
    <div>
      <Link className='btnnextdad3' to='/pdad4'>ถัดไป{'>>'}</Link>
      <Link className="btnbackdad3" to="/pdad2" data-discover="true">ย้อนกลับ</Link>
      <div className="centerdad3">
        <h2 style={{ color: correctCount >= 3 ? 'green' : 'red' }}>
            {correctCount >= 3 ? "ผ่าน " : "ไม่ผ่าน "} คะแนนของคุณ: {correctCount} / 3
        </h2>
      </div>
      <div className='top-squaredad3'></div>
      <div className='left-triangledad3'></div>
      <div className='right-triangledad3'></div>
      <div className='bottom-triangledad3'></div>
        <div className="carderdad3">
          <div className="car6dad3">
            <img src={morsaibon} />
          </div>
          <div className="car1dad3">
            <img src={morsaibon} />
          </div>
          <div className='car2dad3'>
            <img src={car} />
          </div>
          <div className='car3dad3'>
            <img src={car} />
          </div>
          <div className='car4dad3'>
            <img src={morsaibon} />
          </div>
          <div className='car5dad3'>
            <img src={car} />
          </div>
          <img className="buntookbondad3" src={buntookbon} />
      </div>
    </div>
  );
};

export default PageDad4;
