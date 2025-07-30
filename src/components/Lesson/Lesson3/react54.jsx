import '../../../css/54.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import btnpurple from '../../../asset3/icon/รายงาน.png';
import btnyellow from '../../../asset3/icon/ทบทวน.png';
import btngreen from '../../../asset3/icon/หน้าหลัก.png';
import graph from '../../../asset3/Misc/กราฟ.png';
import profile from '../../../asset3/icon/สำเนาๆๆๆๆๆๆ (2).png';
import siang from '../../../asset3/icon/เขียว.png';
import ta from '../../../asset3/icon/eye.png';
import caution from '../../../asset3/icon/caution.png';

const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg54';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div className="background54">
      <div className="buttongroup54">
        <Link className="btnpurple54" to="/p54" data-discover="true">
          <img src={btnpurple} alt="รายงาน" />
          <h1>รายงาน</h1>
        </Link>
        <Link className="btnyellow54" to="/p53" data-discover="true">
          <img src={btnyellow} alt="ทบทวน" />
          <h1>ทบทวน</h1>
        </Link>
        <Link className="btngreen54" to="/p15" data-discover="true">
          <img src={btngreen} alt="หน้าหลัก" />
          <h1>หน้าหลัก</h1>
        </Link>
      </div>

      <div className="center54">
        <div className="graph54">
          <img src={graph} alt="กราฟ" />
        </div>
        <div className="profile54">
          <img src={profile} alt="โปรไฟล์" />
        </div>
        <div className="information54">
          <h2>ข้อมูลผู้ใช้เบื้องต้น</h2>
          <p className="indent54">เด็กชาย ภูมิกมล จันต๊ะนารี</p>
          <p>ระดับการศึกษา</p>
          <p className="indent54">ชั้นมัธยมศึกษาปีที่ 2</p>
          <h3>ข้อมูลเชิงลึก</h3>
        </div>            
      </div>

      <div className="block54"></div>

      <div className="score54">
        <div className="siang54">
          <img src={siang} alt="สัญลักษณ์เขียว" />
          <span>การประเมินความเสี่ยง   ระดับดี</span>
        </div>
        <div className="ta54">
          <img src={ta} alt="สัญลักษณ์ตา" />
          <span>การกวาดสายตา   ระดับดี</span>
        </div>
        <div className="caution54">
          <img src={caution} alt="สัญลักษณ์เตือน" />
          <span>การรู้สังเกต   ระดับดีเยี่ยม</span>
        </div>
      </div>
    </div>
  );
};

export default App;
