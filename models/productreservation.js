const models = require('../models')
const User = models.User;
const Product = models.Product;

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductReservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductReservation.init({
    UserID: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      }
    },
    ProductID: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id'
      }
    },
    status: DataTypes.STRING,
    is_aproved: DataTypes.BOOLEAN,
    approved_by: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductReservation',
  });
  return ProductReservation;
};