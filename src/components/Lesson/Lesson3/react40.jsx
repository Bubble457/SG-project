import '../../../css/40.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import buntook from '../../../asset3/Misc/รถบรรทุกสุดหล่อ.png';
import morsai from '../../../asset3/Misc/มอไซ.png';



const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg40';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <Link className="btnnext40" to="/p41" data-discover="true">ต่อไป &gt;&gt;</Link>
      <Link className="btnback40" to="/p39" data-discover="true">ย้อนกลับ</Link>
      <div className="center40">
        <h2>ขับไปจอดใกล้ๆดีกว่า พอไฟเขียวจะได้ขับไปเร็ว</h2>
        <img src={character} />
      </div>
      <div className="carder40">
        <img className="buntook40" src={buntook} />
        <img className="morsai40" src={morsai} />
     </div>
     </div>
  );
};

export default App;
