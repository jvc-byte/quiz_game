# Interactive Quiz Game

A dynamic and engaging quiz game built with React.js and Material-UI that challenges your knowledge across various categories.

## How to Play

1. The quiz starts automatically when you open the game
2. Each question has a time limit based on its difficulty:
   - Easy questions: 30 seconds
   - Medium questions: 20 seconds
   - Hard questions: 15 seconds
3. Select your answer by clicking on one of the option buttons
4. You'll receive immediate feedback:
   - Correct answers show a green success message
   - Incorrect answers show the correct answer
5. After answering or when time runs out:
   - Click the "Next Question" button to proceed
   - The button appears automatically after answering
6. Complete all questions to see your final score and score breakdown
7. Add your score to the leaderboard by entering your name
8. Click "Play Again" to restart the quiz

## Features

- **Dynamic Question Loading**: Questions are loaded from a JSON file
- **Difficulty Levels**: Three difficulty levels (Easy, Medium, Hard)
- **Question Timer**: Each question has a countdown timer
- **Score Tracking**: 
  - Total score tracking
  - Score breakdown by difficulty level
- **Leaderboard**: Track your scores against other players
- **Responsive Design**: Works on both desktop and mobile devices
- **Material Design**: Modern UI with Material-UI components
- **Progress Tracking**: Shows your progress through the quiz
- **Category Display**: Shows the category and difficulty of each question
- **Visual Feedback**: Immediate feedback on answers

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`

## Project Structure

```
src/
├── components/      # Reusable React components
│   ├── Question.jsx # Main question component
│   ├── Timer.jsx    # Countdown timer component
│   └── Leaderboard.jsx # Score tracking component
├── data/           # Quiz questions and data
│   └── questions.json  # Question database
├── pages/          # Main application pages
│   └── Quiz.jsx    # Main quiz game page
└── styles/         # Application styles
```

## Technologies Used

- React.js - For building the user interface
- Vite - For fast development server and build tool
- Material-UI - For modern UI components
- React Router - For navigation
- Local Storage - For leaderboard persistence

## Development

To run the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- Inspired by various quiz game implementations
- Built with Material-UI components
- Thanks to the React community for excellent documentation and support
