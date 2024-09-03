import mongoose from "mongoose";

interface UserType {
  _id: mongoose.Types.ObjectId;
  name: string;
  date: string;
  email: string;
  password: string;
}

export default UserType;
