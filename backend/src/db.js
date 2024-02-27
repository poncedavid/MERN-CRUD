import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/merndb");
    console.log("DB conectada :) <3");
  } catch (error) {
    console.error("Error: ", error);
  }
};
