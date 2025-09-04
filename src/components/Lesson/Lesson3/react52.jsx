import '../../../css/52.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import nono from '../../../asset3/Misc/ห้าม.png';
import gunnock from '../../../asset3/Misc/หมวก.png';
import bike from '../../../asset3/Misc/IMG_8911.PNG';
import backbtn from '../../../assets/back1.png';


const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg52';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <div className="background52">
        <div className="buttongroup52">
            <Link className="btnred52" to="/p53" data-discover="true">ไม่จริง</Link>
            <Link className="btngreen52" to="/p53" data-discover="true">จริง</Link>
            <Link to='/p51'>
                <div className='back-btn'>
                <img src={backbtn} alt='back' className='img-back' />
                <p className='text-back'>ย้อนกลับ</p>
                </div>
            </Link>
        </div>
        <div className="center52">
            <h1>จริง หรือ ไม่?!</h1>
            <h2>ขับรถไม่ใส่หมวกเป็นสิ่งที่ปลอดภัย</h2>
            <h3>แบบทดสอบหลังเรียน</h3>
        </div>
        <div className="pic52">
                <img className="gunnock52" src={gunnock} />
                <img className="nono52" src={nono} />
                <img className="bike52" src={bike} />
        </div>
        <div className="block52"></div>
      </div>
    </div>
  );
};

export default App;
