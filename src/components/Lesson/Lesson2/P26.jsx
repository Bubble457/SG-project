import React from 'react';

import '../../../css/P26.css';

const back = {
  img_src: "../../../assets/Misc/back.png",
  img_size: 50
};

const number = {
  img_src: "../../../assets/Misc/1.png",
  img_size: 40
};

const character = {
  img_src: "../../../assets/Misc/character.PNG",
};

const jpimg = {
  img_src: "../../../assets/Misc/run.png"
};

const Fback = () => {
  return (
    <a href="/page/25" className="back">
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

const Title = () => {
  return (
    <div className='title'>
      <p>uhhhhhhhhh</p>
      <div className='number'>
        <img 
          src={number.img_src}
          style={{
            width: number.img_size,
            height: number.img_size,
          }}
        />
      </div>
    </div>
  );
};

const BlackCover = () => { // black clover no way
  return (
    <div className='BlackCover'>
      <img 
        className='character' 
        src={character.img_src}
      />
      <div className='dialogTr'></div>
      <div className='dialogSq'></div>
      <div className='imgSq'>
        <img 
          className='jpimg'
          src=''
        />

      </div>

    </div>
    );
};

const Next = () => {
  return (
    <a href="/page/27" className="next">
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

const P26 = () => {
  return (
    <div className='content'>
      <Title />
      <BlackCover />
      <Next />

      <Fback />
    </div>
  );
};

export default P26;
