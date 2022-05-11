const mongoose = require("mongoose");

const Student_supervisor = new mongoose.Schema({
  studentgroup: {
    type: String,
    required: true,
  },

  supervisor: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("StuSuper", Student_supervisor);
