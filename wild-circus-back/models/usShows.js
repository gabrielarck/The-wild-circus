'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsShows = sequelize.define('UsShows', {
    tilte: DataTypes.STRING,
    description: DataTypes.STRING,
    prix: DataTypes.INTEGER,
    image: DataTypes.STRING,
    dateStart: DataTypes.INTEGER,
    dateEnd: DataTypes.INTEGER
  }, {});
  UsShows.associate = function(models) {
    // associations can be defined here
  };
  return UsShows;
};