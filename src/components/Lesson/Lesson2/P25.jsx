import React from 'react'
import back from '../../../assets/back1.png'
import eyee from '../../../assets/eyee.png'
import hero from '../../../assets/hero.png'
import brain from '../../../assets/brain1.png'
import bg from '../../../assets/pretest.png'
import '../../../css/page1.css'
import { Link } from 'react-router-dom';

function page1() {
  return (
    <div className='bg-p1'>
        <img src={bg} className='bg-p1' />
        <Link to='/intro4'>
            <div className='back-btn'>
            <img src={back} alt='back' className='img-back' />
            <p className='text-back'>ย้อนกลับ</p>
            </div>
        </Link>
        <div className='label-p1'>
            
            <div className='subtitle-p1'>
                <img src={eyee} alt='เริ่มต้น' weidth='auto' height='138' />
                ร่างกายของเรา
            </div>
        </div>
        <div>
            <Link to='/page2' className='btnstart-p1'>
                  เริ่ม</Link>
            <div className='box-p1'>
              <p className='box-text-p4'>บทที่ 2</p>
            </div>
            <img src={hero} alt='maskcos' className='maskcos-p1' width='20%' height='60%' />
            <img src={brain} alt='brain' className='brain-p1' width='13%' height='30%' />
        </div>
    </div>
  )
}

export default page1
