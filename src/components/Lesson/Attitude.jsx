import React from 'react'
import { Link } from 'react-router-dom';
import back from '../../assets/back1.png'
import pencil from '../../assets/pencil.png'
import bg from '../../assets/pretest.png'
import brain1 from '../../assets/brain1.png'
import brain2 from '../../assets/brain2.PNG'
import '../../css/Attitude.css'

function attitude() {
  return (
    <div className='bg-attitude'>
        <img src={bg} className='bg-attitude' />
        <Link to='/pretest1'>
            <div className='back-btn'>
            <img src={back} alt='back' className='img-back' />
            <p className='text-back'>ย้อนกลับ</p>
            </div>
        </Link>
        
        <Link to='/intro4' className='text-line'>
            <div className='back-btn-attitude'>
                <img src={back} alt='back' className='imgback-attitude' />
                <p className='text-back-attitude'>ย้อนกลับ</p>
            </div>   
        </Link>
        <img src={pencil} className='pencil' />
        <div className='label-attitude'>
            <div className='subtitle-attitude'>
                แบบทดสอบทัศนคติ
            </div>
        </div>

        <img src={brain1} className='brain1-attitude' width='300' />

        <img src={brain2} className='brain2-attitude' 
        width='330'/>

        <div>
            <Link to='/question' className='btnstart-attitude'>
                    เริ่ม</Link>
        </div>
    </div>
  )
}

export default attitude
