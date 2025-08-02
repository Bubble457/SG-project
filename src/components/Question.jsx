import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import '../css/Question.css';
import { questions } from '../question';
import Result from '../components/Result';
import eye from '../assets/eye.png'
import like from '../assets/like.png'
import rain from '../assets/rain.png'
import run from '../assets/run.png'
import annoy from '../assets/annoying.png'
import slot from '../assets/Impulsivity.png'


function Question() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [ranks, setRanks] = useState(Array(5).fill(''));

  const handleChange = (index, value) => {
    const newRanks = [...ranks];
    newRanks[index] = value;
    setRanks(newRanks);
  };

  const isValid = () => {
    const nums = ranks.map(r => parseInt(r));
    return (
      nums.every(n => !isNaN(n)) &&
      new Set(nums).size === 5 &&
      nums.every(n => n >= 1 && n <= 5)
    );
  };

  const handleSubmit = () => {
    const ranked = ranks.map(r => parseInt(r));
    setAnswers(prev => [...prev, ranked]);
    setRanks(Array(5).fill(''));
    setCurrent(current + 1);
  };

  if (current >= questions.length) {
    return <Result answers={answers} questions={questions} />;
  }

  const data = questions[current];

  return (
    <div className='question-container'>
      
      <div className='box-pretest'>
        <p className='text-pretest'>แบบทดสอบทัศนคติ</p>
      </div>

      <h2 className='question-title'>ข้อที่ {current + 1} / {questions.length}</h2>

      <div className='question-box'>
        <p className='question-text'>{data.text}</p>
      </div>

      <div className='choice'>
        {data.choices.map((choice, index) => (
          <div key={index} className={`${choice.className}`}>
            <p className='choice-text'>{choice.text}</p>
          </div>
          ))}
      </div>

      <div className='scale-container'>
        
        {data.choices.map((choice, index) => (
        <select
          value={ranks[index]}
          onChange={e => handleChange(index, e.target.value)}
          className='select-box'
        >
          <option value=''>เลือกลำดับ</option>
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        ))}
      </div>

      <div className='blackblack'></div>

      <img src={slot} className='slot-question' />

      <div className='start-box'>
        <p className=''>จากคำถาม ให้นักเรียนเรียงสถานการณ์ที่คิดว่ามีการใช้เหตุผลจากน้อยที่สุดไปหามากที่สุด</p>
      </div>
      <Link to='/question1'>
        <div className='googo'>
        ไปเริ่มกันเลย!
      </div>
      </Link>
      

      <img src={ eye } width='200px' height='auto' className='eye' />

      <img src={ like } width='150px' height='auto' className='like' />

      <img src={ rain } width='200px' height='auto' className='rain' />

      <img src={ run } width='250px' height='auto' className='run' />

      <img src={ annoy } width='200px' height='auto' className='annoy' />
      
      <div className='circle1'>A</div>

      <div className='circle2'>B</div>

      <div className='circle3'>C</div>

      <div className='circle4'>D</div>

      <div className='circle5'>E</div>

      <div className='label-red-q'>น้อยที่สุด</div>

      <div className='label-green-q'>มากที่สุด</div>

      <button
        className='button-next'
        onClick={handleSubmit}
        disabled={!isValid()}
      >
        ต่อไป
      </button>
    </div>
  );
}

export default Question;