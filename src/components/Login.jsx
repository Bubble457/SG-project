import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Alert, Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext.jsx';
import '../css/Login.css';
import login from '../assets/log in.png';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ เพิ่ม state สำหรับโชว์/ซ่อนรหัสผ่าน
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/intro");
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง");
      } else {
        setError(err.message);
      }
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
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ paddingRight: '40px' }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <div className='submit-btn'>
              <Button variant='primary' type='submit'>
                เข้าสู่ระบบ
              </Button>
            </div>
          </Form>

          <br />
          <div className='text-register'>
            ยังไม่มีบัญชี? <Link to='/register'>ลงทะเบียน</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
