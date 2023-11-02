import React from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function MyWorkouts() {
  return (
    <div className="container">
      <div>
        <p>Completed Workouts</p>
    
      </div>
    </div>
  );
}

export default MyWorkouts;
