const express = require('express')
const { Server } = require("socket.io");
const { createServer } = require('node:http');
const sequelize = require('./db')
const config = require('config')
const cors = require('cors');
const md5 = require('md5')
const router = require('./route/index')
const cookieParser = require('cookie-parser')
const errorMiddlewere = require('./middlewere/error.middlewere')
const {Sequelize} = require("sequelize");

const app = express()
const server = createServer(app);
const io = new Server(server);

const PORT = config.get('serverPort')

app.use(cors({
    origin: config.get('client_url'),
    credentials: true // Если используются учетные данные, например, куки или заголовки авторизации
}));


app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use('/sync/',require('./routes/sync.route'))
app.use('/db/',require('./routes/mydays.route'))

app.use(cookieParser())
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use('/api', router)

app.use(errorMiddlewere) //Обязательно последний!
const start = async () => {
    try{
        //const hashPassword = md5('никитин'+'dfgjldfjdfgljdlf55');
        //console.log(hashPassword)

        app.listen(PORT,() => {
            console.log('Server started on port : ', PORT)
        })
        io.on('connection', (socket) => {
            console.log('a user '+ socket + ' connected');
        })

        await sequelize.authenticate()
        //console.log(await getSequenceName('tabletabels','id'))
        //await sequelize.query('ALTER SEQUENCE "tabletabels_id_seq" RESTART WITH 8456')
        //await sequelize.sync({ alter: true })
        console.log('Tables is synchronized...')
    }catch (e){
        console.log(e.message)
    }
}

const getSequenceName = async (tableName, columnName) => {
    const result = await sequelize.query(
        `SELECT pg_get_serial_sequence('${tableName}', '${columnName}') AS sequence_name`,
        { type: Sequelize.QueryTypes.SELECT }
    );
    return result[0].sequence_name;
};


start()