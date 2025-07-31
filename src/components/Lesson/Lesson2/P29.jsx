import React from 'react';
import '../../../css/PageControl.css';
import bg from '../../../assets2/Background/9.png';
import Label2 from '../../../componentsprompt/Label2';
import Back from '../../../componentsprompt/Back';
import Next from '../../../componentsprompt/Next';

const Video = () => {
    return (
        <div style={{
            position: 'absolute',
            alignSelf: 'center',
            width: '80%',
            height: '60%'
        }}>
            <iframe width='100%' height='100%' src='https://youtube.com/embed/IGQmdoK_ZfY'></iframe>
        </div>
    );
};


const P29 = () => {
    return (
        <div className='content'>
            <img src={bg} className='c2-bg'/>
            <Video />
            <Label2 text="คนเสือขาวโยนลูกบอลไปกี่รอบ?" bg='#ffffff'/>
            <Next page='page9' />
            <Back page='page7' />
        </div>
    );
};

export default P29;
