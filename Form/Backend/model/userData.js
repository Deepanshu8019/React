const mongoose = require("mongoose");
const UserData = new mongoose.Schema(
{
    Username:{
        type:String,
        required:true,
        maxLength:50,
    },
    Password:{
        type:String,
        required:true,
        maxLength:50,
    }
});
module.exports = mongoose.model("UserData",UserData);