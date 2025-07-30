import '../../../css/41.css';
import { Link } from 'react-router-dom';

const character = require('../asset/Misc/halfcharacter.PNG');
const buntook = require('../asset/Misc/รถบรรทุกสุดหล่อ.png');
const morsai = require('../asset/Misc/มอไซ.png');



const App = () => {
  return (
    <div>
      <a className="btnnext" href="../html/storyboard_number_42.html" data-discover="true">ต่อไป &gt;&gt;</a>
      <a className="btnback" href="../html/storyboard_number_40.html" data-discover="true">ย้อนกลับ</a>
      <div className="center">
        <h1>
          <span style={{ color: 'rgb(255, 255, 255)' }}>แต่จะ</span>
          <span style={{ color: 'rgb(223, 16, 16)' }}>ปลอดภัย</span>
          <span style={{ color: 'rgb(255, 255, 255)' }}>รึเปล่านะ</span>
        </h1>
      </div>
      <div className="carder">
        <img className="buntook" src={buntook} />
        <img className="morsai" src={morsai} />
      </div>
    </div>
  );
};

export default App;
