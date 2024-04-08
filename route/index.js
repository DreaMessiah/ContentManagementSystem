const Router = require('express')
const router = new Router()

const usersRouter = require('./users.route')

router.use('/users',usersRouter)

module.exports = router