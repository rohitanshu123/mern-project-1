const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : number,
        required : true 
    },
    username : {
        type : String,
        required : true
    },
    department : {
        type : String
    }
})

const userModel = mongoose.model("user", UserSchema);

module.exports= UserModel;