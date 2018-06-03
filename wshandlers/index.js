const {
    sql,
    Sql
} = require('../model/db')
const tables = require('../model/tables')
const relations = require('../model/relations')
const WebSocket = require('ws')

module.exports = (server,CONNS) => {

    tables.Dialog.findAll({
        attributes: ['title'],
        raw: true
    }).then((dialogs) => {
        for (let i = 0; i < dialogs.length; i++) {
            CONNS[dialogs[i].title] = {}
        }
    })

    const wss = new WebSocket.Server({
        server
    })
    // 支持websocket的handler，即消息路由

    // session

    wss.on('connection', async function connection(ws, req) {

        await require('./init')(req, tables, CONNS, ws)
        ws.broadcast("上线")
        /**
        消息路由
        */
        ws.on('message', /*这里不可以用lambda*/ function incoming(message) {

            tables.Message.create({
                dialogTitle: this.room.title,
                message: message,
                userName: this.user.name
            })

            ws.broadcast(message)

        })
        /**
        当连接断开时进行处理
        连接池清理
        对象清理
        */
        ws.on('close', function () {
            delete CONNS[this.room.title][this.user.name]
            this.broadcast(this.user.name + "掉线")
        })

    })
}