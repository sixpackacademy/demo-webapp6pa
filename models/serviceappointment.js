const models = require('../models');
const User = models.User;
const Service = models.Service;

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceAppointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ServiceAppointment.init({
    date_time: {type: DataTypes.DATE, allowNull: false},
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      }
    },
    ServiceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Service,
        key: 'id',
      }
    },
    status: {type: DataTypes.STRING, defaultValue: "Pendente"},
    is_aproved: {type: DataTypes.BOOLEAN, defaultValue: false},
    approved_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ServiceAppointment',
  });
  return ServiceAppointment;
};