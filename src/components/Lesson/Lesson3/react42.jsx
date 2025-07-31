import '../../../css/42.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import buntook from '../../../asset3/Misc/รถบรรทุกสุดหล่อ.png';
import morsai from '../../../asset3/Misc/มอไซ.png';
import eyebutton from '../../../asset3/icon/ตาไฟนอล.png';


const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg42';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <Link className="btneye42" to="/p43" data-discover="true">
        <img src={eyebutton} alt="ปุ่มรูปตา"/>
      </Link>
      <Link className="btnback42" to="/p41" data-discover="true">ย้อนกลับ</Link>
      <div className="center42">
        <h2>กดรูปตาเพื่อดูในมุมมองของคนขับรถบรรทุก</h2>
        <img src={character} />
      </div>
      <div className="carder42">
        <img className="buntook42" src={buntook} />
        <img className="morsai42" src={morsai} />
      </div>
    </div>
  );
};

export default App;
