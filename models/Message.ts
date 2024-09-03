import mongoose, { Schema } from "mongoose";
import MessageType from "./types/MessageType";
import { v4 as uuID } from "uuid";

const schema = new Schema({
  text: {
    type: String,
    required: true,
    minLength: 1,
  },
  name: {
    type: String,
    required: true,
    minLength: 1,
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
    pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
  },
  phone: {
    type: String,
    required: true,
    minLength: 1,
    pattern: /^(\+98|0)?9\d{9}$/g,
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
const MessageModel: mongoose.Model<
  MessageType,
  {},
  {},
  {},
  MessageType,
  MessageType
> = mongoose.models.Message || mongoose.model("Message", schema);
export default MessageModel;
