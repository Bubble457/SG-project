import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert, Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext.jsx';
import '../css/Register.css';
import signup from '../assets/sign up.png';
import backgroundImage from '../assets/2.png';
import { doc, setDoc } from "firebase/firestore";
import { db } from '../firebase/firebase.js';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  // ตรวจสอบรหัสผ่าน
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*/()]/.test(password);
  const isLongEnough = password.length >= 8;

  const isPasswordStrong = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isLongEnough;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!fullName || !birthDay || !birthMonth || !birthYear) {
      setError("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    if (!isPasswordStrong) {
      setError("รหัสผ่านยังไม่ปลอดภัยเพียงพอ");
      return;
    }

    try {
      const userCredential = await signUp(email, password);
      const user = userCredential.user;
      const birthday = `${birthDay} ${birthMonth} ${birthYear}`;
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        birthday,
        email,
        createdAt: new Date()
      });
      navigate('/intro');
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("อีเมลนี้ถูกใช้ไปแล้ว กรุณาเข้าสู่ระบบหรือใช้อีเมลอื่น");
      } else {
        setError(err.message);
      }
      console.log(err);
    }
  };

  return (
    <div className="bg-signup" style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    }}>
      <img src={signup} className='signup1' />
      <div className='formbox'>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit} className='form-content'>
          <p className='textform'>ชื่อ - นามสกุล</p>
          <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} required />

          <div className="birth-select-group">
            <p className='textform'>วัน</p>
            <select value={birthDay} onChange={(e) => setBirthDay(e.target.value)} required>
              <option></option>
              {[...Array(31)].map((_, i) => <option key={i}>{i + 1}</option>)}
            </select>
            <p className='textform'>เดือน</p>
            <select value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)} required>
              <option></option>
              {["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"].map((month, i) => (
                <option key={i}>{month}</option>
              ))}
            </select>
            <p className='textform'>ปี</p>
            <select value={birthYear} onChange={(e) => setBirthYear(e.target.value)} required>
              <option></option>
              {Array.from({ length: 100 }, (_, i) => 2565 - i).map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>

          <p className='textform'>อีเมล</p>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <p className='textform'>รหัสผ่าน</p>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ paddingRight: '40px' }}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}>
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>

          {/* ข้อความตรวจสอบรหัสผ่าน */}
          <ul style={{ fontSize: '0.9em', marginTop: '0px', color: '#555' }}>
            <li>{hasUpperCase ? '✅' : '❌'} มีตัวพิมพ์ใหญ่ (A–Z)</li>
            <li>{hasLowerCase ? '✅' : '❌'} มีตัวพิมพ์เล็ก (a–z)</li>
            <li>{hasNumber ? '✅' : '❌'} มีตัวเลข (0–9)</li>
            <li>{hasSpecialChar ? '✅' : '❌'} มีอักขระพิเศษ (!@#$%^&*/)</li>
            <li>{isLongEnough ? '✅' : '❌'} ความยาวขั้นต่ำ 8 ตัวอักษร</li>
          </ul>

          <div className='submit-btn'>
            <Button variant='primary' type='submit'>
              ลงทะเบียน
            </Button>
          </div>
        </Form>

        <br />
        <div className='text-text'>มีบัญชีอยู่แล้วใช่ไหม? <Link to='/login'>เข้าสู่ระบบ</Link></div>
      </div>
    </div>
  );
}

export default Register;
