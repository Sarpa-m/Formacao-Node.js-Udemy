var http = require('http');

http.createServer(function (requisicao,resposta) {
    

    resposta.end('ola')



}).listen(8181)
console.log('meu servidor esta rodando')

