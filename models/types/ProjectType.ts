import mongoose from "mongoose";

interface ProjectType {
  _id: mongoose.Types.ObjectId;
  title: string;
  src: string;
  tag: string;
  type: string;
  link : string;
  date: number;
}

export default ProjectType;
