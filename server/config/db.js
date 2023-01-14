const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
