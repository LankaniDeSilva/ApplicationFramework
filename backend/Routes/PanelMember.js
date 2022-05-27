const express = require('express');
const Group = require("../Models/GroupRegister");
const Panel = require("../Models/PanelMember");
const router = express.Router();
//save posts

router.post('/savepanel',(req,res)=>{
    let newPost = new Panel(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved Succefully"
        });
    });
});
//get a specipic post
router.get("/getgroupspanel/:id",(req,res) =>{
    let postId = req.params.id;

    Group.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//get 

router.get('/getpanel', (req,res) =>{
    Panel.find().exec((err,Panel)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:Panel
        });
    });
}); 

router.route("/deletepanel/:id").delete(async (req, res) =>{

    let userId = req.params.id;

    await Panel.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})


module.exports = router;