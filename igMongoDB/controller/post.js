import Post from "../model/Post.js";

export const getAllPosts = async (req, res) => {
   try {
    const posts = await Post.find({});
    res.status(200).send({
      success: true,
      data: posts,
    });
   } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
   }
};

export const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const post = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findByIdAndUpdate({ _id: id }, res.body);
    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const removePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
