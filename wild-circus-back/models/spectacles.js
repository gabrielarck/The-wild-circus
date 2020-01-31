'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spectacles = sequelize.define('Spectacles', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    prix: DataTypes.INTEGER,
    image: DataTypes.STRING,
    dateStart: DataTypes.STRING,
    dateEnd: DataTypes.STRING
  }, {});
  Spectacles.associate = function(models) {
    // associations can be defined here
  };
  return Spectacles;
};