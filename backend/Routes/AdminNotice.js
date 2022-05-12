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

//save Notice

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

//get posts

/*router.get('/notice', (req,res) =>{
    Notices.find().exec((err,Notices)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Notices
        });
    });
}); */

router.route("/notice").get((req,res)=>{

    Notices.find().then((notice)=>{
         res.json(notice)
    }).catch((err)=>{
         console.log(err)
    })
})
//delete

router.delete('/notice/delete/:id',(req,res)=>{
    Notices.findByIdAndRemove(req.params.id).exec((err,deletedNotice) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete Successfull",deletedNotice
        });
    });
});


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