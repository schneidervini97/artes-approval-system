/**
 * Script para configurar o ambiente de execução
 * Uso: node scripts/setup-env.js [ambiente]
 * Exemplo: node scripts/setup-env.js development
 */

const fs = require('fs');
const path = require('path');

// Determina o ambiente baseado no argumento passado ou usa development como padrão
const environment = process.argv[2] || 'development';
const validEnvironments = ['development', 'test', 'production'];

if (!validEnvironments.includes(environment)) {
  console.error(`Ambiente inválido: ${environment}`);
  console.error(`Ambientes válidos: ${validEnvironments.join(', ')}`);
  process.exit(1);
}

console.log(`Configurando ambiente: ${environment}`);

// Caminhos dos arquivos de ambiente
const envExamplePath = path.join(__dirname, '..', '.env.example');
const envPath = path.join(__dirname, '..', '.env');
const envTemplatePath = path.join(__dirname, '..', `.env.${environment}`);

// Verifica se o arquivo de template existe
if (!fs.existsSync(envTemplatePath) && !fs.existsSync(envExamplePath)) {
  console.error(`Arquivo de template não encontrado: ${envTemplatePath}`);
  console.error('Crie o arquivo de template ou use o .env.example como base');
  process.exit(1);
}

// Fonte do template - usa o arquivo específico do ambiente se existir, ou o .env.example
const templatePath = fs.existsSync(envTemplatePath) ? envTemplatePath : envExamplePath;

// Copia o arquivo de template para o .env
fs.copyFileSync(templatePath, envPath);

console.log(`Ambiente ${environment} configurado com sucesso!`);
console.log(`Arquivo .env criado baseado em ${path.basename(templatePath)}`); 