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
    const [day2Clicked, setDay2Clicked] = useState(false);
    const [day3Clicked, setDay3Clicked] = useState(false);

    // Function to handle the button click
    const handleButtonClick = () => {
        setIsClicked(true);
    };
    const handleButtonClickDay2 = () => {
        setDay2Clicked(true);
        console.log('i am clicked');
    };

    const handleButtonClickDay3 = () => {
        setDay3Clicked(true);
        console.log('i am clicked');
    };
    


    return (
        <div>
        <div className='threedayprogramstyle'>
        <div className="threedaycontainer">
            <div className="head">
                <h2>{heading}</h2>
            </div>
            <button
                type="button"
                className="fiveday-button"
                onClick={handleButtonClick}>
                Push
            </button>
            {isClicked && (
                    <div className="list">
                        <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                        </ul>
                    </div>)}

            <br></br>
            <br></br>
            <br></br>

            <button
                type="button"
                className="fiveday-button"
                onClick={handleButtonClickDay2}>
                Pull
            </button>
            {day2Clicked && (
                    <div className="list">
                        <ul>
                            <li>Item 4</li>
                            <li>Item 5</li>
                            <li>Item 6</li>
                        </ul>
                    </div>)}
            <br></br>
            <br></br>
            <br></br>

            <button
                type="button"
                className="fiveday-button"
                onClick={handleButtonClickDay3}>
                Legs
            </button>
            {day3Clicked && (
                    <div className="list">
                        <ul>
                            <li>Item 7</li>
                            <li>Item 8</li>
                            <li>Item 9</li>
                        </ul>
                    </div>)}
        </div >
        </div>
        </div>
    );
}

export default ThreeDayProgram;
