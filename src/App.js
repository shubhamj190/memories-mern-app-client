
import { Container, AppBar, Typography, Grow, grid, Grid } from '@mui/material'
import memories from './images/memories.png'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import styles from './style'
import {useClasses} from 'react'


function App() {
  const classes = useClasses(styles);
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.AppBar} position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Memories
        </Typography>
        <img src={memories} alt="memories" height="90" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="strech" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
