let posts = [
  {
    titolo: "Il mio primo post",
    contenuto: "Questo è il contenuto del primo post",
    immagine: "/images/ciambellone.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "Il mio secondo post",
    contenuto: "Questo è il contenuto del secondo post",
    immagine: "/images/cracker_barbabietola.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "Il mio terzo post",
    contenuto: "Questo è il contenuto del terzo post",
    immagine: "/images/pane_fritto_dolce.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "Il mio quarto post",
    contenuto: "Questo è il contenuto del quarto post",
    immagine: "/images/pasta_barbabietola.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    titolo: "Il mio quinto post",
    contenuto: "Questo è il contenuto del quinto post",
    immagine: "/images/torta_paesana.jpeg",
    tags: ["tag1", "tag2", "tag3"],
  },
];

const getAllPosts = (req, res) => {
  res.json({ message: "Lista dei post", posts, postCount: posts.length });
};

// INDEX
const getPostByIndex = (req, res) => {
  const index = parseInt(req.params.index);
  if (index < 0 || index >= posts.length) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  res.json({ message: `Dettagli del post ${index}`, post: posts[index] });
};

// CREATE
const createPost = (req, res) => {
  const { titolo, contenuto, immagine, tags } = req.body;
  if (!titolo || !contenuto || !immagine || !Array.isArray(tags)) {
    return res.status(400).json({ error: "Dati non validi" });
  }
  const newPost = { titolo, contenuto, immagine, tags };
  posts.push(newPost);
  res.json({ message: "Post creato", post: newPost });
};

// UPDATE
const updatePost = (req, res) => {
  const index = parseInt(req.params.index);
  if (index < 0 || index >= posts.length) {
    return res.status(404).json({ error: "Post non trovato" });
  }
  const { titolo, contenuto, immagine, tags } = req.body;
  if (!titolo || !contenuto || !immagine || !Array.isArray(tags)) {
    return res.status(400).json({ error: "Dati non validi" });
  }
  const updatedPost = { titolo, contenuto, immagine, tags };
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
  res.json({ message: `Cancellazione del post ${index}`, post: deletedPost });
};

module.exports = {
  getAllPosts,
  getPostByIndex,
  createPost,
  updatePost,
  deletePost,
};
