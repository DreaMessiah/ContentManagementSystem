const {Router,validationResult} = require('express')
const router = Router()
const mysql = require('mysql')
const md5 = require('md5')
const config = require('config')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const Models = require('../models/models')
const {where, DataTypes} = require("sequelize");

router.post('/tnforusers',
    async (req,res) => {
        try {
            const connection = mysql.createConnection({
                host: config.get('host'),
                user: config.get('user'),
                password: config.get('password'),
                database: config.get('database'),
            })
            await connection.connect(err => {
                if (err) {
                    connection.end()
                    res.status(500).json({message: err.message})
                }
                connection.query(`SELECT tabel_number, fio, inn FROM t13 WHERE inn = '8617014209' AND tabel_number IN (SELECT tabel_number FROM t13 WHERE inn = '8617014209' GROUP BY tabel_number HAVING COUNT(DISTINCT fio) > 1) ORDER BY tabel_number;`, function (err, rows, fields) {
                    console.log(err)
                    const req = rows.map(obj => Object.values(obj))
                    console.log(req)
                    let header = []
                    fields.map((field,index) => {
                        header[index] = field.name
                    })

                    return res.send({req,header})
                })
            })
        }catch (e) {

        }
    })

router.post('/users',
    async (req,res) => {
        try {
            const connection = mysql.createConnection({
                host: config.get('host'),
                user: config.get('user'),
                password: config.get('password'),
                database: config.get('database'),
            })
            await connection.connect(err => {
                if (err) {
                    connection.end()
                    res.status(500).json({message: err.message})
                }
                connection.query(`SELECT * FROM users WHERE full_name IN (SELECT DISTINCT fio FROM t13 WHERE mesyatz = 'январь' AND years = '2024') AND (inn='8617014209' OR inn='')`, function (err,rows,fields){
                    console.log(err)
                    if(err) res.status(400).json({message: err.message})
                    if(!rows[0]) res.status(500).json({message: 'Table is empty',error:1})

                    const req = rows.map(obj => {
                        try {
                            connection.query(`SELECT tabel_number FROM t13 WHERE fio='${obj.full_name}' LIMIT 1`,async function (err,rows,fields){
                                console.log( '!!!!!' + err)
                                console.log(rows)
                                try {
                                    await Models.User.create({
                                        id:obj.id,
                                        tn:rows[0]['tabel_number'],
                                        full_name:obj.full_name,
                                        login:obj.login,
                                        email:obj.email,
                                        password:obj.viewp ? await bcrypt.hash(obj.viewp, 15) : '',
                                        avatar:obj.avatar,
                                        account:obj.account,
                                        inn:'8617014209',
                                        admin:obj.admin,
                                        moderator:obj.moderator,
                                        editcom:obj.editcom,
                                        reg:obj.reg,
                                        checked:obj.checked,
                                        passport:obj.passport,
                                        phone:obj.phone,
                                        phonecompany:obj.phonecompany,
                                        snils:obj.snils,
                                        unit:obj.unit
                                    })
                                }catch (e){
                                    console.log('Ошибка при создании пользователя' + e.message)
                                }
                            })
                        } catch (error) {
                            if (error.name === 'SequelizeUniqueConstraintError') {
                                // Обработка ошибки уникальности: пользователь уже существует
                                console.log('Пользователь с такими данными уже существует')
                            } else {
                                // Другие виды ошибок
                                console.log(error.message);
                            }
                        }
                        return Object.values(obj)
                    })
                    connection.end()
                    res.status(200).json({req})
                })
            })
        }catch (e) {
            res.status(500).json({message: 'Чтото пошло не так, попробуйте снова'})
        }
    })

router.post('/objects',
    async (req,res) => {
        try {
            const connection = mysql.createConnection({
                host: config.get('host'),
                user: config.get('user'),
                password: config.get('password'),
                database: config.get('database'),
            })

            await connection.connect(err => {
                if (err) {
                    connection.end()
                    res.status(500).json({message: err.message})
                }
                connection.query(`SELECT * FROM number_object WHERE inn='8617014209'`,async function (err,rows,fields){
                    console.log(err)
                    if(err) res.status(400).json({message: err.message})
                    if(!rows[0]) res.status(500).json({message: 'Table is empty',error:1})

                    rows.map(async obj => {
                        try{
                            await Models.Objects.create({
                                id:obj.id,
                                shifr:obj.shifr_number,
                                nameobject:obj.shifr_name,
                                inn:obj.inn,
                                ras:obj.ras,
                                ogm_j:obj.ogm_j,
                                dop1:obj.dop1,
                                dop2:obj.dop2,
                                prior:obj.prior
                            })
                        }catch (e){
                            console.log(e.message)
                        }
                    })

                    const req = rows.map(obj => Object.values(obj))
                    connection.end()
                    res.status(200).json({req})
                })
            })
        }catch (e) {
            res.status(500).json({message: 'Чтото пошло не так, попробуйте снова'})
        }
    })

router.post('/company',
    async (req,res) => {
        try {
            const connection = mysql.createConnection({
                host: config.get('host'),
                user: config.get('user'),
                password: config.get('password'),
                database: config.get('database'),
            })

            await connection.connect(err => {
                if (err) {
                    connection.end()
                    res.status(500).json({message: err.message})
                }
                connection.query(`SELECT * FROM company`, function (err,rows,fields){
                    console.log(err)
                    if(err) res.status(400).json({message: err.message})
                    if(!rows[0]) res.status(500).json({message: 'Table is empty',error:1})

                    rows.map(async obj => {
                        try{
                            await Models.Company.create({
                                id:obj.id,
                                inn:obj.inn,
                                namecom:obj.namecom,
                                namecut:obj.namecut,
                                contact:obj.contact,
                                phone:obj.phone,
                                email:obj.email,
                                ogrn:obj.ogrn,
                                status:obj.status,
                                director:obj.director,
                                tabel:obj.tabel,
                                zp:obj.zp,
                                crm:obj.crm,
                                vak:obj.vak,
                                sale:obj.sale,
                                uraddress:obj.uraddress,
                                phonecom:obj.phonecom,
                                phonepri:obj.phonepri,
                                phonehr:obj.phonehr,
                                phonemon:obj.phonemon,
                                fax:obj.fax,
                                factaddress:obj.factaddress,
                                rs:obj.rs,
                                namebank:obj.namebank,
                                kors:obj.kors,
                                bik:obj.bik,
                                emailcom:obj.emailcom,
                                srto_month:obj.srto_month,
                                srto_year:obj.srto_year,
                                srto_branch:obj.srto_branch,
                                vem:obj.vem,
                                periodvem:obj.periodvem,
                                daysvem:obj.daysvem,
                                document:obj.document,
                                oclockday:obj.oclockday,
                                information:obj.information,
                            })
                        }catch (e){
                            res.status(400).send(e.message)
                        }
                    })

                    const req = rows.map(obj => Object.values(obj))
                    connection.end()
                    res.status(200).json({req})
                })
            })
        }catch (e) {
            res.status(500).json({message: 'Чтото пошло не так, попробуйте снова'})
        }
    })

router.post('/positions',
    async (req,res) => {
        try {
            const connection = mysql.createConnection({
                host: config.get('host'),
                user: config.get('user'),
                password: config.get('password'),
                database: config.get('database'),
            })

            await connection.connect(err => {
                if (err) {
                    connection.end()
                    res.status(500).json({message: err.message})
                }
                connection.query(`SELECT DISTINCT developer FROM t13 WHERE inn = '8617014209';`, function (err,rows,fields){
                    console.log(err)
                    if(err) res.status(400).json({message: err.message})
                    if(!rows[0]) res.status(500).json({message: 'Table is empty',error:1})

                    rows.map(async obj => {
                        try{
                            await Models.Jobs.create({
                                name:Object.values(obj)[0],
                                rules:0,
                            })
                        }catch (e){
                            res.status(400).send(e.message)
                        }
                    })


                    const req = rows.map(obj => Object.values(obj))
                    connection.end()
                    res.status(200).json({req})
                })
            })
        }catch (e) {
            res.status(500).json({message: 'Чтото пошло не так, попробуйте снова'})
        }
    })

router.post('/tt',
    async (req,res) => {
        try {
            const connection = mysql.createConnection({
                host: config.get('host'),
                user: config.get('user'),
                password: config.get('password'),
                database: config.get('database'),
            })
            await connection.connect(err => {
                if (err) {
                    console.log(err)
                    connection.end()
                    res.status(500).json({message: err.message})
                }
                connection.query(`SELECT * FROM \`table-tabel\` WHERE (inn = '8617014209' AND data = '2024');`, function (err, rows, fields) {
                    console.log(err)
                    if(err) res.status(400).json({message: err.message})
                    if(!rows[0]) res.status(500).json({message: 'Table is empty',error:1})
                    rows.map(async obj => {
                        try {
                            const tabel = await Models.TableTabel.create({
                                    name:obj.fioman,
                                    developer:obj.developer,
                                    branch:obj.otdel,
                                    object_id: (await Models.Objects.findOne({ where: { shifr: obj.shifr }, attributes: ['id'] }))?.id || null,
                                    shifr: obj.shifr,
                                    month:obj.months,
                                    year:obj.data,
                                    ktu:obj.ktu,
                                    marker:obj.marker,
                                    ras:obj.ras,
                                    company_id: (await Models.Company.findOne({ where: { inn: obj.inn }, attributes: ['id'] }))?.id || null,
                                    inn:obj.inn,
                                    transport:obj.transport,
                                    price:obj.price,
                                    tn:obj.tabelnum,
                                    m1:obj.m1,
                                    m2:obj.m2,
                                    m3:obj.m3,
                                    m4:obj.m4,
                                    m5:obj.m5,
                                    m6:obj.m6,
                                    m7:obj.m7,
                                    m8:obj.m8,
                                    m9:obj.m9,
                                    m10:obj.m10,
                                    m11:obj.m11,
                                    m12:obj.m12,
                                    m13:obj.m13,
                                    m14:obj.m14,
                                    m15:obj.m15,
                                    m16:obj.m16,
                                    m17:obj.m17,
                                    m18:obj.m18,
                                    m19:obj.m19,
                                    m20:obj.m20,
                                    m21:obj.m21,
                                    m22:obj.m22,
                                    m23:obj.m23,
                                    m24:obj.m24,
                                    m25:obj.m25,
                                    m26:obj.m26,
                                    m27:obj.m27,
                                    m28:obj.m28,
                                    m29:obj.m29,
                                    m30:obj.m30,
                                    m31:obj.m31,
                                    c1:obj.c1,
                                    c2:obj.c2,
                                    c3:obj.c3,
                                    c4:obj.c4,
                                    c5:obj.c5,
                                    c6:obj.c6,
                                    c7:obj.c7,
                                    c8:obj.c8,
                                    c9:obj.c9,
                                    c10:obj.c10,
                                    c11:obj.c11,
                                    c12:obj.c12,
                                    c13:obj.c13,
                                    c14:obj.c14,
                                    c15:obj.c15,
                                    c16:obj.c16,
                                    c17:obj.c17,
                                    c18:obj.c18,
                                    c19:obj.c19,
                                    c20:obj.c20,
                                    c21:obj.c21,
                                    c22:obj.c22,
                                    c23:obj.c23,
                                    c24:obj.c24,
                                    c25:obj.c25,
                                    c26:obj.c26,
                                    c27:obj.c27,
                                    c28:obj.c28,
                                    c29:obj.c29,
                                    c30:obj.c30,
                                    c31:obj.c31,
                                    dop1:obj.dop1,
                                    dop2:obj.dop2,
                                    dop3:obj.dop3,
                                    dop4:obj.dop4,
                                    dop5:obj.dop5,
                                    dop6:obj.dop6,
                                    dop7:obj.dop7,
                                    dop8:obj.dop8,
                                    dop9:obj.dop9,
                                    dop10:obj.dop10,
                                    dop11:obj.dop11,
                                    dop12:obj.dop12,
                                    dop13:obj.dop13,
                                    dop14:obj.dop14,
                                    dop15:obj.dop15,
                                    dop16:obj.dop16,
                                    dop17:obj.dop17,
                                    dop18:obj.dop18,
                                    dop19:obj.dop19,
                                    dop20:obj.dop20,
                                    dop21:obj.dop21,
                                    dop22:obj.dop22,
                                    dop23:obj.dop23,
                                    dop24:obj.dop24,
                                    dop25:obj.dop25,
                                    dop26:obj.dop26,
                                    dop27:obj.dop27,
                                    dop28:obj.dop28,
                                    dop29:obj.dop29,
                                    dop30:obj.dop30,
                                    dop31:obj.dop31
                            })
                            if (!tabel) {
                                console.log('!!!!!!!!Не добавлена', tabel.toJSON());
                            }
                        }catch (e) {
                            console.log(e)
                        }})

                    const req = rows.map(obj => Object.values(obj))
                    connection.end()
                    res.status(200).json({req})

                })

            })
        }catch (e){
            res.status(500).json({message: 'Чтото пошло не так, попробуйте снова'})
        }
    })
router.post('/tsv',
    async (req,res) => {
        try {
            const connection = mysql.createConnection({
                host: config.get('host'),
                user: config.get('user'),
                password: config.get('password'),
                database: config.get('database'),
            })
            await connection.connect(err => {
                if (err) {
                    console.log(err)
                    connection.end()
                    res.status(500).json({message: err.message})
                }
                connection.query(`SELECT * FROM \`tabel_sv\`;`, function (err, rows, fields) {
                    console.log(err)
                    if(err) res.status(400).json({message: err.message})
                    if(!rows[0]) res.status(500).json({message: 'Table is empty',error:1})
                    rows.map(async obj => {
                        try {
                            //console.log(obj.fioman)
                            const [tabelsv, created] = await Models.TabelSv.findOrCreate({
                                where: {shifr: obj.shifr, name: obj.name, year: obj.year, month: obj.mounth}, defaults: {
                                    name:obj.name,
                                    object_id: (await Models.Objects.findOne({ where: { shifr: obj.shifr }, attributes: ['id'] }))?.id || null,
                                    shifr: obj.shifr,
                                    month:obj.mounth,
                                    year:obj.data,
                                    crew:obj.crew,
                                    checkin:obj.marker,
                                    developer:obj.ras,
                                    company_id:1,
                                    inn:obj.inn,
                                    volume:obj.volume,
                                    unit:obj.unit,
                                    norma:obj.norma,
                                    writed:obj.writed,
                                    tn:obj.tabnum,
                                    p1:obj.p1,
                                    p2:obj.p2,
                                    p3:obj.p3,
                                    p4:obj.p4,
                                    p5:obj.p5,
                                    p6:obj.p6,
                                    p7:obj.p7,
                                    p8:obj.p8,
                                    p9:obj.p9,
                                    p10:obj.p10,
                                    p11:obj.p11,
                                    p12:obj.p12,
                                    p13:obj.p13,
                                    p14:obj.p14,
                                    p15:obj.p15,
                                    p16:obj.p16,
                                    p17:obj.p17,
                                    p18:obj.p18,
                                    p19:obj.p19,
                                    p20:obj.p20,
                                    p21:obj.p21,
                                    p22:obj.p22,
                                    p23:obj.p23,
                                    p24:obj.p24,
                                    p25:obj.p25,
                                    p26:obj.p26,
                                    p27:obj.p27,
                                    p28:obj.p28,
                                    p29:obj.p29,
                                    p30:obj.p30,
                                    p31:obj.p31,
                                    d1:obj.d1,
                                    d2:obj.d2,
                                    d3:obj.d3,
                                    d4:obj.d4,
                                    d5:obj.d5,
                                    d6:obj.d6,
                                    d7:obj.d7,
                                    d8:obj.d8,
                                    d9:obj.d9,
                                    d10:obj.d10,
                                    d11:obj.d11,
                                    d12:obj.d12,
                                    d13:obj.d13,
                                    d14:obj.d14,
                                    d15:obj.d15,
                                    d16:obj.d16,
                                    d17:obj.d17,
                                    d18:obj.d18,
                                    d19:obj.d19,
                                    d20:obj.d20,
                                    d21:obj.d21,
                                    d22:obj.d22,
                                    d23:parseInt(obj.d23, 10),
                                    d24:obj.d24,
                                    d25:obj.d25,
                                    d26:obj.d26,
                                    d27:obj.d27,
                                    d28:obj.d28,
                                    d29:obj.d29,
                                    d30:obj.d30,
                                    d31:obj.d31,
                                }

                            })
                            console.log(tabelsv)
                            if (created) {
                                console.log('Запись была создана:', tabelsv.toJSON());
                            } else {
                                console.log('Найдена существующая запись:', tabelsv.toJSON());
                            }
                        }catch (e) {
                            console.log(e)
                        }})

                    const req = rows.map(obj => Object.values(obj))
                    connection.end()
                    res.status(200).json({req})

                })

            })
        }catch (e){
            res.status(500).json({message: 'Чтото пошло не так, попробуйте снова'})
        }
    })
router.post('/payslip',
    async (req,res) => {
        try {
            const connection = mysql.createConnection({
                host: config.get('host'),
                user: config.get('user'),
                password: config.get('password'),
                database: config.get('database'),
            })

            await connection.connect(err => {
                if (err) {
                    console.log(err)
                    connection.end()
                    res.status(500).json({message: err.message})
                }
                connection.query(`SELECT * FROM tabel WHERE (inn = '8617014209');`, function (err,rows,fields){
                    console.log(err)
                    if(err) res.status(400).json({message: err.message})
                    if(!rows[0]) res.status(500).json({message: 'Table is empty',error:1})
                    let year = ''
                    let month = ''
                    let match = ''
                    let type = ''
                    rows.map(async obj => {
                        try{
                            match = obj.mouth.match(/([а-яА-Я]+)(\d{4})/);
                            month = match[1];
                            year = match[2];
                            type = obj.mouth.slice(month.length + year.length).trim();
                            if(type === '') type = 'зарплата'

                            const payslip = await Models.Payslip.create({
                                month:month,
                                year:year,
                                type:type,
                                name:obj.name,
                                cost:obj.cost,
                                days:obj.days,
                                uchet:obj.uchet,
                                stazh:obj.stazh,
                                inn:obj.inn,
                                held:obj.held,
                                payments:obj.payments,
                                total:obj.total,
                                tn:(await Models.T13.findOne({ where: { name: obj.name }, attributes: ['tn'] }))?.tn || null
                            })

                            if (payslip) {
                                //console.log('Запись была создана:', payslip.toJSON());
                            } else {
                                console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Запись не создана', payslip.toJSON());
                            }
                        }catch (e){
                            console.log(e)
                        }
                    })
                    const req = rows.map(obj => Object.values(obj))
                    connection.end()
                    res.status(200).json({req})

                })
            })
        }catch (e) {
            res.status(500).json({message: 'Чтото пошло не так, попробуйте снова'})
        }
    })
router.post('/t13',
    async (req,res) => {
        try {
            const connection = mysql.createConnection({
                host: config.get('host'),
                user: config.get('user'),
                password: config.get('password'),
                database: config.get('database'),
            })
            await connection.connect(err => {
                if (err) {
                    console.log(err)
                    connection.end()
                    res.status(500).json({message: err.message})
                }
                connection.query(`SELECT * FROM \`t13\` WHERE inn='8617014209' AND years='2024';`, function (err, rows, fields) {
                    console.log(err)
                    if(err) res.status(400).json({message: err.message})
                    if(!rows[0]) res.status(500).json({message: 'Table is empty',error:1})
                    rows.map(async obj => {
                        try {//(await Models.Objects.findOne({ where: { shifr: obj.shifr }, attributes: ['id'] }))?.id || null,
                            const t13 = await Models.T13.create({
                                name:obj.fio,
                                developer:obj.developer,
                                branch:obj.otdel,
                                onboard:obj.priem,
                                term:obj.pustoy,
                                document:obj.document,
                                tn:obj.tabel_number,
                                groups:obj.groups,
                                status:obj.status,
                                gender:obj.gendor,
                                rk:obj.rk,
                                sn:obj.sn,
                                oklad:obj.oklad,
                                method:obj.method_work,
                                month:obj.mesyatz,
                                year:obj.years,
                                inn:obj.inn,
                                birthday:obj.birthday,
                                d1:obj.d1,
                                d2:obj.d2,
                                d3:obj.d3,
                                d4:obj.d4,
                                d5:obj.d5,
                                d6:obj.d6,
                                d7:obj.d7,
                                d8:obj.d8,
                                d9:obj.d9,
                                d10:obj.d10,
                                d11:obj.d11,
                                d12:obj.d12,
                                d13:obj.d13,
                                d14:obj.d14,
                                d15:obj.d15,
                                d16:obj.d16,
                                d17:obj.d17,
                                d18:obj.d18,
                                d19:obj.d19,
                                d20:obj.d20,
                                d21:obj.d21,
                                d22:obj.d22,
                                d23:obj.d23,
                                d24:obj.d24,
                                d25:obj.d25,
                                d26:obj.d26,
                                d27:obj.d27,
                                d28:obj.d28,
                                d29:obj.d29,
                                d30:obj.d30,
                                d31:obj.d31
                            })
                            if (t13) {
                                console.log('Запись была создана:', t13.toJSON());
                            } else {
                                console.log('Найдена существующая запись:', t13.toJSON());
                            }
                        }catch (e) {
                            console.log(e)
                        }})

                    const req = rows.map(obj => Object.values(obj))
                    connection.end()
                    res.status(200).json({req})

                })

            })
        }catch (e){
            res.status(500).json({message: 'Чтото пошло не так, попробуйте снова'})
        }
    })
router.post('/ktulist',
    async (req,res) => {
        try {
            const connection = mysql.createConnection({
                host: config.get('host'),
                user: config.get('user'),
                password: config.get('password'),
                database: config.get('database'),
            })

            await connection.connect(err => {
                if (err) {
                    console.log(err)
                    connection.end()
                    res.status(500).json({message: err.message})
                }
                connection.query(`SELECT * FROM ktu_list WHERE (inn = '8617014209');`, function (err,rows,fields){
                    console.log(err)
                    if(err) res.status(400).json({message: err.message})
                    if(!rows[0]) res.status(500).json({message: 'Table is empty',error:1})

                    rows.map(async obj => {
                        try{
                            const ktu = await Models.Ktulist.create({
                                name:obj.fio,
                                tn:(await Models.T13.findOne({ where: { name: obj.fio }, attributes: ['tn'] }))?.tn || null,
                                number_doc:obj.number_doc,
                                inn:obj.inn,
                                month:obj.month,
                                year:obj.year,
                                developer:obj.developer,
                                shifr:obj.shifr,
                                object_id:(await Models.Objects.findOne({ where: { shifr: obj.shifr }, attributes: ['id'] }))?.id || null,
                                ktudate:obj.ktudate,
                                content:obj.content,
                                ktuman:obj.ktuman,
                                ktu:obj.ktu,
                                percent:obj.percent
                            })
                            if (!ktu) {
                                console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Запись не создана', payslip.toJSON());
                            }
                        }catch (e){
                            console.log(e)
                        }
                    })
                    const req = rows.map(obj => Object.values(obj))
                    connection.end()
                    res.status(200).json({req})

                })
            })
        }catch (e) {
            res.status(500).json({message: 'Чтото пошло не так, попробуйте снова'})
        }
    })

router.post('/setel', async (req, res) => {
    try {

        const connection = mysql.createConnection({
            host: config.get('host'),
            user: config.get('user'),
            password: config.get('password'),
            database: config.get('database'),
        });
        await connection.connect((err) => {
            if (err) {
                connection.end();
                return res.status(500).json({ message: err.message });
            }
            //connection.query(`UPDATE users SET phonecompany = '89824102141' WHERE login LIKE 'Юп-%';`, function (err, rows, fields) {
            connection.query(`SELECT * FROM users WHERE login LIKE 'Юп-%';`, function (err, rows, fields) {
                if (err) {
                    console.log(err)
                    connection.end();
                    return res.status(400).json({ message: err.message });
                }

                if (!rows[0]) {
                    console.log('sdfsdfsdf')
                    connection.end();
                    return res.status(500).json({ message: 'Table is empty', error: 1 });
                }
                console.log(rows)
                connection.end();
                const req = rows.map(obj => Object.values(obj))
                return res.status(200).json({req})
            })
        })

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});
module.exports = router

