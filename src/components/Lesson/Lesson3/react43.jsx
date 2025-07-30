import '../../../css/43.css';
import { Link } from 'react-router-dom';

const character = require('../asset/Misc/halfcharacter.PNG');
const buntook = require('../asset/Misc/รถบรรทุกสุดหล่อ.png');
const morsai = require('../asset/Misc/มอไซ.png');
const eyebutton = require('../asset/icon/eye.png')
const korb = require('../asset/Misc/เทส.png')
const kajog = require('../asset/Misc/กระจกรถ.png')


const App = () => {
  return (
    <div>
      <a class="btnpink" href="/html/storyboard_number_44.html" data-discover="true">หายตัวได้</a>
      <a class="btnblue" href="/html/storyboard_number_44.html" data-discover="true">อยู่ในที่ที่มองไม่เห็น</a>
      <a class="btnback" href="../html/storyboard_number_42.html" data-discover="true">ย้อนกลับ</a>
      <div class="center">
        <h2>รถมอเตอร์ไซต์หายไปไหน</h2>
        <img src={character} />
      </div>
      <div class="block"></div>
      <div class="carder">
        <img class="korb" src={korb} />
        <img class="kajog" src={kajog} />
      </div>
    </div>
  );
};

export default App;
