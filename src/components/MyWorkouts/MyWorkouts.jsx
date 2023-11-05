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

const theme = createTheme();

const MyWorkoutsContainer = styled('div')({
  background: '#f0f0f0',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(4),
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
}));

function MyWorkouts() {
  const classes = useStyles();
  const [commentsList, setCommentsList] = useState([]);

  const fetchComments = () => {
    axios.get('/api/form/')
      .then((response) => {
        setCommentsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const completeActivity = (id) => {
    axios.put(`/api/form/${id}`)
      .then((response) => {
        console.log(response)
        fetchList();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const deleteActivity = (id) => {
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
                    onClick={() => deleteActivity(comments.id)}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </MyWorkoutsContainer>
    </ThemeProvider>
  );
}

export default MyWorkouts;
