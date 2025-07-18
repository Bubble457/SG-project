import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './css/App.css'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import setting from './assets/setting.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
      {/* <header className='head'>
        <img src={logo} alt='Logo' width='300px' height='200px' />
        <Link to='/setting' className='header2'>
          <img src={setting} alt='Settings' width='auto' height='50px' />
        </Link>
      </header> */}
      <div className='buttongroup'>
        <Link to='/register' className='btnsignup'>ลงทะเบียน</Link>
        <Link to='/login' className='btnlogin'>เข้าสู่ระบบ</Link>
        {/* <Link to='/intro'>1</Link> */}
      </div>
    </div>
  )
}

export default App
