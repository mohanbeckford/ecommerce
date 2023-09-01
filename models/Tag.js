// loads modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}
//initializes tag table in databse
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
//exports table tag
module.exports = Tag;
