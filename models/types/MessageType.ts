import mongoose from "mongoose";

interface MessageType {
  _id: mongoose.Types.ObjectId;
  text: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  key: string;
}

export default MessageType;
