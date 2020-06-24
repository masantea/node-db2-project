
exports.up = function(knex) {
  await knex.schema.createTable("cars", (table) => {
		// table.integer("id").notNull().unique().primary()
		table.increments("id")
		table.numeric("VIN").notNull().unique()
		table.text("make").notNull()
		table.text("model").notNull()
		table.numeric("mileage").notNull()
	})
};

exports.down = function(knex) {
  
};
