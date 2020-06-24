
exports.up = function(knex) {
  await knex.schema.createTable("cars", (table) =>{
    table.increments("id")
    table.string("VIN").notNull().unique()
		table.text("make").notNull().unique()
		table.text("model").notNull()
		table.integer("milleage").notNull()
  })
}

exports.down = function(knex) {
  
}
