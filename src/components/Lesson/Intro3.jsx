import React from 'react'
import { Link } from 'react-router-dom';   
import backbtn from '../../assets/back1.png';
import bodyImg from '../../assets/body.png';
import characterImg from '../../assets/heroo.png';
import nextImg from '../../assets/next.png';
import pinkBody from '../../assets/pinkbody.png'
import bot2 from '../../assets/bot2.png'
import bg from '../../assets/board.png'; 
import '../../css/Intro3.css'

function Intro3() {
  return (
    <div>
        <div className='bg-intro3'>
            <img src={bg} className='bg-intro3'/>
            <Link to='/intro2'>
                <div className='back-btn'>
                <img src={backbtn} alt='back' className='img-back' />
                <p className='text-back'>ย้อนกลับ</p>
                </div>
            </Link>
            <div className='body-b'></div>
            <img src={ bodyImg } className='img-body-b' width='auto' height='180px' />
            <img src={ characterImg } width='300px' height='auto' className='img-character3' />
            <div className='box-container-b'>
                <p className='box-container-text-b'>ร่างกาย</p>
            </div>
            <div className='box-b'>
                <p className='box-text-b'> การเข้าใจสมรรถภาพทางกายเเละขีดจำกัดร่างกายของมนุษย์ ทำให้เรารู้ถึงความสามารถของร่างกายของตัวเราเอง รู้วิธีรับมือกับร่างกายของตัวเราในเหตุการณ์ต่าง ๆ อย่างปลอดภัย 
                </p>
            </div>

            <p className='box-text-b1b'>นำไปสู่บทเรียน : ร่างกายของเรา </p>

            <img src={ pinkBody } className='box-body-b' />

            <img src={bot2} className='bot2' />

            
            <Link to='/intro4' className='no-underline'>
                <div className='next-btn'>
                    <p className='next-i3'>ต่อไป</p>
                <img src={ nextImg } className='next-next-3'/>
                </div>
            </Link> 
        </div>
    </div>
  )
}

export default Intro3;
