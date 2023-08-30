// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");
// Chamar a função express
const router = express.Router();

// Criar a rota cadastrar com método post
router.post("/", (req, res) => {
    res.send("Cadastrar mensagem de contato!");
});

// Exportar a instrução que está dentro da constante router 
module.exports = router;