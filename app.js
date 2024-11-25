const express = require("express");
const app = express();
const port = 3000;

// Middlewares
const notFound = require("./middlewares/notFound");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.static("public"));
app.use(express.json());

const postsRouter = require("./routers/posts");
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Server del mio blog" });
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
