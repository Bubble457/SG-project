import React from 'react';
import '../../../css/PageControl.css';
import bg from '../../../assets2/Background/11.png';
import Label2 from '../../../componentsprompt/Label2';
import Back from '../../../componentsprompt/Back';
import Next from '../../../componentsprompt/Next';
import image from '../../../assets2/Misc/fovea.png';
import hero from '../../../assets/Impulsivity.png'

const Image = () => {
    return (
      <img src={image} style={{
          position: 'absolute',
          alignSelf: 'center',
          width: '40%',
      }}/>
    );
};

const Dialog = () => {
    return (
        <div>
            <div style={{
                position:'absolute',
                padding: '2%',
                background: 'white',
                borderRadius: '2pc',
                fontSize: 30,
                left: '6%',
                top: '30%'
            }}>
                <p style={{color:'black'}}><span style={{fontWeight:'bold'}}>โฟเวีย</span> คือ “<span style={{fontWeight:'bold',color:'#fcc314'}}>จุดตรงกลาง</span>”<br />
                                            ของการมองเห็นที่ตาของเรา<br />
                                            จะเห็น<span style={{fontWeight:'bold',color:'#00ff00'}}>ชัดที่สุด</span> เหมือนกับ<br />
                                            ตอนที่เราจ้องไปที่อะไรสักอย่าง<br />
                                            นี้แหละที่ดวงตาจะส่ง<br />
                                            ภาพที่ชัดเจนที่สุดไปยังสมอง</p>
            </div>
            {/* <div style={{
                position:'absolute',
                width: '0px',
                height: '0px',
                borderStyle: 'solid',
                borderWidth: '50px 60px 0 40px',
                borderColor: '#ffffffff transparent transparent transparent',
                transform: 'rotate(216deg)',
                right: '22%',
                top: '63%'
            }} /> */}
        </div>
    )
}

const P32 = () => {
    return (
        <div className='content'>
          <img src={bg} className='c2-bg'/>
          <Image />
          <Dialog />
          <img src={hero} alt='mascot' className='mascot-p9' width='20%' height='60%' />
          <Back page='page10'/>
          <Next page='page12'/>
        </div>
    );
};

export default P32;