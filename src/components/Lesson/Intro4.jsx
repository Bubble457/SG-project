import React from 'react'
import { Link } from 'react-router-dom';   
import backbtn from '../../assets/back1.png';
import houseImg from '../../assets/house.png';
import characterImg from '../../assets/heroo.png';
import nextImg from '../../assets/next.png';
import pinkHouse from '../../assets/pinkhouse.png'
import bot3 from '../../assets/bot3.png'
import bg from '../../assets/board.png'; 
import '../../css/Intro4.css'

function Intro4() {
  return (
    <div>
        <div className='bg-intro4'>
            <img src={bg} className='bg-intro4'/>
            <Link to='/intro3'>
                <div className='back-btn'>
                <img src={backbtn} alt='back' className='img-back' />
                <p className='text-back'>ย้อนกลับ</p>
                </div>
            </Link>
            <div className='body-h'></div>
            <img src={ houseImg } className='img-body-h' width='auto' height='180px' />
            <img src={ characterImg } width='300px' height='auto' className='img-character4' />
            <div className='box-container-h'>
                <p className='box-container-text-h'>สิ่งเเวดล้อม</p>
            </div>
            <div className='box-h'>
                <p className='box-text-h'>การเข้าใจปัจจัยรอบตัวของเราทำให้เรารู้เเละตอบสนองต่อสิ่งเร้ารอบข้างอย่างถูกเเนวทางการปฏิบัติ
                </p>
            </div>
            <p className='box-text-h1h'>นำไปสู่บทเรียน : สิ่งเเวดล้อม  </p>
            <img src={ pinkHouse } className='box-body-h' />
            <img src={bot3} className='bot3' />
            <Link to='/attitude' className='no-underline'>
                <div className='next-btn'>
                    <p className='next-i4'>ต่อไป</p>
                    <img src={ nextImg } className='next-next-h'/>
                </div>
            </Link> 
        </div>
    </div>
  )
}

export default Intro4
