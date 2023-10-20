import React, { useState } from 'react';
import { useSelector } from 'react-redux';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function FiveDayProgram(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'

    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('5-Day Program');

   

    return (
        <div className="container">

            <h2>{heading}</h2>

            <button
                type="button"
                className="threeday"
                onClick={() => {
                    history.push('/');
                }}
            >
                Day-1
            </button>

            <br></br>

            <button
                type="button"
                className="fourday"
                onClick={() => {
                    history.push('/registration');
                }}
            >
                Day-2
            </button>

            <br></br>

            <button
                type="button"
                className="fiveday"
                onClick={() => {
                    history.push('/registration');
                }}
            >
                Day-3
            </button>

            <br></br>

            <button
                type="button"
                className="fiveday"
                onClick={() => {
                    history.push('/registration');
                }}
            >
                Day-4
            </button>
            <br></br>

            <button
                type="button"
                className="fiveday"
                onClick={() => {
                    history.push('/registration');
                }}
            >
                Day-5
            </button>
        </div>
    );
}

export default FiveDayProgram;
