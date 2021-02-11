import express from 'express';

import {getPosts, createPost} from '../controllers/posts.js'

const router= express.Router();

router.get('/', getPosts ); //execute a function from getPosts
router.post('/', createPost );




export default router;