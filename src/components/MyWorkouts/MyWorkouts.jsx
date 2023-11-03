import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
  const deleteActivity = (id) => {
    axios.delete(`/api/form/${id}`)
      .then((response) => {
        console.log(response)
        fetchComments();
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
      <div>
        {commentsList.map((comments, index) => (
          <div key={index}>
            <h3>{comments.workout_type}</h3>
            <p>{new Date(comments.completed_at).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</p>
            {comments.comments}
            <button onClick={()=> deleteActivity(comments.id)}>Delete</button>
          </div>
          
          
        ))}
      </div>
    </div>
  );
}

export default MyWorkouts;
