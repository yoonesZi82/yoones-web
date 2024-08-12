import mongoose, { Schema } from "mongoose";
import SkillType from "./types/ProjectType";

const schema = new Schema({
  tag: {
    type: String,
    required: true,
    minLength: 1,
  },
  src: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  date: {
    type: Number,
    required: true,
    default: Date.now(),
    immutable: false,
  },
});

// Typed because 'mongoose.models.Call' has 'any' type
const SkillModel: mongoose.Model<SkillType, {}, {}, {}, SkillType, SkillType> =
  mongoose.models.Skill || mongoose.model("Skill", schema);
export default SkillModel;
