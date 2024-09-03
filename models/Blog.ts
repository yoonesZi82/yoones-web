import mongoose, { Schema } from "mongoose";
import BlogType from "./types/ProjectType";
import { randomUUID } from "crypto";
import { v4 as uuID } from "uuid";

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
    default: "blogs",
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
  key: {
    type: String,
    required: true,
    immutable: false,
    default: () => uuID(),
  },
});

// Typed because 'mongoose.models.Call' has 'any' type
const BlogModel: mongoose.Model<BlogType, {}, {}, {}, BlogType, BlogType> =
  mongoose.models.Blog || mongoose.model("Blog", schema);
export default BlogModel;
