// 管理员
module.exports = (sequelize, DataTypes) => {
    let Dialog = sequelize.define('dialog', {

        title: {
            type: DataTypes.STRING(20),
            primaryKey: true,
            comment: '标题'
        },
        content: {
            type: DataTypes.STRING,
            comment: '对聊天室的主要说明'
        }

    }, {
        timestamps: true,
        comment: '对话表'
    });
    return {
        Dialog
    };
}