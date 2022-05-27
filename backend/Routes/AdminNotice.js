const express = require('express');
const { findById, findByIdAndUpdate } = require('../Models/AdminNotice');
const Notices = require('../Models/AdminNotice');
const multer = require("multer");


const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, "../frontend/public/uploads/");
    },
    filename: (req, file, callback)=> {
        callback(null, file.originalname);
    },
});

const upload = multer({storage: storage});

router.post("/save/noticepdf", upload.single("file"), (req, res) => {
    const file = new Notices({
        topic: req.body.topic,
        date: req.body.date,
        description: req.body.description,
        pdf: req.file.originalname
    });

    file
     .save()
     .then(()=> res.json("success"))
     .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.post('/Notice/save', (req,res) =>{

    let newNotice = new Notices(req.body);

    newNotice.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Notice saved successfully"
        });
    });
});

router.route("/notice").get((req,res)=>{

    Notices.find().then((notice)=>{
         res.json(notice)
    }).catch((err)=>{
         console.log(err)
    })
})
//delete

router.route("/deletenotice/:id").delete(async (req, res) =>{

    let userId = req.params.id;


    await Notices.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.get("/notice/:topic", (req,res)=>{
    let topic = req.params.topic;

    Notices.find({topic: topic}).exec((err,Notices) =>{
      if(err){
        return res.status(400).json({
          error:err
      });
    }
    return res.status(200).json({
      success:true,
      existingNotices:Notices
    });
  });
});

module.exports = router;