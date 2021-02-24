import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, CircularProgress } from '@material-ui/core';
import Posts from '../Posts/Posts';
import Form from '../Form/Form'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';
import useStyles from "./styles";
import Loader from "react-loader-spinner";

const Home = () => {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
    const posts = useSelector((state) => state.posts);
  
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
      !posts.length ? <CircularProgress /> : (
        <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Loader type="Oval" color="#00BFFF" height={80} width={80} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      )
    )
}

export default Home
