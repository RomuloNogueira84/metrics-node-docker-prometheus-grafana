# Aqui eu peguei uma "base pronta" do Node.js, que já vem leve e funcional
FROM node:alpine

# Define a "casa" onde nosso projeto vai morar dentro do container
WORKDIR /app

# Copia os arquivos que dizem quais dependências o projeto usa (package.json e package-lock.json)
COPY package*.json ./

# Instala as dependências que nosso projeto precisa pra rodar
RUN npm install

# Copia o resto dos arquivos do projeto pro container (como o código do servidor)
COPY . .

# Diz qual porta do container nosso servidor vai usar pra se comunicar (porta 3000)
EXPOSE 3000

# Fala qual comando deve ser executado pra iniciar nosso servidor quando o container estiver rodando
CMD ["node", "index.js"]


