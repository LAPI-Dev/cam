const express = require("express");
const app = express();
const port = 3002;
const cors = require("cors");
const multer = require("multer");
const { Post } = require("./models");
const path = require("path");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HELLO LAPI");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { file } = req;
    const imageUrl = `/${file.filename}`;

    // Insert into PostgreSQL database using Sequelize
    const post = await Post.create({
      content: "Your content here",
      imageUrl: "http://localhost:3002" + imageUrl,
    });

    res.status(201).json({
      message: "File uploaded successfully and saved to the database.",
      post: post.toJSON(),
    });
  } catch (error) {
    console.error("Error during database insertion:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});
