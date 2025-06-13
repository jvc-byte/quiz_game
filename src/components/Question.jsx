import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import Timer from './Timer';

const Question = ({ question, onAnswer, timeLimit = 30, onNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  useEffect(() => {
    // Reset states when question changes
    setSelectedOption(null);
    setShowResult(false);
    setIsAnswered(false);
    setTimeExpired(false);
  }, [question]);

  // Reset timer when timeLimit changes
  useEffect(() => {
    if (timeLimit > 0) {
      setTimeExpired(false);
      setShowResult(false);
    }
  }, [timeLimit]);

  const handleAnswer = (option) => {
    if (!isAnswered && !timeExpired) {
      setSelectedOption(option);
      setShowResult(true);
      setIsAnswered(true);
      onAnswer(option === question.correctAnswer);
    }
  };

  const handleTimeout = () => {
    setTimeExpired(true);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (isAnswered || timeExpired) {
      onNextQuestion();
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {question.question}
        </Typography>
        <Timer timeLimit={timeLimit} onTimeUp={handleTimeout} />
        {showResult ? (
          <Box sx={{ mt: 2 }}>
            {selectedOption === question.correctAnswer ? (
              <Alert severity="success">Correct!</Alert>
            ) : (
              <Alert severity="error">
                Incorrect. The correct answer was: {question.correctAnswer}
              </Alert>
            )}
            <Button
              variant="contained"
              onClick={handleNextQuestion}
              sx={{ mt: 2 }}
            >
              Next Question
            </Button>
          </Box>
        ) : (
          question.options.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              fullWidth
              onClick={() => handleAnswer(option)}
              sx={{
                mb: 2,
                bgcolor: selectedOption === option ? 'primary.main' : 'initial',
                color: selectedOption === option ? 'white' : 'initial',
              }}
            >
              {option}
            </Button>
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default Question;
