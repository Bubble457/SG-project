import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert, Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext.jsx';
import setting from '../assets/setting.png'
import logo from '../assets/logo.png'
import '../css/Register.css'


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
        navigate('/login');
    } catch(err) {
        setError(err.message);
        console.log(err);
    }
  };

  return (
    <div className='body'>
      {/* <header className='head'>
        <img src={logo} alt='Logo' width='300px' height='200px' />
        <Link to='/setting' className='header2'>
          <img src={setting} alt='Settings' width='auto' height='50px' />
        </Link>
      </header> */}
      <h1 className='sign'>
            <span>SIGN</span>
            <span className='up'>UP</span>
          </h1>
      <div className='container'>
        <div className='formbox'>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit} className='form-content'>
            <p className='text'>ชื่อ - นามสกุล</p>
            <input type='text' />
            <div className="birth-select-group">
              <p className='text'>วัน</p>
              <select>
                <option></option>
                {[...Array(31)].map((_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </select>
              <p className='text'>เดือน</p>
              <select>
                <option></option>
                {[
                  "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
                  "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
                ].map((month, i) => (
                  <option key={i}>{month}</option>
                ))}
              </select>
              <p className='text'>ปี</p>
              <select>
                <option></option>
                {Array.from({ length: 100 }, (_, i) => 2565 - i).map((year) => (
                  <option key={year}>{year}</option>
                ))}
              </select>
            </div>
            <p className='text'>อีเมล</p>
            <input type="email" />
            <p className='text'>รหัสผ่าน</p>
            <input type="email" />
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
          <div className='text text-center'>มีบัญชีอยู่แล้วใช่ไหม?
            <Link to='/login'>เข้าสู่ระบบ</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;