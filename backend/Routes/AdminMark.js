const express = require('express');
const Mark = require("../Models/AdminMark");
const router = express.Router();
const multer = require("multer");



/*router.post("/marksave", (req,res) =>{

    let newMark = new Mark(req.body);

    newMark.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Mark saved successfully"
        });
    });
}); */

router.post("/marksave", (req, res) => {
    const mark = new Mark({
        groupid: req.body.id,
        marka: req.body.markone,
        markb: req.body.marktwo,
        markc: req.body.markthree,
        markd: req.body.markfour,
       
    });

    mark
     .save()
     .then(()=> res.json("success"))
     .catch((err) => res.status(400).json(`Error: ${err}`));
});

//get 

/*router.get('/getmark', (req,res) =>{
    Mark.find().exec((err,Mark)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Mark
        });
    });
});  */

router.route("/getmark").get((req,res)=>{

    Mark.find().then((Mark)=>{
         res.json(Mark)
    }).catch((err)=>{
         console.log(err)
    })
})

router.route("/deletemark/:id").delete(async (req, res) =>{

    let userId = req.params.id;

    await Mark.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

module.exports = router;