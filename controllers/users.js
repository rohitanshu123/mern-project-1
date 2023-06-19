const userModel = require("../models/users");

const UserModel = require("../models/users");

const getUser = async(req, res)=>{
    const myData = await UserModel.find();
}

const postUser = async (req, res)=> {
    const user = req.body;

    const newUser = new userModel(user);

    await newUser.save();

    req.jason(user);

}

const getHomePage= async (req, res)=>{
    console.log("welcome to homepage")
}

module.exports = (getUser, postUser, getHomePage);