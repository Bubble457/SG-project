import '../../../css/44.css';
import { Link } from 'react-router-dom';

const character = require('../asset/Misc/halfcharacter.PNG');
const buntook = require('../asset/Misc/รถบรรทุกสุดหล่อ.png');
const morsai = require('../asset/Misc/มอไซ.png');
const eyebutton = require('../asset/icon/eye.png')
const korb = require('../asset/Misc/เทส.png')
const kajog = require('../asset/Misc/กระจกรถ.png')
const wrong = require('../asset/icon/wrong.webp')


const App = () => {
  return (
    <div>
      <div className="btneye">
        <img className="eye" src={eyebutton} alt="ปุ่มรูปตา" />
        <img className="wrong" src={wrong} alt="กากบาท" />
      </div>
      <a className="btnnext" href="../html/storyboard_number_45.html" data-discover="true">ต่อไป {'>>'}</a>
      <a className="btnback" href="../html/storyboard_number_43.html" data-discover="true">ย้อนกลับ</a>
      <div className="center">
        <h2>
            <span style={{ color: 'rgba(0, 0, 0, 1)' }}>ที่เรามองไม่เห็น เพราะรถมอเตอร์ไซต์จอดอยู่ใน</span>
          <span style={{ color: 'rgb(223, 16, 16)' }}>จุดบอด</span>
          <span style={{ color: 'rgba(0, 0, 0, 1)' }}>นั่นเอง</span>
            
        </h2>
        <img src={character} />
      </div>
      <div className="carder">
        <img className="buntook" src={buntook} />
        <img className="morsai" src={morsai} />
      </div>
    </div>
  );
};

export default App;
