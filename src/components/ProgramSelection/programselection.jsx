import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useHistory } from 'react-router-dom';
import './ProgramSelection.css';

const cards = [1, 2, 3];

const defaultTheme = createTheme();

export default function ProgramSelection() {
  const history = useHistory();

  const threeDayProgram = () => {
    history.push('/threedayprogram');
  };

  const fourDayProgram = () => {
    history.push('/fourdayprogram');
  };

  const fiveDayProgram = () => {
    history.push('/fivedayprogram');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 5,
            pb: 4,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
              fontSize="60px"
            >
              Programs
            </Typography>
            <Stack
              sx={{ pt: 0 }}
              direction="row"
              spacing={1}
              justifyContent="center"
            >
            
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 4 }} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://www.shutterstock.com/shutterstock/videos/1085786246/thumb/5.jpg?ip=x480"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    color="text.primary"
                    fontSize="20px"
                  >
                  Discover our 3-Day Push, Pull, Legs Workout Program for a balanced and powerful physique with focused daily workouts.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={threeDayProgram} size="small" sx={{ margin: '0 auto' }}>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://www.shutterstock.com/shutterstock/videos/1085786246/thumb/5.jpg?ip=x480"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                     component="h1"
                     variant="h5"
                     align="center"
                     color="text.primary"
                     fontSize="20px"
                  >
                  Revamp your fitness with our 4-Day Ultimate Workout Program, targeting upper, lower, full-body, and core strength for a complete transformation.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={fourDayProgram} size="small" sx={{ margin: '0 auto' }}>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: '56.25%',
                  }}
                  image="https://www.shutterstock.com/shutterstock/videos/1085786246/thumb/5.jpg?ip=x480"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    component="h1"
                    variant="h5"
                    align="center"
                    color="text.primary"
                    fontSize="20px"
                    >
                  Unleash your potential with our 5-Day Muscle Mastery Program, targeting chest, back, arms, shoulders, and legs for comprehensive muscle development.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={fiveDayProgram} size="small" sx={{ margin: '0 auto' }}>
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
