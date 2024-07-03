const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("DB is working");
};

module.exports = connection;
