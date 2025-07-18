import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthContext.jsx'
import '../css/Login.css'


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn } = useUserAuth();
  
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await logIn(email, password);
        navigate("/intro");
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
      <h1 className='log'>
            <span>LOG</span>
            <span className='in'>IN</span>
          </h1>
      <div className='container'>
        <div className='formbox'>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit} className='form-content'>
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
                  เข้าสู่ระบบ
              </Button>
            </div>
          </Form>
          <div className='text text-center margin-top 20px'>มีบัญชีอยู่แล้วใช่ไหม?
            <Link to='/login'>เข้าสู่ระบบ</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login