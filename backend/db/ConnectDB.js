import mongoose from "mongoose";
export const connectDB = async () => {
  try {
    console.log("mogourl is: ", process.env.MONGO_URI)
    const conn = await mongoose
      .connect(process.env.MONGO_URI)
      .then(console.log("mongodb is connected"));
  } catch (error) {
    console.log("error connecting :", error.message);
  }
};
