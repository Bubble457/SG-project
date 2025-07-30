import React from 'react'
import { Link } from 'react-router-dom';
import back from '../../assets/back1.png'
import pencil from '../../assets/pencil.png'
import bg from '../../assets/pretest.png'
import '../../css/Pretest.css'

function Pretest() {
  return (
    <div>
        <Link to='/intro4'>
            <div className='back-btn'>
            <img src={back} alt='back' className='img-back' />
            <p className='text-back'>ย้อนกลับ</p>
            </div>
        </Link>
        <img src={bg} className='bg-pretest' />
        <Link to='/intro4' className='text-line'>
            <div className='back-btn-pretest'>
                <img src={back} alt='back' className='imgback-pretest' />
                <p className='text-back-pretest'>ย้อนกลับ</p>
            </div>   
        </Link>
        <img src={pencil} className='pencil' />
        <div className='label-pretest'>
            <div className='subtitle-pretest'>
                แบบทดสอบก่อนเรียน
            </div>
        </div>
        <div>
            <Link to='/pretest1' className='btnstart-pretest'>
                    เริ่ม</Link>
        </div>
    </div>
  )
}

export default Pretest
