import '../../../css/51.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import pencil from'../../../asset3/icon/ดินสอ.png';
import backbtn from '../../../assets/back1.png';

const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg51';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <div className="background51">
        <div className="buttongroup51">
            <Link className="btnnext51" to="/p52" data-discover="true">เริ่ม</Link>
            <Link to='/p50_0'>
                <div className='back-btn'>
                <img src={backbtn} alt='back' className='img-back' />
                <p className='text-back'>ย้อนกลับ</p>
                </div>
            </Link>
        </div>
        <img className="pencil51" src={pencil} />
        <div className="center51">
            <div className="caution51">
                <h1>แบบทดสอบหลังเรียน</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;
