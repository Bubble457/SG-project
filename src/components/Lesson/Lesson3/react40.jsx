import '../../../css/40.css';
import { Link } from 'react-router-dom';

const character = require('../asset/Misc/halfcharacter.PNG')
const buntook = require('../asset/Misc/รถบรรทุกสุดหล่อ.png')
const morsai = require('../asset/Misc/มอไซ.png')



const App = () => {
  return (
    <div>
      <a className="btnnext" href="../html/storyboard_number_41.html" data-discover="true">ต่อไป &gt;&gt;</a>
      <a className="btnback" href="../html/storyboard_number_39.html" data-discover="true">ย้อนกลับ</a>
      <div className="center">
        <h2>ขับไปจอดใกล้ๆดีกว่า พอไฟเขียวจะได้ขับไปเร็ว</h2>
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
