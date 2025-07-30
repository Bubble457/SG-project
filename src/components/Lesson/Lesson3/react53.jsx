import '../../../css/53.css';

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
const term = require('../asset/Misc/เติม.png')
const muang = require('../asset/icon/ม่วง.png')
const eye = require('../asset/Misc/eye.png')
const book = require('../asset/Misc/11.png')
const mouse = require('../asset/Misc/เมาส์.png')
const car = require('../asset/Misc/รถ.png')
const pencil = require('../asset/icon/ดินสอ.png')
const nono = require('../asset/Misc/ห้าม.png')
const gunnock = require('../asset/Misc/หมวก.png')
const bike = require('../asset/Misc/IMG_8911.PNG')
const btnpurple = require('../asset/icon/รายงาน.png')
const btnyellow = require('../asset/icon/ทบทวน.png')
const btngreen = require('../asset/icon/หน้าหลัก.png')
const object = require('../asset/Misc/อ็อปเจคๆๆ.png')

const App = () => {
  return (
    <div>
      <div class="background">
        <div class="buttongroup">
            <a class="btnpurple" href="/html/storyboard_number_54.html" data-discover="true">
                <img src={btnpurple} />
                <h1>รายงาน</h1>
            </a>
            <a class="btnyellow" href="/html/storyboard_number_53.html" data-discover="true">
                <img src={btnyellow} />
                <h1>ทบทวน</h1>
            </a>
            <a class="btngreen" href="/html/storyboard_number_15.html" data-discover="true">
                <img src={btngreen} />
                <h1>หน้าหลัก</h1>
            </a>
            <a class="btnback" href="/html/storyboard_number_52.html" data-discover="true">ย้อนกลับ</a>
        </div>
        <div class="center">
            <h1>
                <span style={{ color:'rgb(48, 34, 54)'}}>ทบทวนข้อที่</span>
                <span style={{ color: 'red' }}>ผิด</span>
            </h1>
            <img class="lesson" src={object} />
        </div>
        <div class="block"></div>
      </div>
    </div>
  );
};

export default App;
