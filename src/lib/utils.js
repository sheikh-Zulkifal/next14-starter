import mongoose from "mongoose";
export const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://sheikhzulkifal05:zulkifaL1@cluster0.jqw3t.mongodb.net/",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(console.log("Database Connected"))
    .catch((err) => console.log(err));
};
