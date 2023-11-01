import React from 'react';
import { Container, TextField, Button, Typography, Grid } from '@mui/material';

function WorkoutForm() {
  const handleConfirmSubmit = () => {
    const isConfirmed = window.confirm('Are you sure you want to submit the form?');
    if (isConfirmed) {
      // Handle form submission logic here
      alert('Form submitted!');
    } else {
      // User canceled the submission
      alert('Submission canceled.');
    }
  };

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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              type="button" // Changed to 'button' type
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleConfirmSubmit} // Added onClick handler
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              fullWidth
            >
              Edit
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              type="button"
              variant="outlined"
              color="error"
              fullWidth
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default WorkoutForm;
