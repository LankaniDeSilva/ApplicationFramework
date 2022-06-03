const express = require('express');
const router = express.Router();
const multer = require("multer");
const Presentation = require('../Models/PanelEvaluatePresentation');



/*router.post("/evaluatepresentaionsave", (req,res) =>{

    let newEvaluatePresentaion = new EvaluatePresentaion(req.body);

    newEvaluatePresentaion.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Evaluate Presentaion saved successfully"
        });
    });
}); */

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

/*router.route("/getevaluatepresentaion").get((req,res)=>{

    EvaluatePresentaion.find().then((EvaluatePresentaion)=>{
         res.json(EvaluatePresentaion)
    }).catch((err)=>{
         console.log(err)
    })
})*/


router.route("/getevaluatepresentaion/:id").get(async (req,res) => {
    let userId = req.params.id;
    const user = await Presentaion.findOne(userId)
    .then(() => {
        res.status(200).send({status: "User fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})

router.route("/evaluatepresentaion/update/:id").put(async (req, res)=> {
    let evalId = req.params.id;

    const {groupid, studentid, mark1, mark2, mark3} = req.body;

    const updateevaluatepresentaion = {
        groupid,
        studentid,
        mark1,
        mark2,
        mark3,
        
    }

    const update = await Presentaion.findByIdAndUpdate(evalId, updateevaluatepresentaion).then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Updating data", error: err.message});
    })  
})

router.route("/deletevaluatepresentaion/:id").delete(async (req, res) =>{

    let userId = req.params.id;

    await Presentation.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

module.exports = router;