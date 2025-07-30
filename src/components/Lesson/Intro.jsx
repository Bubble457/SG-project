import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Intro.css';
import character1 from '../../assets/schoolbus.png';
import bg from '../../assets/fire.png';

function Intro() {
  const fullText = "เมืองตกอยู่ในความวุ่นวายด้านการจราจร ต้องการฮีโร่ผู้กล้ามากอบกู้สถานการณ์";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const typingInterval = useRef(null);
  const navigate = useNavigate();

  // พิมพ์ทีละตัว
  useEffect(() => {
    if (index < fullText.length) {
      typingInterval.current = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 70);
    } else {
      setIsTypingDone(true);
    }

    return () => clearTimeout(typingInterval.current);
  }, [index]);

  const handleClick = () => {
    if (!isTypingDone) {
      clearTimeout(typingInterval.current);
      setDisplayText(fullText);
      setIndex(fullText.length);
      setIsTypingDone(true);
    } else {
      navigate('/intro1');
    }
  };

  return (
    <div className='bg-1' onClick={handleClick}>
      <img src={bg} className='bg-1'/>
      <div className='box-intro'>
        <p>{displayText}</p>
      </div>
      <img src={character1} className='slot' height='330px' />
      <p className='action'>!!</p>
    </div>
  );
}

export default Intro;
