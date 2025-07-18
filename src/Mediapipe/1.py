import cv2
import mediapipe as mp

mp_pose = mp.solutions.pose
mp_drawing = mp.solutions.drawing_utils

# วาดเฉพาะร่างกาย (จุด = ดำ, เส้นเชื่อม = ขาว)
landmark_style = mp_drawing.DrawingSpec(color=(0, 0, 0), thickness=2, circle_radius=4)
connection_style = mp_drawing.DrawingSpec(color=(255, 255, 255), thickness=2)

cap = cv2.VideoCapture(0)

def is_right_arm_straight_forward(landmarks):
    r_shoulder = landmarks[12]
    r_elbow = landmarks[14]
    r_wrist = landmarks[16]

    horizontal = abs(r_shoulder.y - r_elbow.y) < 0.05 and abs(r_elbow.y - r_wrist.y) < 0.05
    straight = abs(r_wrist.x - r_shoulder.x) > 0.3
    return horizontal and straight

with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break

        frame = cv2.flip(frame, 1)
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = pose.process(rgb)

        if results.pose_landmarks:
            # ซ่อน landmarks ใบหน้า (จุดที่ 0–10)
            for i in range(0, 11):
                results.pose_landmarks.landmark[i].visibility = 0.0

            mp_drawing.draw_landmarks(
                frame,
                results.pose_landmarks,
                mp_pose.POSE_CONNECTIONS,
                landmark_drawing_spec=landmark_style,
                connection_drawing_spec=connection_style
            )

            if is_right_arm_straight_forward(results.pose_landmarks.landmark):
                cv2.putText(frame, '✅ ท่าที่ 1 ถูกต้อง', (10, 30),
                            cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        cv2.imshow("ท่าที่ 1: แขนขวาเหยียดไปหน้า", frame)
        if cv2.waitKey(10) & 0xFF == ord('q'):
            break

cap.release()
cv2.destroyAllWindows()
