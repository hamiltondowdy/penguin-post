const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

    Post.init(
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          post_content: {
            type: DataTypes.STRING(281),
            allowNull: false,
            validate: {
              len: [2]
            }
          },
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
          }
        },
        {
          sequelize,
          freezeTableName: true,
          underscored: true,
          modelName: 'post'
        }
      );

module.exports = Post;

