const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Limpa as tabelas existentes
  await knex('activity_logs').del();
  await knex('approvals').del();
  await knex('arts').del();
  await knex('clients').del();
  await knex('users').del();
  
  // Insere dados de usuário
  const admin = await knex('users').insert({
    name: 'Administrador',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin123', 10),
    role: 'admin',
    created_at: new Date(),
    updated_at: new Date()
  }).returning('id');
  
  const user = await knex('users').insert({
    name: 'Usuário',
    email: 'user@example.com',
    password: bcrypt.hashSync('user123', 10),
    role: 'user',
    created_at: new Date(),
    updated_at: new Date()
  }).returning('id');
  
  // Insere dados de cliente
  const client = await knex('clients').insert({
    name: 'Cliente Teste',
    email: 'cliente@example.com',
    company: 'Empresa Teste',
    phone: '(11) 99999-9999',
    contact_person: 'Contato Teste',
    created_at: new Date(),
    updated_at: new Date()
  }).returning('id');
}; 