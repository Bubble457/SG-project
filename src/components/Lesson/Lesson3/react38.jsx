import '../../../css/38.css';
import { Link } from 'react-router-dom';

const cautionImg = require('../asset/icon/caution.png');



const App = () => {
  return (
    <div>
      <div>
        <a className="btnnext" href="./react39.jsx" data-discover="true">เริ่ม</a>
        <a className="btnback" href="#" data-discover="true">ย้อนกลับ</a>
      </div>
      <div className="center">
        <h3>บทที่ 3</h3>
        <div className="caution">
          <img src={cautionImg} alt="caution" />
          <h1>จุดบอดรอบตัว</h1>
        </div>
      </div>
    </div>
    
  );
};

export default App;
