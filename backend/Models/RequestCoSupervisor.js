const mongoose = require("mongoose");

const Student_cosupervisor = new mongoose.Schema({
  studentgroup: {
    type: String,
    required: true,
    trim: true,
  },

  supervisor: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("RequestCoSupervisor", Student_cosupervisor);
