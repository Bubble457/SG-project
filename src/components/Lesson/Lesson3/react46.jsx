import '../../../css/46.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import buntook from '../../../asset3/Misc/รถบรรทุกสุดหล่อ.png';
import morsai from '../../../asset3/Misc/มอไซ.png';
import check from '../../../asset3/icon/ถูก.png';
import arrow from '../../../asset3/Misc/ลูกษร.png';

const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg46';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <Link className="btnnext46" to="/p47_0" data-discover="true">ต่อไป &gt;&gt;</Link>
      <Link className="btnback46" to="/p45" data-discover="true">ย้อนกลับ</Link>
      <div className="center46">
        <h1>วิธีที่ถูกต้อง</h1>
        <h2>เราควรรักษาระยะห่างจากรถคันด้านหน้า</h2>
        <img src={character} />
      </div>
      <div className="carder46">
        <img className="buntook46" src={buntook} />
        <img className="morsai46" src={morsai} />
      </div>
      <div className="icon46">
        <img className="check46" src={check} />
      </div>
      <img className="arrow46" src={arrow} />
    </div>
  );
};

export default App;
