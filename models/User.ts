import mongoose, { Schema } from "mongoose";
import UserType from "./types/UserType";

const schema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
  },
  email: {
    type: String,
    required: true,
    pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
  },
  password: {
    type: String,
    required: true,
    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
  },
  date: {
    type: Number,
    required: true,
    default: Date.now(),
    immutable: false,
  },
});

// Typed because 'mongoose.models.Call' has 'any' UserType
const UserModel: mongoose.Model<UserType, {}, {}, {}, UserType, UserType> =
  mongoose.models.User || mongoose.model("User", schema);
export default UserModel;
