import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Card, CardContent, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import './ThreeDayProgram.css';

const ThreeDayProgram = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const [isWorkoutStarted, setWorkoutStarted] = useState(false);
    const [commentSubmit, setCommentSubmit] = useState('');

    const user_id = useSelector((store) => store.user.id);

    const history = useHistory();
    const buttons = ["Day 1: Push", "Day 2: Pull", "Day 3: Legs"];

    const exercises = [
        ["Dumbbell Chest Press 3x10", "Shoulder Press", "Tricep Extension"],
        ["Barbell Deadlift", "Assisted Pull-Ups", "T-Bar Row"],
        ["Goblet Squats", "Dumbbell Lunges", "Dumbbell Front Squats"],
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
                    3-Day Program
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
                                label="How was your workout?"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={2}
                                onChange={(event) => setCommentSubmit(event.target.value)}
                                placeholder="How was your workout?"
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

export default ThreeDayProgram;
