import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  paragraph: {
    marginBottom: '20px',
    textAlign: 'center',
    fontSize: '24px', // Increased font size
  },
};

function AboutPage() {
  return (
    <Container maxWidth="md" style={styles.container}>
      <Typography variant="h4" gutterBottom>
        Welcome to Fit Pro
      </Typography>
      <Typography style={styles.paragraph}>
        Discover a stress-free way to prioritize your well-being with our user-friendly fitness app. We eliminate the complexities of planning workouts, so you can focus on invigorating exercises without breaking a sweat over the details.
      </Typography>
      <Typography style={styles.paragraph}>
        Whether you're a fitness enthusiast or just getting started, we've got you covered. Enjoy instant access to custom workouts tailored to your fitness goals. Say goodbye to guesswork and hello to an effective, seamless fitness experience.
      </Typography>
      <Typography style={styles.paragraph}>
        Download our app today and embark on a journey to a healthier, happier you. Your well-being is just one click away!
      </Typography>
    </Container>
  );
}

export default AboutPage;
