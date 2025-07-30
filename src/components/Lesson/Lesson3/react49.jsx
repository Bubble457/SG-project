import '../../../css/49.css';

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

const App = () => {
  return (
    <div>
      <div class="background">
        <div class="buttongroup">
            <a class="btnnext" href="/html/storyboard_number_50.html" data-discover="true">เริ่ม</a>
            <a class="btnback" href="/html/storyboard_number_48.html" data-discover="true">ย้อนกลับ</a>
        </div>
        <div class="number">
            <img class="number1" src={number1} />
            <img class="number2" src={number2} />
            <img class="number3" src={number3} />
        </div>
        <div class="center">
            <h1>วิธีการเล่น</h1>
            <h2 class="first">
                <p>สังเกตตำแหน่ง</p>
                <p>ของรถคันสีขาว</p>
                <img src={eye} />
            </h2>
            <h2 class="second">
                <p>วิเคราะห์รถที่คิด</p>
                <p>ว่าอยู่ตรงจุดบอด</p>
                <img src={book} />
            </h2>
            <h2 class="third">
                <p>ใช้เมาส์คลิก</p>
                <p>เลือกรูปรถ</p>
                <p>ที่ต้องการ</p>
                <img src={mouse} />
            </h2>
        </div>
      </div>
    </div>
  );
};

export default App;
