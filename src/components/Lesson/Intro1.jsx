import React from 'react';
import '../../css/Intro1.css';
import backbtn from '../../assets/back1.png';
import brainImg from '../../assets/brain.png';
import bodyImg from '../../assets/body.png';
import houseImg from '../../assets/house.png';
import characterImg1 from '../../assets/Character.PNG';
import characterImg2 from '../../assets/hero.png'
import nextImg from '../../assets/next.png';
import bg from '../../assets/lab1.png';
import { Link } from 'react-router-dom';

function Intro1() {
  return (
    <div>
      <img src={bg} className='bg-intro1'/>
      <div className='bg-intro'>
        <Link to='/intro'>
          <div className='back-btn'>
            <img src={backbtn} alt='back' className='img-back' />
            <p className='text-back'>ย้อนกลับ</p>
          </div>
        </Link>
        <div className='dot-brain-1'></div>
        <svg className='line-brain' width='300' height='200'>
          <line x1='65' y1='127' x2='300' y2='88.5' stroke='black' strokeWidth='3' />
        </svg>
        <div className='dot-brain-2'></div>

        <div className='dot-body-1'></div>
        <svg className='line-body' width='400' height='250'>
          <line x1='105' y1='32' x2='390' y2='123' stroke='black' strokeWidth='3' />
        </svg>
        <div className='dot-body-2'></div>

        <div className='dot-house-1'></div>
        <svg className='line-house' width='700' height='300'>
          <line x1='0' y1='0' x2='265' y2='211' stroke='black' strokeWidth='3' />
        </svg>
        <div className='dot-house-2'></div>

        <div className='brain'></div>
        <img src={brainImg} className='img-brain' alt='brain' height='150px' />

        <div className='body'></div>
        <img src={bodyImg} className='img-body' alt='body' height='190px' />

        <div className='house'></div>
        <img src={houseImg} className='img-house' alt='house' height='200px' />

        <img src={characterImg1} width='320px' height='auto' className='img-intro1' />
        <img src={characterImg2} width='200px' height='auto' className='img-intro2' />

        <div className='box-intro1'>
          <p className='text-t'>จะมีอยู่ผู้เดียวที่จะก้อบกู้สถานการณ์นี้ได้นั้นก็คือฮีโร่ในตำนานเเต่ตอนนี้ชิ้นส่วนร่างกาย</p>
          <p className='text-t'>ของเขาหายไปชิ้นส่วนนั้นประกอบไปด้วย สมอง ร่างกาย เเละสภาพเเวดล้อม</p>
          <Link to='/intro2'>
            <div className='next-btn-in1'>
              <p className='next-in1'>ต่อไป</p>
            </div>
            <img src={nextImg} className='next-next-1' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro1;
