// 管理员
module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('user', {

        name: {
            type: DataTypes.STRING(20),
            primaryKey: true,
            comment: '用户名'
        },
        password: {
            type: DataTypes.STRING(32),
            comment: 'md5'
        }
        
    }, {
        timestamps: true,
        comment: '用户表'
    });
    return {
        User
    };
}