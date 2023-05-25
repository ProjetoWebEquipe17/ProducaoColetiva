//Tratando Route Params
const express = require('express');

const server = express();

server.use(express.json())

//localhost:3000/applojainstrumento/cadastroproduto/2 //Lista um único produto do cadastro
//localhost:3000/applojainstrumento/cadastroproduto   //Lista todos os produtos do cadastro

//localhost:3000/applojainstrumento/pedidovenda/2 //Lista um único produto do pedido
//localhost:3000/applojainstrumento/pedidovenda   //Lista todos os produtos do pedido

const produtoArray = [];
const pedidoArray = [];
const vendaArray = [];

//Rota para incluir um novo produto no cadastro - POST - utilizar REQUST BODY
server.post('/cadastroproduto', (req, res) => {

    const { dadosProduto } = req.body;
    
    produtoArray.push(dadosProduto);
    
    return res.json(produtoArray);
})

//Rota para listar todos os produtos do cadastro - GET
server.get('/cadastroproduto', (req, res) => {

    return res.json(produtoArray);
})

//Rota para listar um único produto do cadastro - GET
server.get('/cadastroproduto/:indice', (req, res) => {

    const { indice } = req.params

    return res.json(produtoArray[indice])
})

//Rota para alterar um produto do cadastro - PUT - utilizar REQUST BODY
server.put('/cadastroproduto/:indice', (req, res) => {

    const { indice } = req.params;
    const { dadosProduto } = req.body;
    
    produtoArray[indice]=dadosProduto;
    
    return res.json(produtoArray);
})

//Rota para excluir um produto do cadastro - DELETE - utilizar REQUST BODY
server.delete('/cadastroproduto/:indice', (req, res) => {

    const { indice } = req.params;
    const { dadosProduto } = req.body;
    
    produtoArray.splice(indice, 1);
    
    return res.json(produtoArray);
})

//Rota para incluir o produto no pedido - POST - utilizar REQUST BODY
server.post('/pedidovenda', (req, res) => {

    const { dadosPedido } = req.body;
    
    pedidoArray.push(dadosPedido);
    
    return res.json(pedidoArray);
})

//Rota para listar todos os produtos do pedido - GET
server.get('/pedidovenda', (req, res) => {

    return res.json(pedidoArray);
})

//Rota para listar um único produto do pedido - GET
server.get('/pedidovenda/:indice', (req, res) => {

    const { indice } = req.params

    return res.json(pedidoArray[indice])
})

//Rota para alterar um produto do pedido - PUT - utilizar REQUST BODY
server.put('/pedidovenda/:indice', (req, res) => {

    const { indice } = req.params;
    const { dadosPedido } = req.body;
    
    pedidoArray[indice]=dadosPedido;
    
    return res.json(pedidoArray);
})

//Rota para excluir um produto do pedido - DELETE - utilizar REQUST BODY
server.delete('/pedidovenda/:indice', (req, res) => {

    const { indice } = req.params;
    const { dadosPedido } = req.body;
    
    pedidoArray.splice(indice, 1);
    
    return res.json(pedidoArray);
})

//Rota para finalizar a venda com os dados do cliente - POST - utilizar REQUST BODY
server.post('/finalizavenda', (req, res) => {

    const { dadosCliente } = req.body;
    
    pratosArray.push(dadosCliente);
    
    return res.json(vendaArray);
})

server.listen(3000);