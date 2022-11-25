import { Sequelize } from 'sequelize'

const db = new Sequelize('s65', 'user_s65', 'A8smFW7#', {
    host: 'http://190.124.224.143/',
    dialect: 'mysql'
})

export default db