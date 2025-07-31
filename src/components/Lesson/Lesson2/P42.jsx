import React from 'react';
import '../../../css/PageControl.css';
import bg from '../../../assets2/Background/16.png';
import Back from '../../../componentsprompt/Back';
import Next from '../../../componentsprompt/Next';

const P42Next = ({ page, style={} }) => {
  return (
    <a href={`/${page}`} style={style} className="p42_next">
      <span
        style={{
          marginLeft: 30,
          marginRight: 30,
          marginTop: 5,
          marginBottom: 5,
          fontSize: 30
        }}
      >
        แบบฝึกหัด &gt;&gt;
      </span>
    </a>
  );
}


const P28 = () => {
  return (
  <div className='content'>
    <img src={bg} className='c2-bg'/>
    <Back page='page12' />
    <P42Next page='page14' />
  </div>
  );
};

export default P28;