const express = require("express");
const rcosupervisor = require("../Models/RequestCoSupervisor");

const router = express.Router();

router.post("/CoSupervisor/save", (req, res) => {
  let newrcosupervisor = new rcosupervisor(req.body);

  newrcosupervisor.save((err) => {
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
