/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    // Tabela de usuários
    .createTable('users', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.enu('role', ['admin', 'user']).defaultTo('user');
      table.boolean('active').defaultTo(true);
      table.timestamps(true, true);
    })
    
    // Tabela de clientes
    .createTable('clients', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('company').nullable();
      table.string('phone').nullable();
      table.string('contact_person').nullable();
      table.boolean('active').defaultTo(true);
      table.timestamps(true, true);
    })
    
    // Tabela de artes
    .createTable('arts', function(table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.text('description').nullable();
      table.string('filename').notNullable();
      table.string('file_url').notNullable();
      table.string('thumbnail_url').nullable();
      table.string('file_type').notNullable(); // image, video
      table.string('cloudinary_public_id').notNullable();
      table.integer('client_id').unsigned().references('id').inTable('clients')
        .onDelete('CASCADE');
      table.integer('uploaded_by').unsigned().references('id').inTable('users')
        .onDelete('SET NULL');
      table.enu('status', ['pending', 'approved', 'rejected']).defaultTo('pending');
      table.timestamps(true, true);
    })
    
    // Tabela de aprovações/comentários
    .createTable('approvals', function(table) {
      table.increments('id').primary();
      table.integer('art_id').unsigned().references('id').inTable('arts')
        .onDelete('CASCADE');
      table.integer('client_id').unsigned().references('id').inTable('clients')
        .onDelete('CASCADE');
      table.enu('status', ['approved', 'rejected']).notNullable();
      table.text('comment').nullable();
      table.timestamps(true, true);
    })
    
    // Tabela de logs de atividade
    .createTable('activity_logs', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users')
        .onDelete('SET NULL');
      table.integer('client_id').unsigned().references('id').inTable('clients')
        .onDelete('SET NULL');
      table.string('action').notNullable();
      table.jsonb('details').nullable();
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('activity_logs')
    .dropTableIfExists('approvals')
    .dropTableIfExists('arts')
    .dropTableIfExists('clients')
    .dropTableIfExists('users');
}; 