//หน้าเฉลยข้อ
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../../../css/drag_and_drop5.css'
import { Navigate } from 'react-router-dom';

import morsaibon from '../../../asset3/Misc/morsaibon.png';
import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import buntookbon from '../../../asset3/Misc/รถบรรทุก.png';
import car from '../../../asset3/Misc/รถ.png';


const PageDad5 = () => {
  useEffect(() => {
    document.body.className = 'page-bg500';

    return () => {
      document.body.className = '';
    };
  }, []);
  const location =useLocation();
  const { correctCount } = location.state || {};  // ใช้ || {} กัน null
  return (
    
    <div>
      <Link className='btnnextdad5' to='/pdad6' state={{correctCount}}>ถัดไป &gt;&gt;</Link>
      <div className="centerdad5">
        <h1>ด้านซ้าย</h1>
        <h2>ตรงกลาง</h2>
        <h3>ด้านขวา</h3>
      </div>
      <div className='border1dad5'></div>
      <div className='border2dad5'></div>
      <div className='border3dad5'></div>
      <div className='top-squaredad5'></div>
      <div className='left-triangledad5'></div>
      <div className='right-triangledad5'></div>
      <div className='bottom-triangledad5'></div>
        <div className="carderdad5">
          <div className="car6dad5">
            <img src={morsaibon} />
          </div>
          <div className="car1dad5">
            <img src={morsaibon} />
          </div>
          <div className='car2dad5'>
            <img src={car} />
          </div>
          <div className='car3dad5'>
            <img src={car} />
          </div>
          <div className='car4dad5'>
            <img src={morsaibon} />
          </div>
          <div className='car5dad5'>
            <img src={car} />
          </div>
          <img className="buntookbondad5" src={buntookbon} />
      </div>
    </div>
  );
};

export default PageDad5;
