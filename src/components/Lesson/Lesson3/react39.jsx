import '../../../css/39.css';
import { Link } from 'react-router-dom';

const character = require('../asset/Misc/halfcharacter.PNG');
const buntook = require('../asset/Misc/รถบรรทุกสุดหล่อ.png')



const App = () => {
  return (
    <div>
     <a className="btnnext" href="../html/storyboard_number_40.html" data-discover="true">ต่อไป &gt;&gt;</a>
     <a className="btnback" href="../html/storyboard_number_38.html" data-discover="true">ย้อนกลับ</a>
      <div class="center">
         <h2>วันนี้ต้องขี่รถมอเตอร์ไซต์ไปโรงเรียน แต่เจอรถบรรทุกจอดติดไฟแดงอยู่ข้างหน้าพอดี</h2>
          <img src={character} />
      </div>
      <div class="carder">
          <img className="buntook" src={buntook} />
      </div>
    </div>
    
  );
};

export default App;
