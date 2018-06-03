let models = require('../tables');
module.exports = (sequelize, DataTypes) => {
  const UserDialog = sequelize.define('userDialog', {

  })

  models.User.belongsToMany(models.Dialog, { through: UserDialog })
  models.Dialog.belongsToMany(models.User, { through: UserDialog })
  
  models.User.hasOne(models.Dialog)

  return {
    UserDialog
  };
}