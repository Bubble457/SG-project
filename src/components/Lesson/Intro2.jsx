import React from 'react'
import backbtn from '../../assets/back1.png';
import brainImg from '../../assets/brain.png';
import characterImg from '../../assets/heroo.png';
import nextImg from '../../assets/next.png';
import pinkBrain from '../../assets/pinkbrain.png'
import bot1 from '../../assets/bot1.png'
import { Link } from 'react-router-dom';  
import bg from '../../assets/board.png'; 
import '../../css/Intro2.css'

function Intro2() {
  return (
    <div className='bg-intro2'>
        <img src={bg} className='bg-intro2'/>
        <div className='bg-intro2'>
            <Link to='/intro1'>
                <div className='back-btn'>
                <img src={backbtn} alt='back' className='img-back' />
                <p className='text-back'>ย้อนกลับ</p>
                </div>
            </Link>
            <div className='brain-a'></div>
            <img src={ brainImg } className='img-brain-a' width='auto' height='18%' />
            <img src={ characterImg } width='20%' height='42.6%' className='img-character2' />
            <div className='box-container-a'>
                <p className='box-container-texta'>ความคิด</p>
            </div>
            <img src={ pinkBrain } className='box-brain' />
            <div className='box-text'>
                <p className='box-text-a'>การเริ่มต้นจากตัวเราเองเรียนรู้เกี่ยวกับวิธีมีเเนวคิดที่ถูกต้องเเละเหมาะสมสำหรับในสถานการณ์ต่าง ๆ ที่ต้องเผชิญ 
                </p>
            </div>
            <img src={bot1} className='bot1' />
            <p className='box-text-a1a'>นำไปสู่บทเรียน : เริ่มต้นจากตนเอง </p>
            <Link to='/intro3' className='no-underline'>
                <div className='next-btn'>
                    <p className='next-i2'>ต่อไป</p>
                <img src={ nextImg } className='next-next-3'/>
                </div>
            </Link> 
        </div>
    </div>
  )
}

export default Intro2;
