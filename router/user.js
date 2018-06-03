module.exports = {
    func: user,
    route: '/user/'
}

async function user(res,req) {
    const Op = res.Sql.Op

    let users = await res.tables.User.findAll({
        attributes: ['name'],
        where: {
            [Op.not]: [{
                name: res.user.name
            }]
        },
        raw: true
    })
    
    res.end(JSON.stringify(users))

}