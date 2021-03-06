const express = require("express");
const router = express.Router();
const multer = require("multer");
const files = require("../Models/AdminPDF");

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, "../frontend/public/uploads/");
    },
    filename: (req, file, callback)=> {
        callback(null, file.originalname);
    },
});

const upload = multer({storage: storage});

router.post("/save", upload.single("file"), (req, res) => {
    const file = new files({
        groupid: req.body.groupid,
        select: req.body.select,
        comment: req.body.comment,
        files: req.file.originalname
    });

    file
     .save()
     .then(()=> res.json("success"))
     .catch((err) => res.status(400).json(`Error: ${err}`));
});


//get posts

router.get('/getpdf', (req,res) =>{
    files.find().exec((err,files)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:files
        });
    });
});

//download file
router.post("/downloadpdf",(req,res)=>{
    let fill = req.body.pdf;
    res.download(`../frontend/public/uploads/${fill}`);
});

//delete

router.delete('/pdf/delete/:id',(req,res)=>{
    files.findByIdAndRemove(req.params.id).exec((err,deletedpdf) =>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete Successfull",deletedpdf
        });
    });
});

router.route("/student/pdf").get((req,res)=>{

    files.find().then((file)=>{
         res.json(file)
    }).catch((err)=>{
         console.log(err)
    })
})



module.exports = router;