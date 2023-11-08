import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  Box,
  styled,
  Card,
  CardContent,
  Grid,
  ThemeProvider,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import CommentEditor from '../CommentEditor/CommentEditor';

const theme = createTheme();

const MyWorkoutsContainer = styled('div')({
  background: 'linear-gradient(135deg, #70A3C9, #FFD587)',
  color: 'black',
  overflow: 'hidden',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
});

const useStyles = styled((theme) => ({
  card: {
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
    fontWeight: 'bold', 
  },
  actionButtons: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
}));
// ...


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
                    <div className={classes.workoutTitle}>
                      {comments.workout_type}
                    </div>
                    <div className={classes.workoutDate}>
                      {new Date(comments.completed_at).toLocaleDateString('en-us', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    <div className={classes.workoutComments}>
                      {comments.comments}
                    </div>
                    <div className={classes.actionButtons}>
                      <IconButton
                        color="primary"
                        onClick={() => deleteWorkout(comments.id)}
                        style={{ color: 'red' }} 
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        onClick={() => {
                          setUpdatedComment(comments.comments);
                          setEditingCommentId(comments.id); // Enter edit mode
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    </div>
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
