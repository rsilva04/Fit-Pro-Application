import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ThreeDayProgram.css';
import WorkoutForm from '../WorkoutForm/WorkoutForm'


function ThreeDayProgram() {

    const [selectedButton, setSelectedButton] = useState(null);
    const [isWorkoutStarted, setWorkoutStarted] = useState(false);


    const history = useHistory();
    const buttons = ["Push", "Pull", "Legs"];

    const exercises = [
        ["Dumbbell Chest Press", "Shoulder Press", "Tricep Extension"],
        ["Barbell Deadlift", "Assisted Pull-Ups", "T-Bar Row"],
        ["Goblet Squats", "Dumbbell Lunges", "Dumbbell Front Squats"],
    ];

    const handleButtonClick = (index) => {
        setSelectedButton(index);
        setWorkoutStarted(false); // Reset workout state when a new button is clicked
    };

    const handleStartWorkout = () => {
        setWorkoutStarted(true);
        history.push('/workoutform');
    };

    return (
        <div className="exercise-page">
            <div className="header">
                3-Day Program
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
                        <button
                            className="start-button"
                            onClick={handleStartWorkout}
                        >
                            Finish Workout
                        </button>
                    </div>
                )}
                {isWorkoutStarted && (
                    <div className="workout-in-progress">
                        <p>{WorkoutForm}</p>
            
                    </div>
                )}
            </div>
        </div>
    );
}


export default ThreeDayProgram;
