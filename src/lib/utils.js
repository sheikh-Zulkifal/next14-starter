import mongoose from "mongoose";

export const connectToDb = (mongoURI) => {
  mongoose
    .connect(
      mongoURI,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("Database Connected"))
    .catch((err) => console.error("Error connecting to database:", err));
};

// Assuming you have access to the environment variables
const mongoURI = process.env.MONGO;

// Call connectToDb function with the MongoDB connection string
connectToDb(mongoURI);
