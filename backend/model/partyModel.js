const mongoose = require("mongoose");

const partySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add text value"],
  },

  startingDate: {
    type: String,
    required: [true, "When was it started"],
  },

  leader: {
    type: String,
    required: [true, "Who is president"],
  },

  members: {
    type: String,
    required: [true, "How many memebers"],
  },

  // timestamps: [true],
  //   description: {
  //     type: String,
  //     required: [true, "Add text value"],
  //   },
  //   barcode: {
  //     type: Number,
  //   },
});

module.exports = mongoose.model("Party", partySchema);
