// Normatizar o código, ajuda evitar gambiarras 
'use strict';

// Incluir as bibliotecas
// Criar a constante para receber a MODEL do Sequelize para usar como herança na classe
const { Model } = require('sequelize');

// Exportar a função como modulo
// Como module.exports é possível exportar funções, objetos, variáveis, etc., para serem usados em outras partes do projeto.
module.exports = (sequelize, DataTypes) => {

  // Criar a classe com o nome da tabela "HomesTops" e usar extends para trabalhar com herança, usar como herança a MODEL importada acima
  class HomesTops extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // Criar o relacionamento entre as tabelas
    static associate(models) {
      // define association here
    }
  }

  // Criar as colunas que a MODELS pode manipular
  HomesTops.init({
    titleOneTop: DataTypes.STRING,
    titleTwoTop: DataTypes.STRING,
    titleThreeTop: DataTypes.STRING,
    linkBtnTop: DataTypes.STRING,
    textBtnTop: DataTypes.STRING,
    imageTop: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomesTops',
  });

  // Retornar a classe HomesTops
  return HomesTops;
};