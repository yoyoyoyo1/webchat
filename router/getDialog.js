module.exports = {
    func: dialog,
    route: '/getDialog/'
}

async function dialog(res,req) {
    
    let dialogs = await res.relations.UserDialog.findAll({
        where: {
            userName: res.user.name
        },
        attributes: [
            ['dialogTitle', 'room']
        ],
        raw: true
    })

    for (let i = 0; i < dialogs.length; i++) {
        dialogs[i].num = (await res.tables.Message.findAll({
            where: {
                dialogTitle: dialogs[i].room
            },
            attributes: [],
            raw: true
        })).length
    }
    res.end(JSON.stringify(dialogs))
}