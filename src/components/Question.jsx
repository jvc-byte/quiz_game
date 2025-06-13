import React, { useState } from 'react';
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

const Question = ({ question, onAnswer, timeLimit = 30 }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (option) => {
    if (!isAnswered) {
      setSelectedOption(option);
      setShowResult(true);
      setIsAnswered(true);
      onAnswer(option === question.correctAnswer);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {question.question}
        </Typography>
        <Timer timeLimit={timeLimit} onTimeUp={() => onAnswer(false)} />
        {showResult ? (
          selectedOption === question.correctAnswer ? (
            <Alert severity="success">Correct!</Alert>
          ) : (
            <Alert severity="error">
              Incorrect. The correct answer was: {question.correctAnswer}
            </Alert>
          )
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
