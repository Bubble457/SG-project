import '../../../css/46.css';
import { Link } from 'react-router-dom';

const character = require('../asset/Misc/halfcharacter.PNG');
const buntook = require('../asset/Misc/รถบรรทุกสุดหล่อ.png');
const morsai = require('../asset/Misc/มอไซ.png');
const eyebutton = require('../asset/icon/eye.png')
const korb = require('../asset/Misc/เทส.png')
const kajog = require('../asset/Misc/กระจกรถ.png')
const wrong = require('../asset/icon/wrong.webp')
const news = require('../asset/background/news.jpg')
const check = require('../asset/icon/ถูก.png')
const arrow = require('../asset/Misc/ลูกษร.png')


const App = () => {
  return (
    <div>
      <a className="btnnext" href="../html/storyboard_number_47.html" data-discover="true">ต่อไป &gt;&gt;</a>
      <a className="btnback" href="../html/storyboard_number_45.html" data-discover="true">ย้อนกลับ</a>
      <div className="center">
        <h2>เราควรรักษาระยะห่างจากรถคันด้านหน้า</h2>
        <img src={character} />
      </div>
      <div className="carder">
        <img className="buntook" src={buntook} />
        <img className="morsai" src={morsai} />
      </div>
      <div className="icon">
        <img className="check" src={check} />
      </div>
      <img className="arrow" src={arrow} />
    </div>
  );
};

export default App;
