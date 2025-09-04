import '../../../css/41.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import buntook from '../../../asset3/Misc/รถบรรทุกสุดหล่อ.png';
import morsai from '../../../asset3/Misc/มอไซ.png';
import backbtn from '../../../assets/back1.png';



const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg41';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <Link className="btnnext41" to="/p42" data-discover="true">ต่อไป &gt;&gt;</Link>
            <Link to='/p40'>
                <div className='back-btn'>
                <img src={backbtn} alt='back' className='img-back' />
                <p className='text-back'>ย้อนกลับ</p>
                </div>
            </Link>
      <div className="center41">
        <h1>
          <span style={{ color: 'rgb(255, 255, 255)' }}>แต่จะ</span>
          <span style={{ color: 'rgb(223, 16, 16)' }}>ปลอดภัย</span>
          <span style={{ color: 'rgb(255, 255, 255)' }}>รึเปล่านะ</span>
        </h1>
      </div>
      <div className="carder41">
        <img className="buntook41" src={buntook} />
        <img className="morsai41" src={morsai} />
      </div>
    </div>
  );
};

export default App;
