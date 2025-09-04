import '../../../css/38.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import cautionImg from '../../../asset3/icon/caution.png';
import backbtn from '../../../assets/back1.png';




const App = () => {

    useEffect(() => {
    document.body.className = 'page-bg38';

    // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
    return () => {
      document.body.className = '';
    };
  }, []);

  return (
    <div>
      <div>
        <Link to="/p39" className="btnnext38" >เริ่ม</Link>
            <Link to='/page13'>
                <div className='back-btn'>
                <img src={backbtn} alt='back' className='img-back' />
                <p className='text-back'>ย้อนกลับ</p>
                </div>
            </Link>
      </div>
      <div className="center38">
        <h3>บทที่ 3</h3>
        <div className="caution38">
          <img src={cautionImg} alt="caution" />
          <h1>จุดบอดรอบตัว</h1>
        </div>
      </div>
    </div>
    
  );
};

export default App;
