import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap'
import { useUserAuth } from '../context/UserAuthContext.jsx'
import '../css/Login.css'
import login from '../assets/log in.png'


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
    <div className='body-login'>
      <img src={login} className='login' />
      <div>
        <div className='loginform'>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit} className='form-content'>
            <p className='text-email'>อีเมล</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className='text-password'>รหัสผ่าน</p>
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
                  เข้าสู่ระบบ
              </Button>
            </div>
          </Form>
          <br />
          <div className='text-register'>ยังไม่มีบัญชี
            <Link to='/register'>ลงทะเบียน</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login