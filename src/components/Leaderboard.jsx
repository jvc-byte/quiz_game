import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from '@mui/material';

const Leaderboard = ({ scores = [] }) => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Load leaderboard from localStorage
    const savedScores = JSON.parse(localStorage.getItem('quizLeaderboard') || '[]');
    setLeaderboard(savedScores);
  }, []);

  useEffect(() => {
    // Save leaderboard to localStorage
    localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
  }, [leaderboard]);

  const addScore = (name, score, difficulty) => {
    const newScore = {
      name,
      score,
      difficulty,
      timestamp: new Date().toISOString(),
    };

    // Add new score and sort by score (descending)
    const updatedLeaderboard = [...leaderboard, newScore]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Keep top 10 scores

    setLeaderboard(updatedLeaderboard);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Leaderboard
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Difficulty</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboard.map((score, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{score.name}</TableCell>
                <TableCell>{score.score}</TableCell>
                <TableCell>{score.difficulty}</TableCell>
                <TableCell>{new Date(score.timestamp).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Button
          variant="contained"
          onClick={() => {
            const name = prompt('Enter your name:');
            if (name) {
              addScore(name, scores.total, scores.difficulty);
            }
          }}
        >
          Add Your Score
        </Button>
      </Box>
    </Box>
  );
};

export default Leaderboard;
