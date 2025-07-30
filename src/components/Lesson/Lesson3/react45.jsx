import '../../../css/45.css';
import { Link } from 'react-router-dom';

const character = require('../asset/Misc/halfcharacter.PNG');
const buntook = require('../asset/Misc/รถบรรทุกสุดหล่อ.png');
const morsai = require('../asset/Misc/มอไซ.png');
const eyebutton = require('../asset/icon/eye.png')
const korb = require('../asset/Misc/เทส.png')
const kajog = require('../asset/Misc/กระจกรถ.png')
const wrong = require('../asset/icon/wrong.webp')
const news = require('../asset/background/news.jpg')


const App = () => {
  return (
    <div>
      <a class="btnnext" href="../html/storyboard_number_46.html" data-discover="true">ต่อไป &gt;&gt;</a>
      <a class="btnback" href="../html/storyboard_number_44.html" data-discover="true">ย้อนกลับ</a>
      <div class="center">
        <h2>ถ้าเรายังปฏิบัติตนเช่นนี้ จะเป็นอย่างไร กดปุ่มเริ่มเพื่อดูเหตุการณ์จริง</h2>
        <img src={character} />
      </div>
      <a class="show" href="https://www.youtube.com/watch?v=Dodh1_0cZc8" target="_blank">
        <img src={news} />
      </a>
    </div>
  );
};

export default App;
