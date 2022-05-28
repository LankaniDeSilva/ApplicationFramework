const express = require("express");
const Panel = require("../Models/Panel");

const router = express.Router();

//add

router.post("/panel/save", (req, res) => {
  const panel = new Panel({
    idNumber: req.body.idNumber,
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
   
});

panel
 .save()
 .then(()=> res.json("Panel Member Added"))
 .catch((err) => res.status(400).json(`Error: ${err}`));
});

//get

router.get("/panel", (req, res)=>{
    Panel.find().exec((err,Panel) =>{
      if(err){
        return res.status(400).json({
          error:err
      });
    }
    return res.status(200).json({
      success:true,
      existingPanles:Panel
    });
  });
});

router.route("panel/get/:id").get(async (req,res) => {
    let panelId = req.params.id;
    const user = await Panel.findOne(panelId)
    .then(() => {
        res.status(200).send({status: "User fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })
})


//delete

router.delete('/panel/delete/:id',(req,res)=>{
  Panel.findByIdAndRemove(req.params.id).exec((err,deletedPanel) =>{

      if(err) return res.status(400).json({
          message:"Delete unsuccessful",err
      });
      return res.json({
          message:"Delete Successfull",deletedPanel
      });
  });
});

//update

router.route("/panel/update/:id").put(async (req, res)=> {
  let panelId = req.params.id;

  const {idNumber, name, email, phoneNumber, password} = req.body;

  const updatepanel = {
    idNumber,
    name,
    email,
    phoneNumber,
    password
  }

  const update = await Panel.findByIdAndUpdate(panelId, updatepanel).then(()=>{
      res.status(200).send({status: "Panel Member Updated"})
  }).catch((err)=>{
      console.log(err);
      res.status(500).send({status: "Error with Updating data", error: err.message});
  })  
})



module.exports = router;
