const express = require("express");
const rsupervisor = require("../Models/RequestSupervisor");

const router = express.Router();

router.post("/Supervisor/save", (req, res) => {
  let newrsupervisor = new rsupervisor(req.body);

  newrsupervisor.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Request saved successfully",
    });
  });
});

module.exports = router;
