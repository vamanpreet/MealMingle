import mongoose from "mongoose";

const mongoURL = process.env.mongoURL;

export const connectDB = async () => {
    await mongoose.connect(mongoURL)
    .then(() => console.log("Successfully connected to the database"));
}
