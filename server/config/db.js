import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vamanpreet2110:vamanpreet60@cluster0.652l5.mongodb.net/MealMingle?')
    .then(() => console.log("Successfully connected to the database"));
}
