import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useSelector } from 'react-redux';


function FourDayProgram() {

    const [selectedButton, setSelectedButton] = useState(null);
    const [isWorkoutStarted, setWorkoutStarted] = useState(false);
    const [commentSubmit, setCommentSubmit] = useState('')

    const user_id = useSelector(store => store.user.id);

    const history = useHistory();
    const buttons = ["Upper", "Lower", "Full Body", "Core"];

    const exercises = [
        ["Chest Press", "Push-Ups", "Pull-Ups"],
        ["Barbell Deadlift", "Squat Press", "Barbell Hip Thrusts"],
        ["Barbell Deadlift", "Bench Press", "Barbell Squats"],
        ["Deadbug", "Hanging Leg Raises", "Weighted Plank"],
    ];

    const handleButtonClick = (index) => {
        setSelectedButton(index);
        setWorkoutStarted(false); // Reset workout state when a new button is clicked
    };

    const handleStartWorkout = () => {
        setWorkoutStarted(true);
        history.push('/myworkouts');
    };

    const addComments = (event) => {

        const comments = {
            comments: commentSubmit,
            user: user_id,
            workout_type: `Day ${selectedButton+1} - ${buttons[selectedButton]}: ${exercises[selectedButton].join(', ')}`
        }
console.log(comments);
        axios.post('/api/form', comments)
          .then((response) => {
            handleStartWorkout();
          })
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <div className="exercise-page">
            <div className="header">
                4-Day Program
            </div>
            <div className="button-container">
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`exercise-button ${selectedButton === index ? "active" : ""}`}
                        onClick={() => handleButtonClick(index)}
                    >
                        {button}
                    </button>
                ))}
            </div>
            <div className="exercise-list-container">
                {selectedButton !== null && !isWorkoutStarted && (
                    <div>
                        <ul className="exercise-list">
                            {exercises[selectedButton].map((exercise, index) => (
                                <li key={index}>{exercise}</li>
                            ))}
                        </ul>
                        <TextField
                            label="Comments"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            id="comments"
                            name="comments"
                            onChange={(event) => setCommentSubmit((event.target.value))} placeholder="Comment"/>
                
                        <button
                            className="start-button"
                            onClick={addComments}
                        >
                            Finish Workout
                        </button>
                    </div>
                )}
                {isWorkoutStarted && (
                    <div className="workout-in-progress">
                        <p>{}</p>

                    </div>
                )}
            </div>
        </div>
    );
}


export default FourDayProgram;




