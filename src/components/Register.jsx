import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert, Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext.jsx';
import '../css/Register.css'
import signup from '../assets/sign up.png'
import logo from '../assets/logo.png'
import '../css/Register.css'
import { auth } from '../firebase/firebase.js';
import backgroundImage from '../assets/2.png'


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signUp } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        await signUp(email, password);
        navigate('/intro');
    } catch(err) {
        setError(err.message);
        console.log(err);
    }
  };

  return (
    <div
      className="bg-signup"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      }}
    >
      <img src={signup} className='signup' />
      <div className='formbox'>
        {error && <Alert variant='danger'>{error}</Alert>}
        <Form onSubmit={handleSubmit} className='form-content'>
          <p className='textform'>ชื่อ - นามสกุล</p>
          <input type='text'/>
          <div className="birth-select-group">
            <p className='textform'>วัน</p>
            <select>
              <option></option>
              {[...Array(31)].map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
            </select>
            <p className='textform'>เดือน</p>
            <select>
              <option></option>
              {[
                "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
                "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
              ].map((month, i) => (
                <option key={i}>{month}</option>
              ))}
            </select>
            <p className='textform'>ปี</p>
            <select>
              <option></option>
              {Array.from({ length: 100 }, (_, i) => 2565 - i).map((year) => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>
          <p className='textform'>อีเมล</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className='textform'>รหัสผ่าน</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {/* <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <p className='text'>รหัสผ่าน</p>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group> */}

          <div className='submit-btn'>
            <Button variant='primary' type='submit'>
              ลงทะเบียน
            </Button>
          </div>
        </Form>
        <br />
        <div className='text-text'>มีบัญชีอยู่แล้วใช่ไหม?
          <Link to='/login'>เข้าสู่ระบบ</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;