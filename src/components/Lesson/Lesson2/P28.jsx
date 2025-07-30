import React from 'react';

import '../../../css/P28.css';

const back = {
  img_src: "../../../Assets/Misc/back.png",
  img_size: 50
};

const practice = {
  img_src: "../../../Assets/Icon/practice.png",
  img_size: 100
};

const Fback = () => {
  return (
    <a href="/page/27" className="back">
      <img 
        src={back.img_src}
        alt="back.png"
        style={{
          width: back.img_size,
          height: back.img_size,
          verticalAlign: 'middle'
        }}
      />
      <span 
        style={{
          margin: 8,
          fontSize: 20
        }}
      >
        ย้อนกลับ
      </span>
    </a>
    );
};

const Next = () => {
  return (
    <a href="/page/29" className="next">
      <span
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 5,
          marginBottom: 5,
          fontSize: 30
        }}
      >
        ต่อไป &gt;&gt;
      </span>
    </a>
  );
};

const Label = () => {
  return (
    <div className='label'>
      <div
        className='hat'
        style={{
          top: -46,
          left: 60+practice.img_size
        }}
      >
        <p>แบบฝึกหัด</p>
      </div>
      <img 
        src={practice.img_src}
        alt="practice.png"
        style={{
          width: practice.img_size,
          height: practice.img_size,
          verticalAlign: 'middle',
          padding: 40
        }}
      />
      <p style={{
        paddingRight: 80,
        fontWeight: 600,
        fontSize: 30
      }}
      >
        ยอดนักกวาดสายตา
      </p>
    </div>
  );
};





const P28 = () => {
  return (
    <div className='content'>
      <Next />
      <Label />

      <Fback />
    </div>
  );
};

export default P28;
