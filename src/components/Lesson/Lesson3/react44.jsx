import '../../../css/44.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import buntook from '../../../asset3/Misc/รถบรรทุกสุดหล่อ.png';
import morsai from '../../../asset3/Misc/มอไซ.png';
import eyebutton from '../../../asset3/icon/ตาไฟนอล.png';
import wrong from '../../../asset3/icon/wrong.webp';

const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg44';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <div className="btneye44">
        <img className="eye44" src={eyebutton} alt="ปุ่มรูปตา" />
        <img className="wrong44" src={wrong} alt="กากบาท" />
      </div>
      <Link className="btnnext44" to="/p45" data-discover="true">ต่อไป {'>>'}</Link>
      <Link className="btnback44" to="/p43" data-discover="true">ย้อนกลับ</Link>
      <div className="center44">
        <h2>
            <span style={{ color: 'rgba(0, 0, 0, 1)' }}>ที่เรามองไม่เห็น เพราะรถมอเตอร์ไซต์จอดอยู่ใน</span>
          <span style={{ color: 'rgb(223, 16, 16)' }}>จุดบอด</span>
          <span style={{ color: 'rgba(0, 0, 0, 1)' }}>นั่นเอง</span>
            
        </h2>
        <img src={character} />
      </div>
      <div className="carder44">
        <img className="buntook44" src={buntook} />
        <img className="morsai44" src={morsai} />
      </div>
    </div>
  );
};

export default App;
