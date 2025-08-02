import React from 'react'
import { Link } from 'react-router-dom';  
import bg from '../../../assets/checking.png'
import warn from '../../../assets/ลูกศรวิ่งข้าม.png'
import correct from '../../../assets/correct.png'
import heroo from '../../../assets/heroo.png'
import '../../../css/Check.css'

function Check1() {
  return (
    <div>
        <img src={bg} className='bg-check' />
        <img src={correct} width="3%" class="picture-p322-1-1" height="5%"/>
        <p class="text-p322-1-1">ถูกต้อง</p>
        <img src={heroo} class="maskcos-p322-1-1" width="10%" height="20%" />
        <p class="point-p322-1-1">3/3</p>
        <a href="http://127.0.0.1:5500/fake/fake.html" class="box3-p322-1-1"></a>
        <img src={correct} width="4%" class="picture-p322-1-1-1" height="7%"/>
        <img src={correct} width="4%" class="picture-p322-1-1-2" height="7%"/>
        <img src={correct} width="4%" class="picture-p322-1-1-3" height="7%"/>
        <img src={warn} width="23%" class="lookson2-1-1" height="40%"/>
    </div>
  )
}

export default Check1
