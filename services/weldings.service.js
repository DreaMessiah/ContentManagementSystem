const {CrewSv, CrewBase, CrewDoclist, CrewManlist, ViewsWorkSv,MessageSv, TabelSv, KtuDoc, KtuList, Objects, User,
    TableTabel, HumanList, YmSvarka, T13Uni, ZaSv, Statuses, TableZayavka
} = require('../models/models')
const config = require("config");

const {Sequelize, DataTypes, where} = require("sequelize");

class WeldingsService {
    constructor() {
        this.mydays = new Sequelize(config.get('database'), config.get('user'), config.get('password'), {
            host: config.get('host'),
            dialect: 'mysql'
        })
    }

    async loadtabelsv() {
        return await this.mydays.query('SELECT * FROM tabel_sv', { type: this.mydays.QueryTypes.SELECT })
    }
    async synctabelsv() {
        const remove = await TabelSv.findAll()
        remove.map(async item => {
            await item.destroy()
        })

        return await this.mydays.query('SELECT * FROM tabel_sv', { type: this.mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => {
                    const object = await Objects.findOne({where:{shifr:item.shifr}})
                    let TN = ''
                    const user = await User.findOne({where:{tn:item.tabnum}})
                    if(!user) {
                       const hl = await HumanList.findOne({where:{name:item.name}})
                        if(hl){
                            TN = hl.dataValues.tn
                        }
                    }else{
                        TN = item.tabnum
                    }
                    await TabelSv.create({...item,month:item.mounth,tn:TN,object_id: object ? object.dataValues.id : null})
                })
                return results
            })
            .catch(error => {
                return error
            })
    }

    async loadviewsworksv() {
        return await this.mydays.query('SELECT * FROM views_work_sv', { type: this.mydays.QueryTypes.SELECT })
    }
    async syncviewsworksv() {
        const remove = await ViewsWorkSv.findAll()
        remove.map(async item => {
            await item.destroy()
        })
        return await this.mydays.query('SELECT * FROM views_work_sv', { type: this.mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => {
                    await ViewsWorkSv.create(item)
                })
                return results
            })
            .catch(error => {
                return error
            })
    }

    async loadymsvarka() {
        return await this.mydays.query('SELECT * FROM ym_svarka', { type: this.mydays.QueryTypes.SELECT })
    }
    async syncymsvarka() {
        const remove = await YmSvarka.findAll()
        remove.map(async item => {
            await item.destroy()
        })
        return await this.mydays.query('SELECT * FROM ym_svarka', { type: this.mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => {
                    const object = await Objects.findOne({where:{shifr:item.indication}})
                    await YmSvarka.create({...item,indicator:item.indication,shifr:object ? object.dataValues.id:null,month:this.getMonthNumber(item.mounth)})
                })
                return results
            })
            .catch(error => {
                return error
            })
    }

    async loadzasv() {
        return await this.mydays.query('SELECT * FROM za_sv', { type: this.mydays.QueryTypes.SELECT })
    }
    async synczasv() {
        const remove = await ZaSv.findAll()
        remove.map(async item => {
            await item.destroy()
        })
        return await this.mydays.query('SELECT * FROM za_sv', { type: this.mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => {
                    const user = await T13Uni.findOne({where:{name:item.autor}})
                    const object = await Objects.findOne({where:{shifr:item.shifr}})
                    const status = await Statuses.findOne({where:{type:2,label:item.status}})
                    console.log(status)
                    await ZaSv.create({...item,object_id:object.dataValues.id,author_tn:user.dataValues.tn,month:this.getMonthNumber(item.mounth),status_id:status.dataValues.id,trash:false})
                })
                return results
            })
            .catch(error => {
                return error
            })
    }

    async loadtablezayavka() {
        return await this.mydays.query('SELECT * FROM table_zayavka', { type: this.mydays.QueryTypes.SELECT })
    }
    async synctablezayavka() {
        const remove = await TableZayavka.findAll()
        remove.map(async item => {
            await item.destroy()
        })
        return await this.mydays.query('SELECT * FROM table_zayavka', { type: this.mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => {
                    const zasv = await ZaSv.findOne({where:{num:item.numberzayvka}})
                    const status = await Statuses.findOne({where:{type:3,label:item.stat}})
                    await TableZayavka.create({...item,date:item.dateburn,zasv_id:zasv ? zasv.dataValues.id:null,status_id:status ? status.dataValues.id:null})
                })
                return results
            })
            .catch(error => {
                return error
            })
    }

    async loadcrewsv() {
        return await this.mydays.query('SELECT * FROM crew_sv', { type: this.mydays.QueryTypes.SELECT })
    }
    async synccrewsv() {
        const remove = await CrewSv.findAll()
        remove.map(async item => {
            await item.destroy()
        })
        return await this.mydays.query('SELECT * FROM crew_sv', { type: this.mydays.QueryTypes.SELECT })
            .then(results => {
                results.map(async item => {
                    const crewbase = await CrewBase.findOne({where:{crewname:item.namecrew.trim()}})
                    const object = await Objects.findOne({where:{shifr:item.shifr}})
                    await CrewSv.create({...item,object_id:object ? object.dataValues.id : null,crew_id:crewbase ? crewbase.dataValues.id : null})
                })
                return results
            })
            .catch(error => {
                return error
            })
    }

    getMonthNumber(monthName) {
        const months = [
            "январь", "февраль", "март", "апрель", "май", "июнь",
            "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
        ]
        const monthIndex = months.indexOf(monthName.toLowerCase())
        if (monthIndex !== -1) {
            return monthIndex
        } else {
            return null;
        }
    }
}
module.exports = new WeldingsService()

/*    async synccrewsv() {
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
    }*/