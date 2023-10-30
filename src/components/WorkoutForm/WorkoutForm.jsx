import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';


function WorkoutForm() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Workout Form
      </Typography>
      <form>
        <TextField
          label="Workout Name"
          variant="outlined"
          fullWidth
          id="workout_name"
          name="workout name"
        />
        <TextField
          label="Date"
          variant="outlined"
          fullWidth
          id="date"
          name="date"
        />
        <TextField
          label="Comments"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          id="comments"
          name="comments"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default WorkoutForm;

