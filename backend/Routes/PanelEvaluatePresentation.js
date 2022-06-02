const express = require('express');
const router = express.Router();
const multer = require("multer");
const Presentation = require('../Models/PanelEvaluatePresentation');


router.post("/evaluatepresentaionsave", (req, res) => {
    const presentation = new Presentation({
        groupid: req.body.groupid,
        studentid: req.body.studentid,
        mark1: req.body.mark1,
        mark2: req.body.mark2,
        mark3: req.body.mark3,
        
       
    });

    presentation
     .save()
     .then(()=> res.json("success"))
     .catch((err) => res.status(400).json(`Error: ${err}`));
});

//get 

router.get('/getevaluatepresentaion', (req,res) =>{
    Presentation.find().exec((err,Presentaion)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Presentaion
        });
    });
}); 


router.route("/getevaluatepresentaion/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await Presentation.findOne(userId)
    .then(() => {
        res.status(200).send({status: "User fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})



router.get("/allPreMark/:id",(req,res) =>{
    let postId = req.params.id;

    Presentation.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});
router.put('/evaluatepresentaionupdate/:id',(req,res)=>{
    Presentation.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Update Successfully"
            });
        }
    );
});

router.route("/deletevaluatepresentation/:id").delete(async (req, res) =>{

    let userId = req.params.id;

    await Presentation.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

module.exports = router;