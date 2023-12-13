"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Watches extends Model {
    static associate(models) {}
  }
  Watches.init(
    {
      name: {
        llowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        llowNull: false,
        type: DataTypes.INTEGER,
      },
      img: {
        llowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Watches",
    }
  );
  return Watches;
};
