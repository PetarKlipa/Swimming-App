const mongoose = require("mongoose");

const SwimmersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "{VALUE} is not supported",
    },
    required: true,
  },
  dob: {
    type: Date,
    default: new Date(),
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  coach_id: {
    type: String,
  },
});

module.exports = mongoose.model("Swimmer", SwimmersSchema);
