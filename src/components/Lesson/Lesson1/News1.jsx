import React from 'react'
import { Link } from 'react-router-dom';
import back from '../../../assets/back1.png'
import bg from '../../../assets/lab.png'
import next from '../../../assets/next.png';
import hero from '../../../assets/heroo.png'
import vdo from '../../../assets/vdo.png'
import light from '../../../assets/pinngping.png'
import '../../../css/News1.css'

function News1() {
  return (
    <div>
        <div className='button-group-p421'>
            <img src={bg} className='bg-news1' />
            <Link to='/page1'>
                <div className='back-btn'>
                <img src={back} alt='back' className='img-back' />
                <p className='text-back'>ย้อนกลับ</p>
                </div>
            </Link>
            <Link to='/page5' className='no-underline'>
                <div className='next-btn'>
                    <p className='next-i4'>ต่อไป</p>
                    <img src={ next } className='next-next-h'/>
                </div>
            </Link> 
        </div>
        <div >
            <img src={hero} alt='maskcos' className='maskcos-p421' style={{width:'15%', height:'40%'}} />
        </div>
        <div className='text1-p421'>ดูให้ตระหนัก <img src={light} className='vdo421' width='20%' /></div>
        
        <div className='text2-p421'>หากเราเพิกเฉยต่อความเสี่ยงจะเป็นอย่างไร กดปุ่ม
            <img src={vdo} alt='vdo' width='40' height='40' />
            เพื่อดูคลิปเหตุการณ์จริง
        </div>
        <video style={{width:'48%', height:'54%'}} controls className='video-p421'>
        <source src='/public/news1.mp4' />
        </video>
        <div className='box421'></div>
    </div>
  )
}

export default News1;
