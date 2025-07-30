import '../../../css/53.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import btnpurple from '../../../asset3/icon/รายงาน.png';
import btnyellow from '../../../asset3/icon/ทบทวน.png';
import btngreen from '../../../asset3/icon/หน้าหลัก.png';
import object from '../../../asset3/Misc/อ็อปเจคๆๆ.png';

const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg53';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <div className="background53">
        <div className="buttongroup53">
            <Link className="btnpurple53" to="/p54" data-discover="true">
                <img src={btnpurple} />
                <h1>รายงาน</h1>
            </Link>
            <Link className="btnyellow53" to="/p53" data-discover="true">
                <img src={btnyellow} />
                <h1>ทบทวน</h1>
            </Link>
            <Link className="btngreen53" to="#" data-discover="true">
                <img src={btngreen} />
                <h1>หน้าหลัก</h1>
            </Link>
            <Link className="btnback53" to="/p52" data-discover="true">ย้อนกลับ</Link>
        </div>
        <div className="center53">
            <h1>
                <span style={{ color:'rgb(48, 34, 54)'}}>ทบทวนข้อที่</span>
                <span style={{ color: 'red' }}>ผิด</span>
            </h1>
            <img className="lesson53" src={object} />
        </div>
        <div className="block53"></div>
      </div>
    </div>
  );
};

export default App;
