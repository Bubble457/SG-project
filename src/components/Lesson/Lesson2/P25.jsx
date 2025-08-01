import React from 'react'
import hero from '../../../assets/hero.png'
import brain from '../../../assets/brain1.png'
import bg from '../../../assets/pretest.png'
import '../../../css/page1.css'
import { Link } from 'react-router-dom';

import '../../../css/PageControl.css';
import Back from '../../../componentsprompt/Back';
import Start from '../../../componentsprompt/Start';
import Label1 from '../../../componentsprompt/Label1';
// import './P25.css';
import eye from "../../../assets2/Icon/eye.png";

const P25 = () => {
  return (
    <div className='content'>
      <img src={bg} className='c2-bg'/>
      <Start page='page5' />
      <Label1 title='ร่างกายของเรา' hat='บทที่ 2' img={eye}/>
      <img src={hero} alt='maskcos' className='maskcos-p1' width='20%' height='60%' />
      <img src={brain} alt='brain' className='brain-p1' width='13%' height='30%' />
      <Back page='check' />
    </div>
  );
};

export default P25
