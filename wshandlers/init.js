const url = require('url')
const qs = require('querystring')

module.exports = async (req, tables, CONNS, ws) => {
    req.CONNS = CONNS

    let user = qs.parse(url.parse(req.url).query)
    
    let userP = tables.User.findOne({
        where: {
            name: user.name
        }
    })

    let roomP = tables.Dialog.findOne({
        where: {
            title: user.room
        }
    })
    
    ws.user = await userP
    ws.room = await roomP
    ws.broadcast = require('./broadcast')(CONNS)

    if(!await ws.user.hasDialog(ws.room)) ws.user.addDialog(ws.room)

    CONNS[ws.room.title][ws.user.name] = ws

    //这里是进入后获取 未读消息
    let messages = await ws.room.getMessages({ raw: true, attributes: [ ['userName', 'name'],'message'] })

    for(let i = 0;i<messages.length;i++){
        ws.send(JSON.stringify(messages[i]))
    }

}

