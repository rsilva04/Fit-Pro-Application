import React from 'react';
import { useSelector } from 'react-redux';
import './ProgramSelection.css';

function ProgramSelection() {


  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
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
          onClick={() => {
            history.push('/registration');
          }}
        >
          3-Day Program
        </button>
        </center>
        <center>
        <button
          type="button"
          className="fourday"
          onClick={() => {
            history.push('/registration');
          }}
        >
          4-Day Program
          </button>
          </center>
          <center>
        <button
          type="button"
          className="fiveday"
          onClick={() => {
            history.push('/registration');
          }}
        >
          5-Day Program
        </button>
        </center>  
          </div>
  );
}
// this allows us to use <App /> in index.js
export default ProgramSelection;