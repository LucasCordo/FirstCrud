const mongoose = require('mongoose');

//esqueleto das nossas entidades
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLenght: 7,
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;