const express = require('express');
const Mark = require("../Models/AdminMark");
const router = express.Router();
const multer = require("multer");
const files = require("../Models/AdminPDF");



router.post("/savemark", (req,res) =>{

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
}); 
/*
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
*/
//get 

router.get('/getmark', (req,res) =>{
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
});

//get a specipic post
router.get("/getmark/:id",(req,res) =>{
    let postId = req.params.id;

    files.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//get a specipic post
router.get("/marks/:id",(req,res) =>{
    let postId = req.params.id;

    Mark.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//update post
router.put('/markupdate/:id',(req,res)=>{
    Mark.findByIdAndUpdate(
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

/*router.route("/getmark").get((req,res)=>{

    Mark.find().then((Mark)=>{
         res.json(Mark)
    }).catch((err)=>{
         console.log(err)
    })
})*/


/*router.route("/getmark/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await Mark.findOne(userId)
    .then(() => {
        res.status(200).send({status: "User fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})*/

/*router.route("/mark/update/:id").put(async (req, res)=> {
    let userId = req.params.id;

    const {groupid, marka, markb, markc, markd} = req.body;

    const updatemark = {
        groupid,
        marka,
        markb,
        markc,
        markd
    }

    const update = await Mark.findByIdAndUpdate(userId, updatemark).then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Updating data", error: err.message});
    })  
})
*/
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