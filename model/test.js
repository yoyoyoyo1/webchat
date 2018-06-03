
const {
    sql,
    Sql
} = require('./db')
const tables = require('./tables')
const relations = require('./relations')

sql.sync().then(() => {})

async function x(){
    // let user = await tables.User.findOne({
    //     where:{
    //         name:"pjj"
    //     }
    // })
    // let dialog = await tables.Dialog.findOne({
    //     where:{
    //         title:"hhh"
    //     }
    // })
    let user = await tables.User.create({
        name:'zsj',
        password:"110698"
    })
     await tables.User.create({
        name:'wl',
        password:"110698"
    })
    // let dialog = await tables.Dialog.create({
    //     title:'hhh',
    //     content:'hahahah'
    // })
    // await user.setDialog(dialog)
}
x()

