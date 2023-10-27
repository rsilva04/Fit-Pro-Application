import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function FiveDayProgram() {

    const [selectedButton, setSelectedButton] = useState(null);
    const [isWorkoutStarted, setWorkoutStarted] = useState(false);


    const history = useHistory();
    const buttons = ["Chest", "Back", "Arms", "Shoulders", "Legs"];

    const exercises = [
        ["Exercise 1", "Exercise 2", "Exercise 3"],
        ["Exercise 4", "Exercise 5", "Exercise 6"],
        ["Exercise 7", "Exercise 8", "Exercise 9"],
        ["Exercise 10", "Exercise 11", "Exercise 12"],
        ["Exercise 11", "Exercise 12", "Exercise 13"],
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
                5-Day Program
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
                            Start Workout
                        </button>
                    </div>
                )}
                {isWorkoutStarted && (
                    <div className="workout-in-progress">
                        <p>Workout in progress...</p>
                        {/* Add workout progress components here */}
                    </div>
                )}
            </div>

        </div>
    );
}


export default FiveDayProgram;

