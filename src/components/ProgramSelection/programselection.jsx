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
  palette: {
    primary: {
      main: '#000000', // Change this to your desired primary color
    },
  },
});

const programCards = [
  {
    title: '3-Day Program',
    description: 'A three-day workout program.',
    image: 'https://www.example.com/3dayprogram.jpg', // Replace with your image URL
    route: '/threedayprogram',
  },
  {
    title: '4-Day Program',
    description: 'A four-day workout program.',
    image: 'https://www.example.com/4dayprogram.jpg', // Replace with your image URL
    route: '/fourdayprogram',
  },
  {
    title: '5-Day Program',
    description: 'A five-day workout program.',
    image: 'https://www.example.com/5dayprogram.jpg', // Replace with your image URL
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
            sx={{ color: '#000000' }}
          >
            Choose Your Workout Program
          </Typography>
        </Container>
        <Container sx={{ py: 4 }} maxWidth="lg">
          <Grid container spacing={4}>
            {programCards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{ paddingTop: '56.25%', backgroundSize: 'cover' }}
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
                      sx={{ color: '#FF5722' }}
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
