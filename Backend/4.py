# import cv2
# import mediapipe as mp

# mp_pose = mp.solutions.pose
# mp_hands = mp.solutions.hands
# mp_drawing = mp.solutions.drawing_utils

# # สไตล์สี
# landmark_style = mp_drawing.DrawingSpec(color=(0, 0, 0), thickness=2, circle_radius=4)
# connection_style = mp_drawing.DrawingSpec(color=(255, 255, 255), thickness=2)

# cap = cv2.VideoCapture(0)

# def is_both_thumbs_outward(pose_landmarks, hand_landmarks_dict):
#     if pose_landmarks is None:
#         return False
#     if 'RightThumb' not in hand_landmarks_dict or 'LeftThumb' not in hand_landmarks_dict:
#         return False

#     nose = pose_landmarks[0]
#     left_eye = pose_landmarks[2]
#     right_eye = pose_landmarks[5]
#     right_thumb = hand_landmarks_dict['RightThumb']
#     left_thumb = hand_landmarks_dict['LeftThumb']

#     head_straight = abs(left_eye.x - right_eye.x) < 0.1

#     # นิ้วขวาอยู่ขวา / ซ้ายอยู่ซ้าย และระดับใกล้เคียง
#     right_far = right_thumb.x > nose.x + 0.2
#     left_far = left_thumb.x < nose.x - 0.2
#     level = abs(right_thumb.y - left_thumb.y) < 0.1

#     return head_straight and right_far and left_far and level

# with mp_pose.Pose() as pose, mp_hands.Hands(max_num_hands=2) as hands:
#     while cap.isOpened():
#         ret, frame = cap.read()
#         if not ret:
#             break

#         frame = cv2.flip(frame, 1)
#         rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

#         pose_result = pose.process(rgb)
#         hands_result = hands.process(rgb)

#         thumb_points = {}

#         if hands_result.multi_hand_landmarks and hands_result.multi_handedness:
#             for i, hand_landmarks in enumerate(hands_result.multi_hand_landmarks):
#                 label = hands_result.multi_handedness[i].classification[0].label
#                 if label == "Right":
#                     thumb_points["RightThumb"] = hand_landmarks.landmark[4]
#                 elif label == "Left":
#                     thumb_points["LeftThumb"] = hand_landmarks.landmark[4]
#                 mp_drawing.draw_landmarks(
#                     frame, hand_landmarks, mp_hands.HAND_CONNECTIONS,
#                     landmark_drawing_spec=landmark_style,
#                     connection_drawing_spec=connection_style
#                 )

#         if pose_result.pose_landmarks:
#             for i in range(0, 11):
#                 pose_result.pose_landmarks.landmark[i].visibility = 0.0

#             mp_drawing.draw_landmarks(
#                 frame,
#                 pose_result.pose_landmarks,
#                 mp_pose.POSE_CONNECTIONS,
#                 landmark_drawing_spec=landmark_style,
#                 connection_drawing_spec=connection_style
#             )

#             if is_both_thumbs_outward(pose_result.pose_landmarks.landmark, thumb_points):
#                 cv2.putText(frame, '✅ ท่าที่ 4 ถูกต้อง', (10, 30),
#                             cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

#         cv2.imshow("ท่าที่ 4: นิ้วโป้งกางออก 180°", frame)
#         if cv2.waitKey(10) & 0xFF == ord('q'):
#             break

# cap.release()
# cv2.destroyAllWindows()
