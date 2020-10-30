const knex_file = require('../api/knexfile')
const knex = require('knex')(knex_file.development) 

module.exports = knex