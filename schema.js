const mongoose = require("mongoose");

// Comment Schema
const commentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  commentedAt: { type: Date, default: Date.now }
});

// Blog Post Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, minlength: 5 },
  content: { type: String, required: true, minlength: 50 },
  author: { type: String, required: true },
  tags: [{ type: String }],
  category: { type: String, default: "General" },
  likes: [{ type: String }], // Stores usernames who liked the post
  comments: [commentSchema], // Embedded comments
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date }
});

// Exporting the Model
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;