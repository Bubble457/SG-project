import React from 'react';

import '../../../css/P27.css';

const number = {
  img_src: "../../../asests2/Misc/1.png",
  img_size: 60
};

const Label = () => {
  return (
    <div className='label'>
      
      <div className='imgbox'>
        <img className='number' 
        src={number.img_src}
        width={number.img_size}
        height={number.img_size}
        />
      </div>
      
    </div>
  );
};

const Title = () => {
  return (
    <div className='title'>
      <p>uhhhhhhhhh</p>
    </div>
  );
};

const Header = () => {
  return (
    <div className='header'></div>
  );
};

const P27 = () => {
  return (
    <div className='content'>
      <Header />
      <Title />
      
      <Label />
    </div>
  );
};

export default P27;
