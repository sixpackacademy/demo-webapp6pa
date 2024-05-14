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
    date_time: DataTypes.DATE,
    UserID: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      }
    },
    ServiceID: {
      type: DataTypes.INTEGER,
      references: {
        model: Service,
        key: 'id',
      }
    },
    status: DataTypes.STRING,
    is_aproved: DataTypes.BOOLEAN,
    approved_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ServiceAppointment',
  });
  return ServiceAppointment;
};