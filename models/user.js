"use strict";
const { Model } = require("sequelize");
const card = require("./card");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(card);
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
