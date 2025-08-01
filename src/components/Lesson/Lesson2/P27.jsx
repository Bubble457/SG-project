import React from 'react';
import '../../../css/PageControl.css';
import hero from '../../../assets/Impulsivity.png'
import bg from '../../../assets2/Background/2.png';
import Label2 from '../../../componentsprompt/Label2';
import Label3 from '../../../componentsprompt/Label3';
import ImgBox1 from '../../../componentsprompt/ImgBox1';
import Back from '../../../componentsprompt/Back';
import Start from '../../../componentsprompt/Start';
import Label1 from '../../../componentsprompt/Label1';
import Next from '../../../componentsprompt/Next';
import gamer from "../../../assets2/Misc/gamer.png";
import b from '../../../assets2/Misc/b.png';

const L2Label = () => {
    return (
        <div style={{
            position: 'absolute',
            alignSelf: 'center',
            textDecoration: 'none',
            color: '#000',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff7d2ff',
            padding: '2% 7%',
            borderRadius: '3pc',
            fontSize: 40,
            top: '40%',
            left: '40%'
        }}>
            <img src={b} style={{
                position: 'absolute',
                display: 'block',
                width: 250,
                left: '70%'
            }}/>
            <p>คนเล่นเกม</p>
        </div>
    );
};

const L1Label1 = () => {
  return (
    <div style={{
      background: 'white',
      position: 'absolute',
      padding: '1%',
      paddingLeft: '4%',
      paddingRight: '4%',
      bottom: '5%',
      alignSelf: 'center',
      fontSize: 30,
      borderRadius: '20pc'
    }}>
      {/* <div style={{
                position:'absolute',
                width: '0px',
                height: '0px',
                borderStyle: 'solid',
                borderWidth: '50px 60px 0 40px',
                borderColor: '#ffffffff transparent transparent transparent',
                transform: 'rotate(90deg)',
                right: '14%',
                top: '-9%',
                zIndex: 0
      }} /> */}
      <p>เป็นภาพคนเล่นเกมที่ใส่หูฟัง แต่ที่เราเห็นเป็นรูปหมาเพราะโฟกัสที่หูฟัง<br />และผมของคนเป็นอันดับแรกตามประสบการณ์ของเรา</p>
    </div>
  )
}

const Ihatethis = () => {
  return (
    <div style={{
                position:'absolute',
                width: '0px',
                height: '0px',
                borderStyle: 'solid',
                borderWidth: '50px 60px 0 40px',
                borderColor: '#ffffffff transparent transparent transparent',
                transform: 'rotate(90deg)',
                right: '25%',
                bottom: '13.5%',
                zIndex: 0
      }} />
  )
}

const P27 = () => {
  return (
  <div className='content'>
    <img src={bg} className='c2-bg'/>
    <Label2 text="เฉลย"/>
    <Label3 text="คำถามชวนคิด" />
    <L2Label />
    <ImgBox1 img={gamer} x={'5%'} y={'24%'} width={'40%'} height={'50%'} />
    <img src={hero} alt='mascot' className='mascot-p6' width='20%' height='60%' />
    <Ihatethis />
    <L1Label1 />
    <Next page='page7' style={{bottom:'20%',right:'10%'}} />
    <Back page='page5' />
  </div>
  );
};

export default P27;
