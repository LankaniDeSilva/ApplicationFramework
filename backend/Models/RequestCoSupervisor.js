const mongoose = require("mongoose");

const Student_cosupervisor = new mongoose.Schema({
  studentgroup: {
    type: String,
    required: true,
  },

  supervisor: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("RequestCoSupervisor", Student_cosupervisor);
