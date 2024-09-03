import mongoose, { Schema } from "mongoose";
import SkillType from "./types/SkillType";
import { v4 as uuID } from "uuid";

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
  key: {
    type: String,
    required: true,
    immutable: false,
    default: () => uuID(),
  },
});

// Typed because 'mongoose.models.Call' has 'any' type
const SkillModel: mongoose.Model<SkillType, {}, {}, {}, SkillType, SkillType> =
  mongoose.models.Skill || mongoose.model("Skill", schema);
export default SkillModel;
