import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  Typography,
  Box,
} from '@mui/material';

const Timer = ({ timeLimit, onTimeUp }) => {
  const [secondsLeft, setSecondsLeft] = useState(timeLimit);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    // Reset secondsLeft when timeLimit changes
    setSecondsLeft(timeLimit);
  }, [timeLimit]);

  useEffect(() => {
    let isMounted = true;
    let currentTimerId = null;

    if (timeLimit > 0) {
      currentTimerId = setInterval(() => {
        if (isMounted && !isTimeUp) {
          setSecondsLeft(prev => {
            const newTime = prev - 1;
            if (newTime <= 0) {
              setIsTimeUp(true);
              return 0;
            }
            return newTime;
          });
        }
      }, 1000);
  
    }

    return () => {
      isMounted = false;
      clearInterval(currentTimerId);
    };
  }, [timeLimit]);

  useEffect(() => {
    if (isTimeUp) {
      onTimeUp();
    }
  }, [isTimeUp, onTimeUp]);

  useEffect(() => {
    if (isTimeUp) {
      onTimeUp();
    }
  }, [isTimeUp, onTimeUp]);

  return (
    <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
      <CircularProgress
        variant="determinate"
        value={(secondsLeft / timeLimit) * 100}
        size={40}
        thickness={4}
        sx={{ mr: 2 }}
      />
      <Typography>{secondsLeft}s</Typography>
    </Box>
  );
};

export default Timer;
