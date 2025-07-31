import React from 'react';
import '../../../css/PageControl.css';
import bg from '../../../assets2/Background/9.png';
import hero from '../../../assets/hero.png'
import Label2 from '../../../componentsprompt/Label2';
import Back from '../../../componentsprompt/Back';
import Next from '../../../componentsprompt/Next';
import image from '../../../assets2/Misc/gorilla.png';

const Image = () => {
    return (
        <div style={{
            position: 'absolute',
            alignSelf: 'center',
            justifyContent: 'center',
            width: '80%',
            height: '70%',
            top: '20%',
            background: '#ffffff8a',
            border: 'solid #ffffff00',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center' 
        }}>
            <img src={image} style={{
                position: 'relative',  
                width: '80%',
            }}/>
        </div>
    );
};

const LLabel2 = ({ bg='#fff', color='black' }) => {
  return (
    <div className='p31_label2' style={{backgroundColor:bg, color:color}}>
      <p style={{
        fontSize: 33,
        fontWeight: 'bold',
        marginTop:'auto',
        marginBottom:'auto'
      }}
      >
        โฟเวีย <span style={{color:'#fcc314'}}>(FOVEA)</span> คืออะไร?
      </p>
    </div>
  );
};

const Dialog = () => {
    return (
        <div>
            <div style={{
                position:'absolute',
                padding: '1% 5%',
                background: 'white',
                borderRadius: '2pc',
                fontSize: 30,
                fontWeight:'bold',
                right: '20%',
                top: '50%'
            }}>
                <p style={{color:'black'}}>หากคุณโฟกัสกับการจับการเคลื่อนที่ของ<br />
                                          ลูกบอลมากพอคุณจะ<span style={{color:'#ea0000'}}>ไม่ได้ทันสังเกต</span>ลิงที่โผล่<br />
                                          มาเพราะเรามัวเเต่นำ<span style={{color:'#fcc314'}}>โฟเวีย</span>จ้องไปที่ลูกบอล</p>
            </div>
            <div style={{
                position:'absolute',
                width: '0px',
                height: '0px',
                borderStyle: 'solid',
                borderWidth: '50px 60px 0 40px',
                borderColor: '#ffffffff transparent transparent transparent',
                transform: 'rotate(216deg)',
                right: '22%',
                top: '63%'
            }} />
        </div>
    )
}

const P31 = () => {
    return (
        <div className='content'>
            <img src={bg} className='c2-bg'/>
            <Image />
            <LLabel2 />
            <img src={hero} alt='mascot' className='mascot-p9' width='20%' height='60%' />
            <Dialog />
            <Next page='page11'/>
            <Back page='page9'/>
        </div>
    );
};

export default P31;