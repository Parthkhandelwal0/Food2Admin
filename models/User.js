// models/User.js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  photo: { type: String }, // An array to store multiple image URLs
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: { type: String },
  phone: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
