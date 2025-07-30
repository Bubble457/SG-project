import cv2
import mediapipe as mp
from PIL import ImageFont, ImageDraw, Image
import numpy as np

# ========== ฟังก์ชันวาด Unicode ==========
def draw_unicode_text(img, text, position, font_path='fonts/THSarabunNew.ttf', font_size=40, color=(255, 0, 0)):
    img_pil = Image.fromarray(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
    draw = ImageDraw.Draw(img_pil)
    font = ImageFont.truetype(font_path, font_size)
    draw.text(position, text, font=font, fill=color)
    return cv2.cvtColor(np.array(img_pil), cv2.COLOR_RGB2BGR)

# ========== MediaPipe ========== 
mp_drawing = mp.solutions.drawing_utils
mp_hands = mp.solutions.hands

custom_landmark_style = mp_drawing.DrawingSpec(color=(0, 0, 0), thickness=2, circle_radius=4)
custom_connection_style = mp_drawing.DrawingSpec(color=(255, 255, 255), thickness=2)

cap = cv2.VideoCapture(0)

# ป้ายจราจร
signs = ["🛑 หยุด", "🚶 ข้ามถนน", "🚦 ไฟแดง", "🟢 ไฟเขียว", "↩️ ห้ามเลี้ยวกลับ", "⛔ ห้ามเข้า"]
current_sign = 0
locked = False

def is_fist(landmarks):
    finger_tips = [8, 12, 16, 20]
    for tip in finger_tips:
        if landmarks[tip].y < landmarks[tip - 2].y:
            return False
    return True

# ========== เริ่มจับมือ ==========
with mp_hands.Hands(
    model_complexity=0,
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5) as hands:

    while cap.isOpened():
        success, image = cap.read()
        if not success:
            continue

        image = cv2.flip(image, 1)
        image.flags.writeable = False
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        results = hands.process(image_rgb)

        image.flags.writeable = True
        image = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2BGR)

        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                mp_drawing.draw_landmarks(
                    image,
                    hand_landmarks,
                    mp_hands.HAND_CONNECTIONS,
                    landmark_drawing_spec=custom_landmark_style,
                    connection_drawing_spec=custom_connection_style)

                if is_fist(hand_landmarks.landmark):
                    if not locked:
                        current_sign = (current_sign + 1) % len(signs)
                        locked = True
                    image = draw_unicode_text(image, "✊ เปลี่ยนป้าย", (20, 60), font_size=40, color=(0, 200, 0))
                else:
                    locked = False

        # แสดงป้ายจราจรปัจจุบัน (ใช้ Pillow)
        image = draw_unicode_text(image, f"ป้าย: {signs[current_sign]}", (20, 420), font_size=48, color=(50, 50, 255))

        cv2.imshow('🚸 เกมเปลี่ยนป้ายจราจร', image)
        if cv2.waitKey(5) & 0xFF == 27:
            break

cap.release()
cv2.destroyAllWindows()
