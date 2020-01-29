'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spectacles = sequelize.define('Spectacles', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    prix: DataTypes.INTEGER,
    image: DataTypes.STRING,
    dateStart: DataTypes.INTEGER,
    dateEnd: DataTypes.INTEGER
  }, {});
  Spectacles.associate = function(models) {
    // associations can be defined here
  };
  return Spectacles;
};