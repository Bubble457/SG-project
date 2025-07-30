import React from 'react';
import { Link } from 'react-router-dom';
import new1 from '../../../assets/new1.jpg';
import new2 from '../../../assets/new2.jpg';
import new3 from '../../../assets/new3.png';
import new4 from '../../../assets/new4.png';
import heroo from '../../../assets/heroo.png';
import next from '../../../assets/next.png';
import back from '../../../assets/back1.png';
import bg from '../../../assets/board1.png';
import '../../../css/page2.css'

function Page2() {
  return (
    <div className='bg-p2'>
      <img src={bg} className='bg-p2' />
      <div className="button-group-p2">
        <Link to='/page1'>
            <div className='back-btn'>
            <img src={back} alt='back' className='img-back' />
            <p className='text-back'>ย้อนกลับ</p>
            </div>
        </Link>
      </div>
      <div>
      <img src={new1} alt="news" className="news1-p2" style={{ width: '20%', height: '25%' }} />
      <img src={new2} alt="news" className="news2-p2" style={{ width: '20%', height: '25%' }} />
      <img src={new3} alt="news" className="news3-p2" style={{ width: '24%', height: '51%' }} />
      <img src={new4} alt="news" className="news4-p2" style={{ width: '17%', height: '51%' }} />
      <img src={heroo} alt="superpower" className="hero-p2" style={{ width: 'auto', height: '40%' }} />
      </div>

      <div className="text-p2">
        อุบัติเหตุสามารถเกิดขึ้นได้ตลอดเวลา เราจึงต้องมีการป้องกันจากความคิด
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;ของตนเองให้สามารถประเมินความเสี่ยงและหลีกเลี่ยงอันตรายได้
      </div>

      <div className="mybox-p2"></div>
    
      <Link to='/page3' className='no-underline'>
          <div className='next-btn'>
              <p className='next-i4'>ต่อไป</p>
              <img src={ next } className='next-next-h'/>
          </div>
      </Link> 
    </div>
  );
}

export default Page2;
