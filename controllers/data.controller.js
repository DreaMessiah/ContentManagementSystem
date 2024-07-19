const mysql = require("mysql");
const config = require("config");
const Models = require("../models/models")
const DataService = require("../services/data.service");

class DataController {
    async synccrewsv(req,res,next) {
        try{
            const data = await DataService.synccrewsv()
            console.log(data)
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async synccrewbase(req,res,next) {
        try{
            const data = await DataService.synccrewbase()
            console.log(data)
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async synccrewdoclist(req,res,next) {
        try{
            const data = await DataService.synccrewdoclist()
            console.log(data)
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async synccrewmanlist(req,res,next) {
        try{
            const data = await DataService.synccrewmanlist()
            console.log(data)
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async synccrewviewworksv(req,res,next) {
        try{
            const data = await DataService.synccrewviewworksv()
            console.log(data)
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async syncmessagesv(req,res,next) {
        try{
            const data = await DataService.syncmessagesv()
            console.log(data)
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async synctabelsv(req,res,next) {
        try{
            const data = await DataService.synctabelsv()
            console.log(data)
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }

    async syncktudoc(req,res,next) {
        try{
            const data = await DataService.syncktudoc()
            console.log(data)
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async syncktulist(req,res,next) {
        try{
            const data = await DataService.syncktulist()
            console.log(data)
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async synctalbelmehan(req,res,next) {
        try{
            const data = await DataService.synctalbelmehan()
            console.log(data)
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }



}
module.exports = new DataController()