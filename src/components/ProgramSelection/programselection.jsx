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
    history.push('/threedayprogram');
  };

  const fiveDayProgram = () => {
    history.push('/threedayprogram');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
     
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Select a program 
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Select a program 
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
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                  
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick = {threeDayProgram} size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     
      {/* End footer */}
    </ThemeProvider>
  );
}
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import './ProgramSelection.css';

// function ProgramSelection() {

//   const threeDayProgram = () => {
//     // Use the history object to navigate to another page
//     history.push('/threedayprogram');
//   };

//   const fourDayProgram = () => {
//     // Use the history object to navigate to another page
//     history.push('/fourdayprogram');
//   };

//   const fiveDayProgram = () => {
//     // Use the history object to navigate to another page
//     history.push('/fivedayprogram');
//   };

//   // this component doesn't do much to start, just renders some user reducer info to the DOM
//   const user = useSelector((store) => store.user);
//   const history = useHistory(); // Initializes the useHistory hook
//   return (
    
//     <div className="container">
//       <h1>Welcome, {user.username}!</h1>
//       <center>
//       <h1>Select Your Program</h1>
//       </center>
      
//       <center>
//         <button
//           type="button"
//           className="threeday"
//           onClick={threeDayProgram}
//         >
//           3-Day Program
//         </button>
//         </center>
//         <center>
//         <button
//           type="button"
//           className="fourday"
//           onClick={fourDayProgram}
//         >
//           4-Day Program
//           </button>
//           </center>
//           <center>
//         <button
//           type="button"
//           className="fiveday"
//           onClick={fiveDayProgram}
//         >
//           5-Day Program
//         </button>
//         </center>  
//           </div>
//   );
// }
// // this allows us to use <App /> in index.js
// export default ProgramSelection;