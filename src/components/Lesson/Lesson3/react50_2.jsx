import '../../../css/50_2.css';

const character = require('../asset/Misc/halfcharacter.PNG');
const buntook = require('../asset/Misc/รถบรรทุกสุดหล่อ.png');
const morsai = require('../asset/Misc/มอไซ.png');
const eyebutton = require('../asset/icon/eye.png')
const korb = require('../asset/Misc/เทส.png')
const kajog = require('../asset/Misc/กระจกรถ.png')
const wrong = require('../asset/icon/ผิด2.png')
const news = require('../asset/background/news.jpg')
const check = require('../asset/icon/ถูก.png')
const arrow = require('../asset/Misc/ลูกษร.png')
const number1 = require('../asset/Misc/1.png')
const number2 = require('../asset/Misc/2.png')
const number3 = require('../asset/Misc/3.png')
const number4 = require('../asset/Misc/4.png')
const buntookbon = require('../asset/Misc/รถบรรทุก.png')
const term = require('../asset/Misc/เติม.png')
const muang = require('../asset/icon/ม่วง.png')
const eye = require('../asset/Misc/eye.png')
const book = require('../asset/Misc/11.png')
const mouse = require('../asset/Misc/เมาส์.png')
const car = require('../asset/Misc/รถ.png')

const App = () => {
  return (
    <div>
      <a class="btnnext" href="../html/storyboard_number_51.html" data-discover="true">ต่อไป &gt;&gt;</a>
      <a class="btnback" href="../html/storyboard_number_49.html" data-discover="true">ย้อนกลับ</a>
      <img className='check' src={wrong} />
      <div class="center">
        <h2>ยังไม่ถูกต้อง ลองอีกทีนะคะ</h2>
        <img className='character' src={character} />
      </div>
      <div className='block'></div>
      <div class="carder">
        <a class="maipodpai1" href="#" data-discover="true">
            <img src={car} />
        </a>
        <a class="maipodpai2" href="storyboard_number_4.html" data-discover="true">
            <img src={car} />
        </a>
        <a className='rod1' href="storyboard_number_4.html" data-discover="true">
          <img src={car} />
        </a>
          <a className='rod2' href="storyboard_number_4.html" data-discover="true">
          <img src={car} />
        </a>
        <img class="buntookbon" src={buntookbon} />
      </div>
      </div>
  );
};

export default App;
