/*
Importando os módulos necessários:
- express: Serve para criar um servidor web de forma simples e prática.
- prom-client: Usado para criar métricas que podem ser monitoradas pelo Prometheus.
(Nota: Baseado na conversa de 17-03-2025)
*/


const express = require('express');
const client = require('prom-client');

/*
Configuração do servidor:
- app: É a instância do servidor criado usando o Express, onde definimos as rotas e funcionalidades.
- PORT: É a porta onde o servidor vai rodar (neste caso, a 3000).
*/

const app = express();
const PORT = 3000;

/*
Definição da métrica:
- Criamos uma métrica chamada hello_requests_total, do tipo contador (Counter).
- Ela registra quantas vezes a rota / foi acessada ao longo do tempo.
*/

const requestCounter = new client.Counter({
  name: 'hello_requests_total',
  help: 'Número total de requisições feitas à rota /'
});

/*
Rota /metrics:
- Essa rota é usada para expor as métricas da aplicação no endpoint /metrics.
- O Prometheus acessa esse endpoint para coletar e armazenar os dados das métricas.
*/

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

/*
Rota /:
- Toda vez que alguém acessa a rota /, o contador da métrica é incrementado.
- O servidor responde ao usuário com a mensagem: "Olá Mundo! Bem vindo ao media team!".
*/


app.get('/', (req, res) => {
  requestCounter.inc();
  res.send('Olá Mundo!Bem vindo ao media team!');
});

/*
Inicialização do Servidor:
- O servidor começa a aceitar conexões na porta especificada (neste caso, a 3000).
- Exibe uma mensagem no console para confirmar que está funcionando.
*/

app.listen(PORT, () => {
  console.log(`Servido esta executando em http://localhost:${PORT}`);
});