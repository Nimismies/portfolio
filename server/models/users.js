const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({


  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },

})

const user = mongoose.model.Users || mongoose.model("Users", userSchema);

module.exports = user;

