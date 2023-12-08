const { Post } = require("../models/index");

class Controller {
  static async addPost(req, res) {
    try {
      const { content, imageUrl } = req.body;
      const added = await Post.create({
        content,
        imageUrl,
      });
      res.status(201).json(added);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Controller;
