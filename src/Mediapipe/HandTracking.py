import cv2
import mediapipe as mp

mp_drawing = mp.solutions.drawing_utils
mp_hands = mp.solutions.hands

# กำหนดสีของจุด (landmarks) และ เส้นเชื่อม (connections)
custom_landmark_style = mp_drawing.DrawingSpec(color=(0,0,0), thickness=2, circle_radius=4)  
custom_connection_style = mp_drawing.DrawingSpec(color=(255,255,255), thickness=2)             

# เริ่มจับภาพจากกล้อง
cap = cv2.VideoCapture(0)
with mp_hands.Hands(
    model_complexity=0,
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5) as hands:

  while cap.isOpened():
    success, image = cap.read()
    if not success:
      print("Ignoring empty camera frame.")
      continue

    # แปลงเป็น RGB และห้ามเขียนทับชั่วคราวเพื่อเพิ่มความเร็ว
    image.flags.writeable = False
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    results = hands.process(image)

    # แปลงกลับเป็น BGR และอนุญาตให้เขียนทับได้
    image.flags.writeable = True
    image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

    if results.multi_hand_landmarks:
      for hand_landmarks in results.multi_hand_landmarks:
        mp_drawing.draw_landmarks(
            image,
            hand_landmarks,
            mp_hands.HAND_CONNECTIONS,
            landmark_drawing_spec=custom_landmark_style,
            connection_drawing_spec=custom_connection_style)

    # แสดงผลภาพ (พลิกซ้าย-ขวาให้เหมือนกระจก)
    cv2.imshow('MediaPipe Hands', cv2.flip(image, 1))
    if cv2.waitKey(5) & 0xFF == 27:
      break

cap.release()
cv2.destroyAllWindows()
