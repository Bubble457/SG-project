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
import practice from "../../../assets2/Icon/practice.png";

const P25 = () => {
  return (
    <div className='content'>
      <img src={bg} className='c2-bg'/>
      <Start page='page13' />
      <Label1 title='ยอดนักกวาดสายตา' hat='แบบฝึกหัด' img={practice}/>
      <Back page='page11' />
    </div>
  );
};

export default P25
