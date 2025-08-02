import '../../../css/drag_and_drop7.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/hero.png';
import btn from '../../../asset3/icon/ปุ่มสำเร็จรูป.png'

const App = () => {

    useEffect(() => {
    document.body.className = 'page-bgdad7';

    // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div>
      <div className='blockwhdad7'></div>
      <div className='blockbldad7'></div>
      <img className='characterdad7' src={character} alt="..." style={{ transform: 'scaleX(-1)' }} />
      <div>
        <Link to="/p53" className="btnnextdad7" >ต่อไป &gt;&gt;</Link>
        <Link to="#" className='btnbackdad7'>กลับไปหน้าหลัก</Link>
        <Link to="#" className='btnreturndad7'>
          <img src={btn} />
        </Link>
      </div>
      <div className="centerdad7">
        <h3>สรุปคะแนน</h3>
          <h1 className='kengdad7'>เก่งมาก!</h1>
          <h2 className='scoredad7'>คะแนน : 5</h2>
          <h4 className='accuratedad7'>ความแม่นยำ : 100</h4>
      </div>
    </div>
    
  );
};

export default App;
