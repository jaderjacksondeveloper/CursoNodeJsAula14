// Normatizar o código, ajuda evitar gambiarras 
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto como modulo
// Como module.exports é possível exportar funções, objetos, variáveis, etc., para serem usados em outras partes do projeto.
module.exports = {

  // Cadastrar o registro na tabela "HomesTops"
  async up (queryInterface) {
    return queryInterface.bulkInsert('HomesTops', [
      {
        titleOneTop: 'Temos a solução',
        titleTwoTop: 'que a sua empresa precisa',
        titleThreeTop: 'Podemos ajudar a sua empresa!',
        linkBtnTop: 'http://localhost:8080/contato',
        textBtnTop: 'Entre em Contato',
        imageTop: 'banner_top_v5.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  // Limpar os registros da tabela "HomesTops"
  async down (queryInterface) {
    await queryInterface.bulkDelete('HomesTops', null, {});
  }
};
