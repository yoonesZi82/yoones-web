import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(
        "mongodb://yooneswe_root:81821010gH@localhost:27017/yooneswe_rezome"
      );
      console.log("Connect To DB Successfully :))");
    }
  } catch (err) {
    console.log("DB Connection Error Has --> ", err);
  }
};

export default connectToDB;
