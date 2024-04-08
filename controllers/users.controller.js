const userService = require('../services/users.service')
const mysql = require("mysql");
const config = require("config");
const Models = require("../models/models");

class UsersController {
    async getUsers(req,res,next) {
        try{
            const users = await userService.getUsers()
            console.log(users)
            return res.status(200).json(users)
        }catch (e){
            next(e)
        }
    }

}

module.exports = new UsersController()