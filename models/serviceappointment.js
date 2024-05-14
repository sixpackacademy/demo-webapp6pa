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
    UserID: DataTypes.INTEGER,
    ServiceID: DataTypes.INTEGER,
    status: DataTypes.STRING,
    is_aproved: DataTypes.BOOLEAN,
    approved_by: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ServiceAppointment',
  });
  return ServiceAppointment;
};