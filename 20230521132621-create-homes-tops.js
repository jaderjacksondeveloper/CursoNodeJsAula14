// Normatizar o código, ajuda evitar gambiarras 
'use strict';

/** @type {import('sequelize-cli').Migration} */

// Exportar o objeto como modulo
// Como module.exports é possível exportar funções, objetos, variáveis, etc., para serem usados em outras partes do projeto.
module.exports = {

  // Criar a tabela HomesTops com as colunas implementas abaixo
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HomesTops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titleOneTop: {
        type: Sequelize.STRING
      },
      titleTwoTop: {
        type: Sequelize.STRING
      },
      titleThreeTop: {
        type: Sequelize.STRING
      },
      linkBtnTop: {
        type: Sequelize.STRING
      },
      textBtnTop: {
        type: Sequelize.STRING
      },
      imageTop: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  // Executar rollback - Permite que seja desfeita a migration, permitindo a gestão das alterações do banco de dados e versionamento.
  async down(queryInterface) {
    await queryInterface.dropTable('HomesTops');
  }
};