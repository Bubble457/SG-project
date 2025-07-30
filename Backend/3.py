import cv2
import mediapipe as mp
import math

mp_pose = mp.solutions.pose
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils

# สี
landmark_style = mp_drawing.DrawingSpec(color=(0, 0, 0), thickness=2, circle_radius=4)
connection_style = mp_drawing.DrawingSpec(color=(255, 255, 255), thickness=2)

cap = cv2.VideoCapture(0)

def get_angle(p1, p2):
    return math.degrees(math.atan2(p1.y - p2.y, p1.x - p2.x))

def is_thumb_above_head_45(pose_landmarks, hand_landmarks_dict):
    if pose_landmarks is None or 'RightThumb' not in hand_landmarks_dict:
        return False

    nose = pose_landmarks[0]
    left_eye = pose_landmarks[2]
    right_eye = pose_landmarks[5]
    right_thumb = hand_landmarks_dict['RightThumb']

    head_forward = abs(left_eye.x - right_eye.x) < 0.1
    above_head = right_thumb.y < nose.y
    angle = get_angle(right_thumb, nose)
    angle_ok = 30 <= angle <= 60  # ประมาณ 45°

    return head_forward and above_head and angle_ok

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
            for i in range(0, 11):  # ซ่อนใบหน้า
                pose_result.pose_landmarks.landmark[i].visibility = 0.0

            mp_drawing.draw_landmarks(
                frame,
                pose_result.pose_landmarks,
                mp_pose.POSE_CONNECTIONS,
                landmark_drawing_spec=landmark_style,
                connection_drawing_spec=connection_style
            )

            if is_thumb_above_head_45(pose_result.pose_landmarks.landmark, thumb_points):
                cv2.putText(frame, '✅ ท่าที่ 3 ถูกต้อง', (10, 30),
                            cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        cv2.imshow("ท่าที่ 3: นิ้วโป้งเหนือศีรษะ 45°", frame)
        if cv2.waitKey(10) & 0xFF == ord('q'):
            break

cap.release()
cv2.destroyAllWindows()
