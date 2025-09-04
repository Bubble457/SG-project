import '../../../css/39.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import buntook from '../../../asset3/Misc/รถบรรทุกสุดหล่อ.png';
import backbtn from '../../../assets/back1.png';




const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg39';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
     <Link className="btnnext39" to="/p40" data-discover="true">ต่อไป &gt;&gt;</Link>
            <Link to='/p38'>
                <div className='back-btn'>
                <img src={backbtn} alt='back' className='img-back' />
                <p className='text-back'>ย้อนกลับ</p>
                </div>
            </Link>
      <div className="center39">
         <h2>วันนี้ต้องขี่รถมอเตอร์ไซต์ไปโรงเรียน แต่เจอรถบรรทุกจอดติดไฟแดงอยู่ข้างหน้าพอดี</h2>
          <img src={character} />
      </div>
      <div className="carder39">
          <img className="buntook39" src={buntook} />
      </div>
    </div>
    
  );
};

export default App;
