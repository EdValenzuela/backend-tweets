const Users = require("../models/users");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.addUser = async(req, res, next)=> {

    const user = new Users(req.body);

    try {
        await user.save();
        res.json({message: 'user add succesfull!!!'});
    } catch (e) {
        console.log(e);
        next();
    }
}

exports.getAllUsers = async(req, res, next)=> {
    try {
        const users = await Users.find({});
        res.json(users);
    } catch (e) {
        console.log(e);
        next();
    }
}