const mongoose = require("mongoose");

const CompetitionSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    default: new Date(),
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    enum: {
      values: ["freestyle", " breaststroke", "backstroke", "butterfly"],
      message: "{VALUE} is not supported",
    },
    required: true,
  },
});

module.exports = mongoose.model("Competition", CompetitionSchema);
