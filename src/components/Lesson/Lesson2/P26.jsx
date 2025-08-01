import React from 'react';
import '../../../css/PageControl.css';
import bg from '../../../assets2/Background/2.png';
import Label2 from '../../../componentsprompt/Label2';
import Label3 from '../../../componentsprompt/Label3';
import ImgBox1 from '../../../componentsprompt/ImgBox1';
import Back from '../../../componentsprompt/Back';
import Start from '../../../componentsprompt/Start';
import Label1 from '../../../componentsprompt/Label1';
import gamer from "../../../assets2/Misc/gamer.png";
import { Link } from 'react-router-dom';
import a from '../../../assets2/Misc/a.png';
import b from '../../../assets2/Misc/b.png';

const L1Label = () => {
    return (
        <Link to='/page6' id='p26_l1'>
            <img src={a} style={{
                position: 'absolute',
                display: 'block',
                width: 250,
                left: -150
            }}/>
            <p>สุนัข</p>
        </Link>
    );
};

const L2Label = () => {
    return (
        <Link to='/page6' id='p26_l2'>
            <img src={b} style={{
                position: 'absolute',
                display: 'block',
                width: 250,
                left: -150
            }}/>
            <p>คนเล่นเกม</p>
        </Link>
    );
};

const P26 = () => {
  return (
    <div className='content'>
      <img src={bg} className='c2-bg'/>
      <Label2 text="จากภาพเห็นอะไรก่อน?"/>
      <Label3 text="คำถามชวนคิด" />
      <L1Label />
      <L2Label />
      <ImgBox1 img={gamer} x={'50%'} y={'30%'} width={'40%'} height={'50%'} />
      <Back page='page4' />
    </div>
  );
};

export default P26;
