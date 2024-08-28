import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const mongoURL = process.env.mongoURL;

export const connectDB = async () => {
    if (!mongoURL) {
        console.error("MongoDB URI is not defined");
        process.exit(1); // Exit the process with an error code
    }

    try {
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Successfully connected to the database");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1); // Exit the process with an error code
    }
};
