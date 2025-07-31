// หน้าประกาศคะแนน ยังไม่เสร็จ
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../../../css/drag_and_drop3.css'

import morsaibon from '../../../asset3/Misc/morsaibon.png';
import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import car from '../../../asset3/Misc/รถ.png';


const PageDad3 = () => {
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
      
      <div className="centerdad4">
      {correctCount === 3 && (
        <Link className='btnnextdad4' to="/p51">ต่อไป {'>>'}</Link>
      )}
      {correctCount < 3 && (
        <Link className="btnbackdad4" to="/pdad5" data-discover="true">เฉลย</Link>
      )}
      </div>
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
      </div>
    </div>
  );
};

export default PageDad3;
