const posts = require("../data/postsData");

const getAllPosts = (req, res) => {
  const { tag } = req.query;

  if (tag) {
    const filteredPosts = posts.filter((post) => post.tags.includes(tag));
    return res.json({
      message: `Lista dei post con il tag ${tag}`,
      posts: filteredPosts,
      postCount: filteredPosts.length,
    });
  }

  res.json({
    message: "Lista dei post",
    posts,
    postCount: posts.length,
  });
};

// INDEX (Show)
const getPostByIndex = (req, res) => {
  const index = parseInt(req.params.index);

  if (index < 0 || index >= posts.length) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  res.json({ message: `Dettagli del post ${index}`, post: posts[index] });
};

// CREATE
const createPost = (req, res) => {
  console.log("Dati ricevuti:", req.body);

  const { title, content, image, category } = req.body;
  if (!title || !content || !image || !Array.isArray(category)) {
    return res.status(400).json({ error: "Dati non validi" });
  }

  const newPost = { title, content, image, category };
  posts.push(newPost);
  res.json({ message: "Post creato", post: newPost });
};

// UPDATE
const updatePost = (req, res) => {
  const index = parseInt(req.params.index);

  if (index < 0 || index >= posts.length) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  const { title, content, image, category } = req.body;
  if (!title || !content || !image || !Array.isArray(category)) {
    return res.status(400).json({ error: "Dati non validi" });
  }

  const updatedPost = { title, content, image, category };
  posts[index] = updatedPost;
  res.json({ message: `Post ${index} aggiornato`, post: updatedPost });
};

// DELETE
const deletePost = (req, res) => {
  const index = parseInt(req.params.index);

  if (index < 0 || index >= posts.length) {
    return res.status(404).json({ error: "Post non trovato" });
  }

  const deletedPost = posts.splice(index, 1);
  console.log("Post aggiornato:", posts);
  res.status(204).send();
};

module.exports = {
  getAllPosts,
  getPostByIndex,
  createPost,
  updatePost,
  deletePost,
};
