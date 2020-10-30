exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table){
        table.increments('id')

        table.integer('user_id')
        .references('users.id')
        .notNullable()
        .onDelete('CASCADE')

        table.text('title') 
        table.timestamps(true, true)
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('projects')
  };
  