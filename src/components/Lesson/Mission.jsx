import React from 'react';
import { Link } from 'react-router-dom'
import '../../css/Mission.css';
import bg from '../../assets/mission.png'
import book from '../../assets/book.png'
import report from '../../assets/report.png'
import home from '../../assets/home.png'
import location from '../../assets/location.png'
import warning from '../../assets/warning.png'
import zoom from '../../assets/green2.png'
import eyee from '../../assets/eyee.png'

const Mission = () => {
  return (
    <div className='bg-mission'>
        <img src={bg} className='bg-mission' />
        <div className="nav-container">
            <Link to='/intro4' class="btn" >
                <div className="nav-tab home">
                    <span >
                        <img src={home} className='home' width='auto' height='50px'/>
                    </span>
                    <span className="home-text">หน้าหลัก</span>
                </div>
            </Link>
            <Link to='/page1' class="btn" >
                <div className="nav-tab book">
                    <span>
                        <img src={book} className='book' width='auto' height='50px'/>
                    </span>
                    <span className="book-text">ทบทวน</span>
                </div>
            </Link>
            <Link to='/page2' class="btn" >
                <div className="nav-tab report">
                    <span>
                        <img src={report} className='report' width='auto' height='50px'/>
                    </span>
                    <span className="report-text">รายงาน</span>
                </div>
            </Link>
            <img src={location} className='location' width='auto' height='300px'/>
            <Link to='/page1'>
                <img src={zoom} className='zoom' width='auto' height='180px'/>
            </Link>
            <img src={eyee} className='eyee' width='auto' height='280px'/>
            <img src={warning} className='warning' width='auto' height='280px'/>
            <p className='text-mission'>ไปให้ถึงเส้นชัย</p>
        </div>
    </div>
  );
};

export default Mission;
