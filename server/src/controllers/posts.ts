import PostMessage from "../models/postMessage";
import { Request, Response } from "express";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).send(postMessages);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
export const createPost = async (req: Request, res: Response) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await PostMessage.findByIdAndDelete(id);
    res.status(200).json({ message: "Post successfully deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};
