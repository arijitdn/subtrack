import mongoose from "mongoose";
import { MONGODB_URI } from "../config/env.js";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI in the environment variable.");
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI!);
    console.log("Connected to Database.");
  } catch (error) {
    console.log("Error connecting to database:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
