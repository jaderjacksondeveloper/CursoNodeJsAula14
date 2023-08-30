// Incluir as bibliotecas
// Gerencia as requisições, rotas e URLs, entre outra funcionalidades
const express = require("express");
// Incluir o arquivo que possui a conexão com banco de dados
const db = require('./../db/models');
// Chamar a função express
const router = express.Router();

// Criar a rota visualizar os dados da página home com método get
// Endereço para acessar através da aplicação externa: http://localhost:8080/home
router.get("/", async (req, res) => {

    // Recuperar o registro do banco de dados
    const homesTops = await db.HomesTops.findOne({

        // Indicar quais colunas recuperar
        attributes: ['titleOneTop', 'titleTwoTop', 'titleThreeTop', 'linkBtnTop', 'textBtnTop', 'imageTop'],

        // Acrescentar condição para indicar qual registro deve ser retornado do banco de dados
        //where: { id: 100}
    });

    // Acessa o IF se encontrar o registro no banco de dados
    if (homesTops) {
        return res.json({
            error: false,
            homesTops
        });
    } else {
        return res.status(400).json({
            error: true,
            message: "Erro: Não encontrado conteúdo da página home do site!"
        });
    }

});

// Exportar a instrução que está dentro da constante router 
module.exports = router;