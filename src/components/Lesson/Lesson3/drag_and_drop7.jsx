import '../../../css/drag_and_drop7.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/hero.png';

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
      <img src={character} alt="..." style={{ transform: 'scaleX(-1)' }} />
      <div>
        <Link to="#" className="btnnext38" >เริ่ม</Link>
        <Link className="btnbackdad7" to="#" >ย้อนกลับ</Link>
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
