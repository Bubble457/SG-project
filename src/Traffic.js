const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const signBox = document.querySelector('.sign-box');
const taskText = document.querySelector('.task-label');
const targetImg = document.getElementById('target-img');
const targetDesc = document.getElementById('target-desc');

// ข้อมูลโจทย์
const borderColors = ['red', 'blue', 'yellow'];
const signImages = ['kon2.png', 'hampai.png', 'dontleawright.png'];
const questionList = [
  { img: './assets/kon2.png', desc: 'ข้ามถนน', ansColor: 'yellow', ansSign: 'kon2.png' },
  { img: './assets/hampai.png', desc: 'ห้ามแซง', ansColor: 'red', ansSign: 'hampai.png' },
  { img: './assets/dontleawright.png', desc: 'ห้ามเลี้ยวขวา', ansColor: 'red', ansSign: 'dontleawright.png' }
];

let questionIndex = 0;
let colorIndex = 0;
let signIndex = 0;
let state = 'color';
let locked = false;

function updateQuestion() {
  const q = questionList[questionIndex];
  targetImg.src = q.img;
  targetDesc.innerText = q.desc;
  taskText.innerText = 'เลือกสีกรอบป้าย';
  colorIndex = 0;
  signIndex = 0;
  state = 'color';
  updateSign();
}

function updateSign() {
  signBox.style.borderColor = borderColors[colorIndex];
  signBox.style.backgroundImage = `url(./assets/${signImages[signIndex]})`;
}

function lockGesture() {
  locked = true;
  setTimeout(() => (locked = false), 800);
}

function detectFist(lm) {
  return [8, 12, 16, 20].every(i => lm[i].y > lm[i - 2].y);
}

function detectOpen(lm) {
  return [8, 12, 16, 20].filter(i => lm[i].y < lm[i - 2].y).length >= 3;
}

function checkAnswer() {
  const q = questionList[questionIndex];
  const color = borderColors[colorIndex];
  const sign = signImages[signIndex];
  return color === q.ansColor && sign === q.ansSign;
}

// MediaPipe
const hands = new Hands({
  locateFile: file => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});
hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 0,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
hands.onResults(results => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

  if (results.multiHandLandmarks) {
    const lm = results.multiHandLandmarks[0];
    drawConnectors(ctx, lm, HAND_CONNECTIONS, { color: 'white', lineWidth: 2 });
    drawLandmarks(ctx, lm, { color: 'black', lineWidth: 1 });

    if (locked) return;

    if (detectOpen(lm)) {
      if (state === 'color') {
        colorIndex = (colorIndex + 1) % borderColors.length;
      } else if (state === 'symbol') {
        signIndex = (signIndex + 1) % signImages.length;
      }
      updateSign();
      lockGesture();
    }

    if (detectFist(lm)) {
      if (state === 'color') {
        state = 'symbol';
        taskText.innerText = 'เลือกสัญลักษณ์ป้าย';
      } else if (state === 'symbol') {
        const result = checkAnswer();
        taskText.innerText = result ? '✅ ถูกต้อง!' : '❌ ผิด';
        setTimeout(() => {
          questionIndex++;
          if (questionIndex < questionList.length) {
            updateQuestion();
          } else {
            taskText.innerText = '🎉 ทำครบทุกข้อแล้ว!';
          }
        }, 1500);
      }
      lockGesture();
    }
  }
});

// กล้อง
const camera = new Camera(video, {
  onFrame: async () => {
    if (video.videoWidth > 0) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    }
    await hands.send({ image: video });
  },
  width: 640,
  height: 480
});

// เปิดกล้องเมื่อพร้อม
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
      camera.start();
      updateQuestion();
    };
  })
  .catch(err => {
    console.error("ไม่สามารถเข้าถึงกล้อง:", err);
    alert("กรุณาอนุญาตกล้องเพื่อใช้งาน!");
  });
