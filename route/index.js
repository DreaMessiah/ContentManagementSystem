const Router = require('express')
const router = new Router()

const dataRouter = require('./data.route')
const usersRouter = require('./users.route')
const weldingsRouter = require('./weldings.route')


router.use('/data',dataRouter)
router.use('/users',usersRouter)
router.use('/weldings',weldingsRouter)

module.exports = router