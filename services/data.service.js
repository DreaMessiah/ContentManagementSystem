const {CrewSv, CrewBase, CrewDoclist, CrewManlist, ViewsWorkSv,MessageSv, TabelSv, KtuDoc, KtuList, Objects, User,
    TableTabel
} = require('../models/models')
const config = require("config");

const {Sequelize, DataTypes, where} = require("sequelize");

class DataService {
    async synccrewsv() {
        const mydays = new Sequelize( config.get('database'),config.get('user'), config.get('password'), {
            host: config.get('host'),
            dialect: 'mysql'
        })
        const data = await mydays.query('SELECT * FROM crew_sv', { type: mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => await CrewSv.create(item))
                return results
            })
            .catch(error => {
                return error
            })
        return data
    }
    async synccrewbase() {
        const mydays = new Sequelize( config.get('database'),config.get('user'), config.get('password'), {
            host: config.get('host'),
            dialect: 'mysql'
        })
        const data = await mydays.query('SELECT * FROM crew_base', { type: mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => await CrewBase.create(item))
                return results
            })
            .catch(error => {
                return error
            })
        return data
    }
    async synccrewdoclist() {
        const mydays = new Sequelize( config.get('database'),config.get('user'), config.get('password'), {
            host: config.get('host'),
            dialect: 'mysql'
        })
        const data = await mydays.query('SELECT * FROM crew_doclist', { type: mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => await CrewDoclist.create(item))
                return results
            })
            .catch(error => {
                return error
            })
        return data
    }
    async synccrewmanlist() {
        const mydays = new Sequelize( config.get('database'),config.get('user'), config.get('password'), {
            host: config.get('host'),
            dialect: 'mysql'
        })
        const data = await mydays.query('SELECT * FROM crew_manlist', { type: mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => await CrewManlist.create(item))
                return results
            })
            .catch(error => {
                return error
            })
        return data
    }
    async synccrewviewworksv() {
        const mydays = new Sequelize( config.get('database'),config.get('user'), config.get('password'), {
            host: config.get('host'),
            dialect: 'mysql'
        })
        const data = await mydays.query('SELECT * FROM views_work_sv', { type: mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => await ViewsWorkSv.create(item))
                return results
            })
            .catch(error => {
                return error
            })
        return data
    }
    async syncmessagesv() {
        const mydays = new Sequelize( config.get('database'),config.get('user'), config.get('password'), {
            host: config.get('host'),
            dialect: 'mysql'
        })
        const data = await mydays.query('SELECT * FROM message_sv', { type: mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => await MessageSv.create(item))
                return results
            })
            .catch(error => {
                return error
            })
        return data
    }
    async synctabelsv() {
        const mydays = new Sequelize( config.get('database'),config.get('user'), config.get('password'), {
            host: config.get('host'),
            dialect: 'mysql'
        })
        const data = await mydays.query('SELECT * FROM tabel_sv', { type: mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => await TabelSv.create({...item,month:item.mounth,tn:item.tabnum}))
                return results
            })
            .catch(error => {
                return error
            })
        return data
    }
    async syncktudoc() {
        const mydays = new Sequelize( config.get('database'),config.get('user'), config.get('password'), {
            host: config.get('host'),
            dialect: 'mysql'
        })
        const data = await mydays.query(`SELECT * FROM \`table-tabel\` WHERE \`shifr\` = 'механики' AND \`months\` = 'май' AND \`data\`= '2024'`, { type: mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => await KtuDoc.create({...item,author:item.autor}))
                return results
            })
            .catch(error => {
                return error
            })
        return data
    }
    async syncktulist() {
        const mydays = new Sequelize( config.get('database'),config.get('user'), config.get('password'), {
            host: config.get('host'),
            dialect: 'mysql'
        })
        const data = await mydays.query('SELECT * FROM ktu_list', { type: mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => {
                    const user = await User.findOne({where:{full_name:item.fio.trim()}})
                    await KtuList.create({ktudate:item.ktudate,content:item.content,ktuman:item.ktuman,ktu:item.ktu,percent:item.percent,ktudoc_id:item.number_doc,shifr:item.shifr,user_tn:user ? user.tn : ''})
                })
                return results
            })
            .catch(error => {
                return error
            })
        return data
    }
    async synctalbelmehan() {
        const mydays = new Sequelize( config.get('database'),config.get('user'), config.get('password'), {
            host: config.get('host'),
            dialect: 'mysql'
        })

        const data = await mydays.query(`SELECT * FROM \`table-tabel\` WHERE \`shifr\` = 'ИТР механики' AND \`months\` = 'май' AND \`data\`= '2024'`, { type: mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => {
                    const object = await Objects.findOne({where: {shifr: item.shifr}})
                    delete item.id
                    await TableTabel.create({
                        ...item,
                        name: item.fioman,
                        month: item.months,
                        year: item.data,
                        branch: item.otdel,
                        tn: item.tabelnum,
                        object_id: object.id
                    })
                    return results
                })
            })
            .catch(error => {
                return error
            })
        console.log(data)
        return data
    }



}
module.exports = new DataService()