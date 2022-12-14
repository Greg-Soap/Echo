import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).send(postMessages);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
