const express = require("express");
const router = express.Router();

const {
  getAllPosts,
  getPostByIndex,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postsController");

router.get("/", getAllPosts);
router.get("/:index", getPostByIndex);
router.post("/", createPost);
router.put("/:index", updatePost);
router.delete("/:index", deletePost);

module.exports = router;
