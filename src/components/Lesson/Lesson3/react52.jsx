import '../../../css/52.css';

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

const App = () => {
  return (
    <div>
      <div className="background">
        <div className="buttongroup">
            <a className="btnred" href="/html/storyboard_number_53.html" data-discover="true">ไม่จริง</a>
            <a className="btngreen" href="/html/storyboard_number_53.html" data-discover="true">จริง</a>
            <a className="btnback" href="/html/storyboard_number_51.html" data-discover="true">ย้อนกลับ</a>
        </div>
        <div className="center">
            <h1>จริง หรือ ไม่?!</h1>
            <h2>ขับรถไม่ใส่หมวกเป็นสิ่งที่ปลอดภัย</h2>
            <h3>แบบทดสอบหลังเรียน</h3>
        </div>
        <div class="pic">
                <img className="gunnock" src={gunnock} />
                <img className="nono" src={nono} />
                <img className="bike" src={bike} />
        </div>
        <div class="block"></div>
      </div>
    </div>
  );
};

export default App;
