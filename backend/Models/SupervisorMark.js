const mongoose = require("mongoose");
const { Schema } = mongoose;

const SupervisorMarksSchema = new Schema({
  fName: String,
  subject: String,
  groupId: String,
  topic: String,
  marks: Number,
  sName: String,
  feedback: String,
});



module.exports = SupervisorMarks = mongoose.model("SupervisorMarks", SupervisorMarksSchema);
