import cv2
import mediapipe as mp
import numpy as np
import random
import time

# Initialize MediaPipe Hands
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
hands = mp_hands.Hands(min_detection_confidence=0.7, min_tracking_confidence=0.5, max_num_hands=1)

# Game constants
COLORS = [
    ("Red", (0, 0, 255)),
    ("Green", (0, 255, 0)),
    ("Blue", (255, 0, 0)),
    ("Yellow", (0, 255, 255)),
    ("Purple", (255, 0, 255)),
    ("Cyan", (255, 255, 0)),
    ("Orange", (0, 165, 255)),
    ("Pink", (203, 192, 255))
]
GAME_STATES = ["IDLE", "COUNTDOWN", "PLAYING", "RESULT"]
GESTURES = ["UNKNOWN", "OPEN", "FIST"]

class ColorSignGame:
    def __init__(self):
        self.state = "IDLE"
        self.target_color = None
        self.target_color_name = ""
        self.options = []
        self.selected_option = -1
        self.gesture = "UNKNOWN"
        self.last_gesture_time = 0
        self.countdown = 3
        self.last_countdown_time = 0
        self.result_time = 0
        self.score = 0
        self.rounds = 0
        self.message = "Make an OPEN hand to start"
        
    def start_new_round(self):
        self.state = "COUNTDOWN"
        self.countdown = 3
        self.last_countdown_time = time.time()
        self.selected_option = -1
        self.gesture = "UNKNOWN"
        
        # Select a random target color
        self.target_color = random.choice(COLORS)
        self.target_color_name, self.target_color_bgr = self.target_color
        
        # Create options (include the correct one + 3 random others)
        self.options = [self.target_color]
        while len(self.options) < 4:
            color = random.choice(COLORS)
            if color not in self.options:
                self.options.append(color)
        random.shuffle(self.options)
        
    def check_gesture(self, hand_landmarks, frame_width, frame_height):
        # Simplified gesture recognition
        thumb_tip = hand_landmarks.landmark[mp_hands.HandLandmark.THUMB_TIP]
        index_tip = hand_landmarks.landmark[mp_hands.HandLandmark.INDEX_FINGER_TIP]
        middle_tip = hand_landmarks.landmark[mp_hands.HandLandmark.MIDDLE_FINGER_TIP]
        
        # Calculate distances between fingers
        thumb_index_dist = abs(thumb_tip.x - index_tip.x) * frame_width + abs(thumb_tip.y - index_tip.y) * frame_height
        index_middle_dist = abs(index_tip.x - middle_tip.x) * frame_width + abs(index_tip.y - middle_tip.y) * frame_height
        
        # Detect gestures
        if thumb_index_dist > 0.1 and index_middle_dist > 0.1:
            return "OPEN"
        elif thumb_index_dist < 0.05 and index_middle_dist < 0.05:
            return "FIST"
        return "UNKNOWN"
    
    def update(self, frame):
        frame_height, frame_width, _ = frame.shape
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = hands.process(rgb_frame)
        
        # Reset gesture if no hands detected
        if not results.multi_hand_landmarks:
            self.gesture = "UNKNOWN"
        else:
            # Process the first detected hand
            hand_landmarks = results.multi_hand_landmarks[0]
            self.gesture = self.check_gesture(hand_landmarks, frame_width, frame_height)
            
            # Draw hand landmarks
            mp_drawing.draw_landmarks(
                frame, hand_landmarks, mp_hands.HAND_CONNECTIONS,
                mp_drawing.DrawingSpec(color=(0, 255, 0), thickness=2, circle_radius=2),
                mp_drawing.DrawingSpec(color=(0, 0, 255), thickness=2))
        
        # Game state machine
        if self.state == "IDLE":
            if self.gesture == "OPEN":
                self.start_new_round()
                
        elif self.state == "COUNTDOWN":
            current_time = time.time()
            if current_time - self.last_countdown_time > 1:
                self.countdown -= 1
                self.last_countdown_time = current_time
                
            if self.countdown <= 0:
                self.state = "PLAYING"
                self.message = "Make a FIST to select"
                
        elif self.state == "PLAYING":
            # Gesture-based selection
            if self.gesture == "FIST" and self.selected_option == -1:
                # Select a random option (simulating "stopping" the selection)
                self.selected_option = random.randint(0, 3)
                self.rounds += 1
                
                # Check if correct
                selected_color = self.options[self.selected_option]
                if selected_color == self.target_color:
                    self.score += 1
                    self.message = "CORRECT! +1 Point"
                else:
                    self.message = f"WRONG! It was {self.target_color_name}"
                
                self.state = "RESULT"
                self.result_time = time.time()
                
        elif self.state == "RESULT":
            # Show result for 3 seconds
            if time.time() - self.result_time > 3:
                self.state = "IDLE"
                self.message = "Make an OPEN hand for next round"
        
        # Draw UI
        self.draw_ui(frame)
        return frame
    
    def draw_ui(self, frame):
        frame_height, frame_width, _ = frame.shape
        
        # Draw header
        cv2.rectangle(frame, (0, 0), (frame_width, 80), (40, 40, 40), -1)
        cv2.putText(frame, "COLOR SIGN GAME", (20, 40), 
                   cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)
        cv2.putText(frame, f"Score: {self.score}/{self.rounds}", (frame_width - 200, 40), 
                   cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 0), 2)
        
        # Draw current gesture
        gesture_text = f"Gesture: {self.gesture}"
        cv2.putText(frame, gesture_text, (20, 70), 
                   cv2.FONT_HERSHEY_SIMPLEX, 0.7, 
                   (0, 255, 0) if self.gesture != "UNKNOWN" else (0, 0, 255), 2)
        
        # Draw instructions
        cv2.putText(frame, self.message, (frame_width//2 - 200, frame_height - 30), 
                   cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 0), 2)
        
        # Draw game elements based on state
        if self.state == "COUNTDOWN":
            # Draw countdown
            cv2.putText(frame, str(self.countdown), (frame_width//2 - 30, frame_height//2), 
                       cv2.FONT_HERSHEY_SIMPLEX, 5, (0, 0, 255), 10)
            
        elif self.state in ["PLAYING", "RESULT"]:
            # Draw target color
            cv2.rectangle(frame, (frame_width//2 - 100, 100), (frame_width//2 + 100, 200), 
                         self.target_color_bgr, -1)
            cv2.putText(frame, self.target_color_name, (frame_width//2 - 80, 250), 
                       cv2.FONT_HERSHEY_SIMPLEX, 0.9, (255, 255, 255), 2)
            
            # Draw options
            option_size = 80
            padding = 30
            total_width = 4 * option_size + 3 * padding
            start_x = (frame_width - total_width) // 2
            
            for i, color in enumerate(self.options):
                color_name, color_bgr = color
                x1 = start_x + i * (option_size + padding)
                y1 = frame_height - 200
                x2 = x1 + option_size
                y2 = y1 + option_size
                
                # Draw option
                cv2.rectangle(frame, (x1, y1), (x2, y2), color_bgr, -1)
                cv2.putText(frame, color_name, (x1, y2 + 25), 
                           cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 255, 255), 1)
                
                # Highlight selected option
                if i == self.selected_option:
                    cv2.rectangle(frame, (x1-5, y1-5), (x2+5, y2+5), 
                                 (0, 255, 255) if color == self.target_color else (0, 0, 255), 3)
        
        # Draw state indicator
        state_colors = {
            "IDLE": (100, 100, 255),
            "COUNTDOWN": (100, 255, 255),
            "PLAYING": (100, 255, 100),
            "RESULT": (255, 255, 100)
        }
        cv2.rectangle(frame, (frame_width - 150, 10), (frame_width - 10, 40), 
                     state_colors[self.state], -1)
        cv2.putText(frame, self.state, (frame_width - 140, 30), 
                   cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0, 0, 0), 1)

# Initialize game
game = ColorSignGame()

# Start video capture
cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    
    # Flip frame horizontally for mirror effect
    frame = cv2.flip(frame, 1)
    
    # Update game
    frame = game.update(frame)
    
    # Display frame
    cv2.imshow('Color Sign Game', frame)
    
    # Exit on 'q' press
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Clean up
cap.release()
cv2.destroyAllWindows()