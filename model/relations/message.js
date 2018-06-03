let models = require('../tables');
module.exports = (sequelize, DataTypes) => {

  models.Dialog.hasMany(models.Message)
  
  models.Message.belongsTo(models.Dialog)
  models.User.hasOne(models.Message)


  return {
  };
}