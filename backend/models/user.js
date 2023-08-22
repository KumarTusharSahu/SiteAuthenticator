const mongoose = require('mongoose');

const path = require('path');

const userSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true
     },
    gender:{
        type: String,
        enum: ["m", "f","o"]
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    Phone:{
        type:String,
        //required:true
    } ,
    avatar: {
        type: String
    },
    age:{
        type:String,
    },
    education:{
        type:String,
    },
    exp:{
        type:String,
    },
    link:{
        type:String,
    },
    score:{
        type:String,
    },
    website:{
        type:Array,
       "default":[]
    },

}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;