import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(
        process.env.MONGO_URL || "mongodb://localhost:27017/yoones-web"
      );
      console.log("Connect To DB Successfully :))");
    }
  } catch (err) {
    console.log("DB Connection Error Has --> ", err);
  }
};

export default connectToDB;
