const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI, {
      const conn = await mongoose.connect(
        "mongodb+srv://ahmed5135:ahmed5135@eldesokyproshop.vazoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`Connected to mongoDB... host: ${conn.connection.host}`.blue.underline.bold);
  } catch (error) {
    console.error(`Error; ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
