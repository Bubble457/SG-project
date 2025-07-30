import '../../../css/54.css';

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
const graph = require('../asset/Misc/กราฟ.png')
const profile = require('../asset/icon/สำเนาๆๆๆๆๆๆ (2).png')
const siang = require('../asset/icon/เขียว.png')
const ta = require('../asset/icon/eye.png')
const caution = require('../asset/icon/caution.png')

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
          <div class="center">
              <div class="graph">
                <img src={graph} />
              </div>
              <div class="profile">
                <img src={profile} />
              </div>
              <div class="information">
                <h2>ข้อมูลผู้ใช้เบื้องต้น</h2>
                <p class="indent">เด็กชาย ภูมิกมล จันต๊ะนารี</p>
                <p>ระดับการศึกษา</p>
                <p class="indent">ชั้นมัธยมศึกษาปีที่ 2</p>
                <h3>ข้อมูลเชิงลึก</h3>
              </div>            
          </div>
          <div class="block"></div>
          <div class="score">
                <div class="siang">
                    <img src={siang} />
                    <span>การประเมินความเสี่ยง   ระดับดี</span>

                </div>
                <div class="ta">
                    <img src={ta} />
                    <span>การกวาดสายตา   ระดับดี</span>
                </div>
                <div class="caution">
                    <img src={caution} />
                    <span>การรู้สังเกต   ระดับดีเยี่ยม</span>
                </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
