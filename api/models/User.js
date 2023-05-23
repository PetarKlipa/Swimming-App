const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phone: {
        type: String,
        required: false,
      },
      password: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
      gender:{
        type: String,
        enum:{
            values: ['male', 'female'],
            message: '{VALUE} is not supported'
        },
        required: false,
      },
      dob:{
        type : Date,
        default: new Date(),
        required: true,
      },
      name:{
        type: String,
        required: true,
      },
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema)