import React from 'react';
import { Link } from 'react-router-dom';

import back from '../../../assets/back1.png';
import hero from '../../../assets/heroo.png';
import next from '../../../assets/next.png';
import tokjai from '../../../assets/tokjai.png'
import new5 from '../../../assets/news5.png';
import arrow from '../../../assets/arrow.png';
import donot from '../../../assets/do not.png';
import hat from '../../../assets/hat.png';
import bg from '../../../assets/board1.png';
import '../../../css/page3.css'

function Page3() {
  return (
    <div className='bg-3'>
      <img src={bg} className='bg-pp3' />
        <div className="button-group">
            <Link to='/page2'>
                <div className='back-btn'>
                <img src={back} alt='back' className='img-back' />
                <p className='text-back'>ย้อนกลับ</p>
                </div>
            </Link>
        </div>
        <img src={hero} alt="superpower" style={{ width: 'auto', height: '30%' }} className="hero-3" />

        <Link to='/check' className='no-underline'>
            <div className='next-btn'>
                <p className='next-i4'>ต่อไป</p>
                <img src={ next } className='next-next-h'/>
            </div>
        </Link> 

        <div className="mybox-3"></div>

        <div className="text-3">
          ความเสี่ยง คือ โอกาสที่บางสิ่งจะผิดพลาด โดยเปรียบเทียบกับ
          <br />
          สถานการณ์ที่เลวร้ายที่สุด ที่อาจจะเกิดขึ้นได้
        </div>

        <div className="tokjai">
          <img
            src={tokjai}
            alt="tokjai"
            className="tokjaiimg"
            style={{ width: '12%', height: '17%' }}
          />
          <div className="tokjaitext">ความเสี่ยงคืออะไร???</div>
        </div>

        <img src={new5} alt="news" className="news5" style={{ width: '40%', height: '50%' }} />
        <div className="box-3"></div>
        <img src={arrow} alt="arrow" className="arrow" style={{ width: '13%', height: '15%' }} />
        <img src={donot} alt="do not" className="donot" style={{ width: '19%', height: '30%' }} />
        <img src={hat} alt="hat" className="hat-p3" style={{ width: '17%', height: '24%' }} />
    </div>
  );
}

export default Page3;
