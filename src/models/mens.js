const express = require("express");
const mongoose  = require("mongoose");

// we are creating schema
const mensSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
        
    },
    rank:{
        type : Number,
        required:true,
        unique:true,
        trim:true
    },
    dob:{
        type:String,
        required:true,
        trim:true
    },
    nat:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    }
});

//we are creating new model(collection)
const MensRanking = new mongoose.model("MenRanking", mensSchema);

module.exports = MensRanking;