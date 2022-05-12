const express = require("express");
const router = express.Router();
const multer = require("multer");
const thesis = require("../Models/Thesis");

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, "../frontend/public/uploads/Studentthesis/");
    },
    filename: (req, file, callback)=> {
        callback(null, file.originalname);
    },
});

const upload = multer({storage: storage});

router.post("/thesis/save", upload.single("file"), (req, res) => {
    const file = new thesis({
        groupid: req.body.groupid,
        files: req.file.originalname
    });

    file
     .save()
     .then(()=> res.json("success"))
     .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;