//all handlers for routes, HQ for logic
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find(); //have to add await because it is asynchronous

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};


// 200, 201, 404, 409 are HTTP error codes

export const createPost = async (req, res) => {
    const post = req.body; 
    const newPost = new PostMessage(post);

    try {
       await newPost.save()
       res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message})
    }
}