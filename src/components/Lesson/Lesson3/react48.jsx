import '../../../css/48.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import muang from'../../../asset3/icon/ม่วง.png';
import backbtn from '../../../assets/back1.png';

const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg48';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <div className="background48">
        <div className="buttongroup48">
          <Link className="btnnext48" to="/p49" data-discover="true">ต่อไป &gt;&gt;</Link>
            <Link to='/p47_0'>
                <div className='back-btn'>
                <img src={backbtn} alt='back' className='img-back' />
                <p className='text-back'>ย้อนกลับ</p>
                </div>
            </Link>
        </div>
        <div className="center48">
          <h3>แบบฝึกหัด</h3>
          <div className="caution48">
            <img src={muang} />
            <h1>ร่วมด้วยช่วยระบุ</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
