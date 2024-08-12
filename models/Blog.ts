import mongoose, { Schema } from "mongoose";
import BlogType from "./types/ProjectType";

const schema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 1,
  },
  src: {
    type: String,
    required: true,
    minLength: 1,
  },
  tag: {
    type: String,
    required: true,
    minLength: 1,
  },
  type: {
    type: String,
    required: true,
    default: "وبلاگ ها",
    immutable: false,
  },
  description: {
    type: String,
    required: true,
    minLength: 1,
  },
  date: {
    type: Number,
    required: true,
    default: Date.now(),
    immutable: false,
  },
});

// Typed because 'mongoose.models.Call' has 'any' type
const BlogModel: mongoose.Model<BlogType, {}, {}, {}, BlogType, BlogType> =
  mongoose.models.Blog || mongoose.model("Blog", schema);
export default BlogModel;
