module.exports={
    func : dialog,
    route :'/postDialog/'
}

async function dialog(res,req){
    var post = ''
    const Op = res.Sql.Op
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function (chunk) {
        post += chunk
    })
    
    req.on('end', async function () {
    
        post = JSON.parse(post)
        let dialog = await res.tables.Dialog.create({
            title: post.title,
            content: post.content,
            userName: post.owner
        })

        res.CONNS[dialog.title] = {}

        post.users.push({
            name: post.owner
        })
    
        let users = await res.tables.User.findAll({
            where: {
                [Op.or]: post.users
            },
        })
    
        for (let i = 0; i < users.length; i++) {
            users[i].addDialog(dialog)
        }
        res.end("ok")
    })
}