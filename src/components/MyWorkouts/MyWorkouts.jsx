import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  Box,
  Button,
  styled,
  Card,
  CardContent,
  Grid,
  ThemeProvider,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

import CommentEditor from '../CommentEditor/CommentEditor';
const theme = createTheme();

const MyWorkoutsContainer = styled('div')({
  background: '#f0f0f0',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(6), // Increased padding
});


const useStyles = styled((theme) => ({
  card: {
    background: 'white',
    marginBottom: theme.spacing(2),
  },
  workoutTitle: {
    fontSize: 20,
    marginBottom: theme.spacing(1),
  },
  workoutDate: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(1),
  },
  workoutComments: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  editButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    margin: theme.spacing(1), // Add margin to create spacing
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));


function MyWorkouts() {
  const classes = useStyles();
  const [commentsList, setCommentsList] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [updatedComment, setUpdatedComment] = useState('');

  const fetchComments = () => {
    axios.get('/api/form/')
      .then((response) => {
        setCommentsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const editWorkout = (id, updatedComment) => {
    axios.put(`/api/form/${id}`, { comments: updatedComment })
      .then((response) => {
        console.log("PUT working");
        console.log(response);
        fetchComments();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const deleteWorkout = (id) => {
    axios.delete(`/api/form/${id}`)
      .then(() => {
        fetchComments();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MyWorkoutsContainer>
        <Typography variant="h4" gutterBottom>
          My Workouts
        </Typography>
        <Grid container spacing={2}>
          {commentsList.map((comments, index) => (
            <Grid item xs={12} key={index}>
              {editingCommentId === comments.id ? (
                <CommentEditor
                  initialComment={comments.comments}
                  onSave={(updatedComment) => {
                    editWorkout(comments.id, updatedComment);
                    setEditingCommentId(null); // Exit edit mode
                  }}
                />
              ) : (
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6" className={classes.workoutTitle}>
                      {comments.workout_type}
                    </Typography>
                    <Typography variant="body2" className={classes.workoutDate}>
                      {new Date(comments.completed_at).toLocaleDateString('en-us', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </Typography>
                    <Typography variant="body1" className={classes.workoutComments}>
                      {comments.comments}
                    </Typography>
                    <Button
                      variant="contained"
                      className={classes.deleteButton}
                      onClick={() => deleteWorkout(comments.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.deleteButton}
                      onClick={() => {
                        setUpdatedComment(comments.comments);
                        setEditingCommentId(comments.id); // Enter edit mode
                      }}
                    >
                      Edit
                    </Button>
                  </CardContent>
                </Card>
              )}
            </Grid>
          ))}
        </Grid>
      </MyWorkoutsContainer>
    </ThemeProvider>
  );
}

export default MyWorkouts;
