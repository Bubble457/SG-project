import '../../../css/45.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import character from '../../../asset3/Misc/คิดว่าตัวเองดวงดีครึ่ง.png';
import news from '../../../asset3/background/news.jpg';
import backbtn from '../../../assets/back1.png';

const App = () => {
      useEffect(() => {
      document.body.className = 'page-bg45';
  
      // ล้าง class เมื่อ component นี้ออก (optional แต่ดีมาก)
      return () => {
        document.body.className = '';
      };
    }, []);
  return (
    <div>
      <Link className="btnnext45" to="/p46" data-discover="true">ต่อไป &gt;&gt;</Link>
            <Link to='/p44'>
                <div className='back-btn'>
                <img src={backbtn} alt='back' className='img-back' />
                <p className='text-back'>ย้อนกลับ</p>
                </div>
            </Link>
      <div className="center45">
        <h2>ถ้าเรายังปฏิบัติตนเช่นนี้ จะเป็นอย่างไร กดปุ่มเริ่มเพื่อดูเหตุการณ์จริง</h2>
        <img src={character} />
      </div>
      <a className="show45" href="https://www.youtube.com/watch?v=Dodh1_0cZc8" target="_blank" rel="noreferrer">
        <img src={news} />
      </a>
    </div>
  );
};

export default App;
