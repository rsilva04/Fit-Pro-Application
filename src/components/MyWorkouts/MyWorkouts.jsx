import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function MyWorkouts() {

  const [ commentsList, setCommentsList ] = useState([])

  const fetchComments = () => {
    axios.get('/api/form/')
    .then((response) => {
      console.log(response);
      console.log(response.data);
      setCommentsList(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      <h1>My Workouts</h1>
      <ul>
        {commentsList.map((comments, index) => (
          <li key={index}>{comments.comments}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyWorkouts;
