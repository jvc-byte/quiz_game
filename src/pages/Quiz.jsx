import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  LinearProgress,
  Paper,
  Grid,
  Chip,
} from '@mui/material';
import Question from '../components/Question';
import questionsData from '../data/questions.json';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [questions] = useState(questionsData.questions);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [timeLimit, setTimeLimit] = useState(30);

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
    setTimeLimit(getTimeLimit(currentQuestion));
  }, [currentQuestionIndex, questions, currentQuestion]);

  const getTimeLimit = (question) => {
    switch (question.difficulty) {
      case 'easy':
        return 30;
      case 'medium':
        return 20;
      case 'hard':
        return 15;
      default:
        return 30;
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      setShowResults(true);
    }
  }, [currentQuestionIndex, questions.length]);

  if (showResults) {
    return (
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="div" gutterBottom>
          Quiz Complete!
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Your Score: {score}/{questions.length}
        </Typography>
        <Paper sx={{ p: 2, mt: 2 }}>
          <Typography variant="h6" gutterBottom>
            Score Breakdown:
          </Typography>
          <Grid container spacing={1}>
            <Grid item>
              <Chip
                label={`Easy: ${scoreEasy()}/${countQuestions('easy')}`}
                color={scoreEasy() === countQuestions('easy') ? 'success' : 'default'}
              />
            </Grid>
            <Grid item>
              <Chip
                label={`Medium: ${scoreMedium()}/${countQuestions('medium')}`}
                color={scoreMedium() === countQuestions('medium') ? 'success' : 'default'}
              />
            </Grid>
            <Grid item>
              <Chip
                label={`Hard: ${scoreHard()}/${countQuestions('hard')}`}
                color={scoreHard() === countQuestions('hard') ? 'success' : 'default'}
              />
            </Grid>
          </Grid>
        </Paper>
        <Button
          variant="contained"
          onClick={() => {
            setCurrentQuestionIndex(0);
            setScore(0);
            setShowResults(false);
          }}
          sx={{ mt: 2 }}
        >
          Play Again
        </Button>
      </Box>
    );
  }

  const scoreEasy = () => questions.slice(0, currentQuestionIndex).filter(q => q.difficulty === 'easy' && q.correctAnswer === currentQuestion.correctAnswer).length;
  const scoreMedium = () => questions.slice(0, currentQuestionIndex).filter(q => q.difficulty === 'medium' && q.correctAnswer === currentQuestion.correctAnswer).length;
  const scoreHard = () => questions.slice(0, currentQuestionIndex).filter(q => q.difficulty === 'hard' && q.correctAnswer === currentQuestion.correctAnswer).length;

  const countQuestions = (difficulty) => questions.filter(q => q.difficulty === difficulty).length;

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" component="div" gutterBottom>
          Question {currentQuestionIndex + 1}/{questions.length}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Category: {currentQuestion.category} • Difficulty: {currentQuestion.difficulty}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(currentQuestionIndex / questions.length) * 100}
          sx={{ mb: 4 }}
        />
        <Question
          question={currentQuestion}
          onAnswer={handleAnswer}
          timeLimit={timeLimit}
        />
      </Box>
    </Container>
  );
};

export default Quiz;
