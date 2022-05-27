const express = require('express');
const Mark = require("../Models/AdminMark");
const router = express.Router();
const multer = require("multer");
const files = require("../Models/AdminPDF");
const User = require("../Models/Register");

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