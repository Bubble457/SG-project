import React from 'react'
import { Link } from 'react-router-dom';  
import bg from '../../../assets/checking.png'
import mouse from '../../../assets/mouse1.png'
import heroo from '../../../assets/heroo.png'
import '../../../css/Check.css'

function Check() {
  return (
    <div>
      <img src={bg} className='bg-check' />
        <div className='bg-check'>
          <img src={mouse} width='9%' className='picture-p321' height='15%'/>
            <p className='text-p321'>ตามหาจุดเสี่ยงในภาพ</p>
            <img src={heroo} className='maskcos-p321' width='10%' height='20%' />
            <p className='point-p321'>0/3</p>
            <Link to='/check1' className='box1-p321'></Link>
            <Link to='/check2' className='box2-p321' ></Link>
            <Link to='/check3' className='box3-p321'></Link>
            <Link to='/check4' className='box4-p321'></Link>
        </div>
    </div>
  )
};

export default Check
