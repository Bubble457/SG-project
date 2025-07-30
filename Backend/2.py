import cv2
import mediapipe as mp

mp_pose = mp.solutions.pose
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils

# สีที่กำหนด: จุดดำ เส้นขาว
landmark_style = mp_drawing.DrawingSpec(color=(0, 0, 0), thickness=2, circle_radius=4)
connection_style = mp_drawing.DrawingSpec(color=(255, 255, 255), thickness=2)

cap = cv2.VideoCapture(0)

def is_thumb_right_head_forward(pose_landmarks, hand_landmarks_dict):
    if pose_landmarks is None or 'RightThumb' not in hand_landmarks_dict:
        return False

    nose = pose_landmarks[0]
    right_eye = pose_landmarks[5]
    left_eye = pose_landmarks[2]
    right_thumb = hand_landmarks_dict['RightThumb']

    # นิ้วโป้งขวาไปขวา (x > จมูกเยอะๆ)
    thumb_right = right_thumb.x > nose.x + 0.25

    # หัวตรง (ตาทั้งสองข้างห่างกันพอดี ไม่เบี้ยว)
    head_forward = abs(right_eye.x - left_eye.x) < 0.1

    return thumb_right and head_forward

with mp_pose.Pose() as pose, mp_hands.Hands(max_num_hands=2) as hands:
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        frame = cv2.flip(frame, 1)
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        pose_result = pose.process(rgb)
        hands_result = hands.process(rgb)

        thumb_points = {}

        if hands_result.multi_hand_landmarks and hands_result.multi_handedness:
            for i, hand_landmarks in enumerate(hands_result.multi_hand_landmarks):
                label = hands_result.multi_handedness[i].classification[0].label
                if label == "Right":
                    thumb_points["RightThumb"] = hand_landmarks.landmark[4]
                mp_drawing.draw_landmarks(
                    frame, hand_landmarks, mp_hands.HAND_CONNECTIONS,
                    landmark_drawing_spec=landmark_style,
                    connection_drawing_spec=connection_style
                )

        if pose_result.pose_landmarks:
            # ซ่อนใบหน้า (จุด 0–10)
            for i in range(0, 11):
                pose_result.pose_landmarks.landmark[i].visibility = 0.0

            mp_drawing.draw_landmarks(
                frame,
                pose_result.pose_landmarks,
                mp_pose.POSE_CONNECTIONS,
                landmark_drawing_spec=landmark_style,
                connection_drawing_spec=connection_style
            )

            if is_thumb_right_head_forward(pose_result.pose_landmarks.landmark, thumb_points):
                cv2.putText(frame, '✅ ท่าที่ 2 ถูกต้อง', (10, 30),
                            cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        cv2.imshow("ท่าที่ 2: นิ้วโป้งขวาไปขวา หัวห้ามหัน", frame)
        if cv2.waitKey(10) & 0xFF == ord('q'):
            break

cap.release()
cv2.destroyAllWindows()
