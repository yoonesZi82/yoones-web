import mongoose, { Schema } from "mongoose";
import ProjectType from "./types/ProjectType";

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
    default: "پروژه ها",
    immutable: false,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
    default: Date.now(),
    immutable: false,
  },
});

// Typed because 'mongoose.models.Call' has 'any' type
const ProjectModel: mongoose.Model<
  ProjectType,
  {},
  {},
  {},
  ProjectType,
  ProjectType
> = mongoose.models.Project || mongoose.model("Project", schema);
export default ProjectModel;
