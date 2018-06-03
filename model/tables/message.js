// 管理员
module.exports = (sequelize, DataTypes) => {
    let Message = sequelize.define('message', {
        message: {
            type: DataTypes.STRING,
            comment: '聊天内容'
        }
    }, {
        timestamps: true,
        comment: '消息表'
    });
    return {
        Message
    };
}