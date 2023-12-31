import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

const programCards = [
  {
    title: '3-Day Program',
    description: 'A three-day workout program consisting of a Push, Pull, and Legs split.',
    image: 'https://wodprep.com/wp-content/uploads/2023/02/crossfit-athlete-doing-exercise-with-a-barbell-2022-02-02-03-57-07-utc-1-scaled-e1677238980140.jpg',
    route: '/threedayprogram',
  },
  {
    title: '4-Day Program',
    description: 'A four-day workout program consisting of Upper, Lower, Core, and Full-Body workouts.',
    image: 'https://www.bodybuilding.com/images/2016/july/5-crossfit-workouts-you-can-do-anywhere-header-v2-960x540.jpg',
    route: '/fourdayprogram',
  },
  {
    title: '5-Day Program',
    description: 'A five-day workout program consisting of Chest, Back, Arms, Shoulders, and Leg workouts.',
    image: 'https://mirafit.co.uk/wp/wp-content/uploads/2022/11/tricep-pushdown-with-Mirafit-Cable-Machine-1-1024x683.jpg',
    route: '/fivedayprogram',
  },
];

export default function ProgramSelection() {
  const history = useHistory();

  const navigateToProgram = (route) => {
    history.push(route);
  };

  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container maxWidth="md">
        <Typography
  variant="h4"
  align="center"
  gutterBottom
  sx={{
    color: '#000000',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
  }}
>
  Work out your body without stressing out your mind. 
  <br />
  Zero-thought workouts at your fingertips.
</Typography>

      

          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ color: '#000000' }}
          >
            The one app to give you an instant custom workout.
          </Typography>
        </Container>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={8}>
            {programCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    borderRadius: '16px', // Add rounded corners to the Card
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      paddingTop: '56.25%',
                      backgroundSize: 'cover',
                      borderRadius: '16px', // Add rounded corners to the CardMedia
                    }}
                    image={card.image}
                  />
                  <CardContent>
                    <Typography variant="h5" sx={{ color: '#FF5722' }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2">{card.description}</Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center' }}>
                    <Button
                      onClick={() => navigateToProgram(card.route)}
                      size="small"
                      sx={{
                        color: '#FF5722',
                        borderRadius: '16px',
                        typography: {
                          fontFamily: 'Your Font Family',
                          fontWeight: 'bold',
                        },
                      }}
                    >
                      View Program
                    </Button>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
