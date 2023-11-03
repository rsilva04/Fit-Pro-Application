import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function MyWorkouts() {

  const [ commentsList, setCommentsList ] = useState('')

  const fetchComments = () => {
    axios.get('/form')
    .then((response) => {
      console.log(response);
      console.log(response.data);
      setCommentsList(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="container">
      <div>
        <p>Completed Workouts</p>
    
      </div>
    </div>
  );
}

export default MyWorkouts;
