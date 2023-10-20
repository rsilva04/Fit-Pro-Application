import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ProgramSelection.css';

function ProgramSelection() {

  const threeDayProgram = () => {
    // Use the history object to navigate to another page
    history.push('/threedayprogram');
  };

  const fourDayProgram = () => {
    // Use the history object to navigate to another page
    history.push('/fourdayprogram');
  };

  const fiveDayProgram = () => {
    // Use the history object to navigate to another page
    history.push('/fivedayprogram');
  };

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory(); // Initializes the useHistory hook
  return (
    
    <div className="container">
      <h1>Welcome, {user.username}!</h1>
      <center>
      <h1>Select Your Program</h1>
      </center>
      
      <center>
        <button
          type="button"
          className="threeday"
          onClick={threeDayProgram}
        >
          3-Day Program
        </button>
        </center>
        <center>
        <button
          type="button"
          className="fourday"
          onClick={fourDayProgram}
        >
          4-Day Program
          </button>
          </center>
          <center>
        <button
          type="button"
          className="fiveday"
          onClick={fiveDayProgram}
        >
          5-Day Program
        </button>
        </center>  
          </div>
  );
}
// this allows us to use <App /> in index.js
export default ProgramSelection;