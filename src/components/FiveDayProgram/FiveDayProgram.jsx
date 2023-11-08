import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

const FiveDayProgram = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [isWorkoutStarted, setWorkoutStarted] = useState(false);
  const [commentSubmit, setCommentSubmit] = useState('');

  const user_id = useSelector((store) => store.user.id);

  const history = useHistory();
  const buttons = ["Day 1: Chest", "Day 2: Back", "Day 3: Arms", "Day 4: Shoulders", "Day 5: Legs"];

  const exercises = [
    ["Dumbbell Chest Press 3x12", "Machine Chest Fly 3x12", "Assisted Dips 3x12", "Cable Crossover 3x12", "Dumbbell Incline Chest Press 3x12"],
    ["Lat Pull Down 3x12", "Seated Row 3x12", "Barbell Deadlift 3x12", "Dumbbell Reverse Fly 3x12", "Barbell Good-mornings 3x12", "Face Pull 3x12"],
    ["Tricep Extension 3x12", "EZ Bar Curls 3x12", "Hammer Curls 3x12", "Lateral Raise 3x12", "Tricep Pushdown 3x12", "Cable Rows 3x12"],
    ["Dumbbell Shoulder Press 3x12", "Front/Side Raises 3x12", "Arnold Press 3x12", "Barbell Shrugs 3x12", "Z-Press 3x12", "Push Press 3x12"],
    ["Leg Press 3x12", "Bulgarian Split Squats 3x12", "Barbell Squat 3x12", "Barbell Romanian Deadlift 3x12", "Walking Lunges 3x12"],
  ];

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    setWorkoutStarted(false); // Reset workout state when a new button is clicked
  };

  const handleStartWorkout = () => {
    setWorkoutStarted(true);
    history.push('/myworkouts');
  };

  const addComments = () => {
    const comments = {
      comments: commentSubmit,
      user: user_id,
      workout_type: `Day ${selectedButton + 1} - ${buttons[selectedButton]}: ${exercises[selectedButton].join(', ')}`,
    };

    axios
      .post('/api/form', comments)
      .then((response) => {
        handleStartWorkout();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
    <Grid item xs={12}>
        <Typography variant="h3" align="center" gutterBottom sx={{ color: '#000000', fontWeight: 'bold' }}>
            5-Day Program
        </Typography>
    </Grid>
    <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
            {buttons.map((button, index) => (
                <Grid item key={index}>
                    <Button
                        variant="contained"
                        className={`exercise-button ${selectedButton === index ? "active" : ""}`}
                        onClick={() => handleButtonClick(index)}
                    >
                        {button}
                    </Button>
                </Grid>
            ))}
        </Grid>
    </Grid>
    <Grid item xs={12} justifyContent="center" align="center">
        {selectedButton !== null && !isWorkoutStarted && (
            <Grid container spacing={2} justifyContent="center" align="center">
                <Grid item xs={12}>
                    <ul className="exercise-list" style={{ padding: '10px' }}>
                        {exercises[selectedButton].map((exercise, index) => (
                            <li key={index}>{exercise}</li>
                        ))}
                    </ul>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="What went well? What needs improvement?"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={2}
                        onChange={(event) => setCommentSubmit(event.target.value)}
                        placeholder="What went well? What needs improvement?"
                        sx={{ marginTop: '20px', padding: '10px', width: '50%' }} // Set the width to 50%
                    />

                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center' }}>
                    <Button variant="contained" color="primary" onClick={addComments}>
                        Finish Workout
                    </Button>
                </Grid>
            </Grid>
        )}
        {isWorkoutStarted && (
            <div className="workout-in-progress">
                <p>{ }</p>
            </div>
        )}
    </Grid>
</Grid>
);
};

export default FiveDayProgram;
