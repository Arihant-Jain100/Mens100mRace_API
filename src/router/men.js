const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");


router.post("/mens", async (req,res)=>{
    try{
        const addingNew = new MensRanking(req.body);
        // console.log(req.body);
        const mensData = await addingNew.save();

        res.status(201).send(mensData);
        console.log(mensData);
        
    }catch(e){
        res.status(400).send(e);
    }
});

// reading complete data
router.get("/mens", async (req,res)=>{
    try{
        const getMens = await MensRanking.find({}).sort({"rank":1});
        res.status(201).send(getMens);
    }catch(err){
        res.status(404).send(err);
    }
})

// get data by rank

router.get("/mens/:rank", async (req,res)=>{
    try{
        const _rank = req.params.rank;
        const getMens = await MensRanking.find({rank:_rank});

        if(! getMens){
            res.status(404).send();
        }else{
            res.status(201).send(getMens);
        }

    }catch(err){
        res.status(500).send(err);
    }
});

//update using rank
router.patch("/mens/:rank", async(req,res)=>{
    try{
        const _rank = req.params.rank;
        const updateData = await MensRanking.findOneAndUpdate({rank:_rank},req.body,{new:true});
        if(!updateData){
            res.status(404).send("no such rank found");
        }else{
        res.send(updateData);
        }

    }catch(err){
        res.status(500).send(err);
    }
})

//delete data using id
router.delete("/mens/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const deleteMen = await MensRanking.findByIdAndDelete(id);
        if(! id){
            res.status(404).send();
        }

        res.send(deleteMen);

    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;