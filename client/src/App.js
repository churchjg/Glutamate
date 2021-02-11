import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';

import memories from './images/memories.png'
import touch from './images/touch.jpg'



const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();


    return (
        <Container maxWidth="lg">
          <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={touch} alt="icon" height="60" />
          </AppBar>
          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
      );
    };
    
    export default App;