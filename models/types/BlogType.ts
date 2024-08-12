import mongoose from "mongoose";

interface BlogType {
  _id: mongoose.Types.ObjectId;
  title: string;
  src: string;
  date: string;
  tag: string;
  type: string;
  description: string;
}

export default BlogType;
