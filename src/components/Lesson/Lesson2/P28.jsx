import React from 'react';
import '../../../css/PageControl.css';
import bg from '../../../assets2/Background/10.png';
import Back from '../../../componentsprompt/Back';
import Next from '../../../componentsprompt/Next';


const P28 = () => {
  return (
  <div className='content'>
    <img src={bg} className='c2-bg'/>
    <Back page='page6' />
    <Next page='page8' />
  </div>
  );
};

export default P28;