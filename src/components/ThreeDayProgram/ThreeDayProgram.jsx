import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './ThreeDayProgram.css';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ThreeDayProgram(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'

    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('3-Day Program');
    const [isClicked, setIsClicked] = useState(false);

    // Function to handle the button click
    const handleButtonClick = () => {
        setIsClicked(true);
    };


    return (
        <div className="container">

            <h2>{heading}</h2>

            <button
                type="button"
                className="threeday"
                onClick={handleButtonClick}>
                Day-1
            </button>
            {isClicked && (
                <ul className="list">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>)}

            <br></br>
            <br></br>
            <br></br>

            <button
                type="button"
                className="fourday"
                onClick={handleButtonClick}>
                Day-2
            </button>

            <br></br>
            <br></br>
            <br></br>

            <button
                type="button"
                className="fiveday"
                onClick={handleButtonClick}>
                Day-3
            </button>

        </div>
    );
}

export default ThreeDayProgram;
