const mysql = require("mysql");
const config = require("config");
const Models = require("../models/models")
const WeldingsService = require("../services/weldings.service");

class WeldingsController {
//*****************************************************//
    async loadtabelsv(req,res,next) {
        try{
            const data = await WeldingsService.loadtabelsv()
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async synctabelsv(req,res,next) {
        try{
            const data = await WeldingsService.synctabelsv()
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
//*****************************************************//
    async loadviewsworksv(req,res,next) {
        try{
            const data = await WeldingsService.loadviewsworksv()
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async syncviewsworksv(req,res,next) {
        try{
            const data = await WeldingsService.syncviewsworksv()
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
//*****************************************************//
    async loadymsvarka(req,res,next) {
        try{
            const data = await WeldingsService.loadymsvarka()
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async syncymsvarka(req,res,next) {
        try{
            const data = await WeldingsService.syncymsvarka()
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
//*****************************************************//
    async loadzasv(req,res,next) {
        try{
            const data = await WeldingsService.loadzasv()
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async synczasv(req,res,next) {
        try{
            const data = await WeldingsService.synczasv()
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
//*****************************************************//
    async loadtablezayavka(req,res,next) {
        try{
            const data = await WeldingsService.loadtablezayavka()
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async synctablezayavka(req,res,next) {
        try{
            const data = await WeldingsService.synctablezayavka()
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
//*****************************************************//
//*****************************************************//
//*****************************************************//
//*****************************************************//
    async loadcrewsv(req,res,next) {
        try{
            const data = await WeldingsService.loadcrewsv()
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
    async synccrewsv(req,res,next) {
        try{
            const data = await WeldingsService.synccrewsv()
            return res.status(200).json(data)
        }catch (e){
            next(e)
        }
    }
}
module.exports = new WeldingsController()