const mongoose = require("mongoose");
const autoincrement = require("mongoose-auto-increment");
const validator = require("validator");

const signUpTemplate = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 4,
  },

  email: {
    type: String,
    required: true,
    unique: [true, "Email already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },

  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },

  address: {
    type: String,
    required: true,
  },

  // image: {
  //   data: Buffer,
  //   contentType: String,
  // },
});

autoincrement.initialize(mongoose.connection);
signUpTemplate.plugin(autoincrement.plugin, "signup");

module.exports = mongoose.model("signup", signUpTemplate);
