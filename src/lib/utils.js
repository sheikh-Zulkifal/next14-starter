import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    const mongoURI = process.env.MONGO;
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database Connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

// Assuming you have access to the environment variables

// console.log(mongoURI)

// Call connectToDb function with the MongoDB connection string
connectToDb();
