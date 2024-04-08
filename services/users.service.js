const {User} = require('../models/models')
const config = require("config");

const {Sequelize} = require("sequelize");

class UsersService {
    async getUsers() {
        const mydays = new Sequelize( config.get('database'),config.get('user'), config.get('password'), {
            host: config.get('host'),
            dialect: 'mysql'
        })
        const users = await mydays.query('SELECT * FROM users', { type: mydays.QueryTypes.SELECT })
            .then(results => {
                return results
            })
            .catch(error => {
                return error
            })
        return users
    }
}
module.exports = new UsersService()