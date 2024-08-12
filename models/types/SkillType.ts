import mongoose from "mongoose";

interface SkillType {
  _id: mongoose.Types.ObjectId;
  tag: string;
  scr: string;
  rate: number;
}

export default SkillType;
