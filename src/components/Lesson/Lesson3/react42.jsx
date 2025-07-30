import '../../../css/42.css';
import { Link } from 'react-router-dom';

const character = require('../asset/Misc/halfcharacter.PNG');
const buntook = require('../asset/Misc/รถบรรทุกสุดหล่อ.png');
const morsai = require('../asset/Misc/มอไซ.png');
const eyebutton = require('../asset/icon/eye.png')



const App = () => {
  return (
    <div>
      <a className="btneye" href="/html/storyboard_number_43.html" data-discover="true">
        <img src={eyebutton} alt="ปุ่มรูปตา"/>
      </a>
      <a className="btnback" href="../html/storyboard_number_41.html" data-discover="true">ย้อนกลับ</a>
      <div className="center">
        <h2>กดรูปตาเพื่อดูในมุมมองของคนขับรถบรรทุก</h2>
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
