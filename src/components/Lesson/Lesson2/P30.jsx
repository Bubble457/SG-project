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
            alignItems: 'center' 
        }}>
            <img src={image} style={{
                position: 'relative',  
                width: '80%',
            }}/>
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
                top: '55%'
            }}>
                <p style={{color:'black'}}>คุณ<span style={{color:'#fcc314'}}>สังเกต</span>เห็นลิง<br />ตัวนี้หรือไม่?</p>
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

const P30 = () => {
    return (
        <div className='content'>
            <img src={bg} className='c2-bg'/>
            <div style={{
                position:'absolute',width:'100%',height:'100%',background:'#00000050'
            }} />
            <Image />
            <img src={hero} alt='mascot' className='mascot-p9' width='20%' height='60%' />
            <Dialog />
            <Next page='page10'/>
            <Back page='page8'/>
        </div>
    );
};

export default P30;