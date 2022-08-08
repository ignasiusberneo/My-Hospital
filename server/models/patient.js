'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Patient.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Name is required"},
        notEmpty: {msg: "Name is required"},
      }
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Sex is required"},
        notEmpty: {msg: "Sex is required"},
      }
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Religion is required"},
        notEmpty: {msg: "Religion is required"},
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Phone is required"},
        notEmpty: {msg: "Phone is required"},
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Address is required"},
        notEmpty: {msg: "Address is required"},
      }
    },
    nik: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: "NIK already exist"},
      validate: {
        notNull: {msg: "NIK is required"},
        notEmpty: {msg: "NIK is required"},
        len: {
          args: [16, 16],
          msg: "Invalid NIK"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};