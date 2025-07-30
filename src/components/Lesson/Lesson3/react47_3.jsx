import '../../../css/47_3.css';

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
const number1 = require('../asset/Misc/1.png')
const number2 = require('../asset/Misc/2.png')
const number3 = require('../asset/Misc/3.png')
const number4 = require('../asset/Misc/4.png')
const buntookbon = require('../asset/Misc/รถบรรทุก.png')
const term = require('../asset/Misc/เสี่ยง3.png')


const App = () => {
  return (
    <div>
      <a class="btnnext" href="../html/storyboard_number_48.html" data-discover="true">ต่อไป &gt;&gt;</a>
      <a class="btnback" href="../html/storyboard_number_46.html" data-discover="true">ย้อนกลับ</a>
      <div class="center">
        <h2>
          ระมัดระวังการเบรก หรือถอยหลัง
          <br />เพราะคนขับรถบรรทุกไม่สามารถ
          <br />เห็นด้านหลังของรถได้
        </h2>
        <img src={character} />
      </div>
      <div class="carder">
        <img class="buntookbon" src={buntookbon} />
      </div>
      <div class="left-triangle"></div>
      <div class="right-triangle"></div>
      <div class="bottom-triangle"></div>
      <div class="top-square"></div>
      <img class="number1" src={number1} />
      <img class="number2" src={number2} />
      <img class="number3" src={number3} />
      <img class="number4" src={number4} />
      <div class="text">
        <img src={term} />
      </div>
    </div>
  );
};

export default App;
