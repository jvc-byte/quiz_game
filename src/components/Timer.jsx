import React, { useEffect } from 'react';
import {
  CircularProgress,
  Typography,
  Box,
} from '@mui/material';

const Timer = ({ timeLimit, onTimeUp }) => {
  useEffect(() => {
    if (timeLimit > 0) {
      const timer = setTimeout(() => {
        onTimeUp();
      }, timeLimit * 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLimit, onTimeUp]);

  return (
    <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
      <CircularProgress
        variant="determinate"
        value={(timeLimit / 30) * 100}
        size={40}
        thickness={4}
        sx={{ mr: 2 }}
      />
      <Typography>{timeLimit}s</Typography>
    </Box>
  );
};

export default Timer;
