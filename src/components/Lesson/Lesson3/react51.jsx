import '../../../css/51.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import pencil from'../../../asset3/icon/ดินสอ.png';

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
            <Link className="btnback51" to="/p50_4" data-discover="true">ย้อนกลับ</Link>
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
