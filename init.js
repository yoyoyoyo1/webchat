const qs = require('querystring')
const http = require('http')
const url = require('url')

const {
    sql,
    Sql
} = require('./model/db')
const tables = require('./model/tables')
const relations = require('./model/relations')

sql.sync().then(() => {})

module.exports = (res,req,CONNS) => {
    res.sql = sql
    res.Sql = Sql
    res.tables = tables
    res.relations = relations
    res.CONNS = CONNS
    
    var requestUrl = req.url;
    //url模块的parse方法 接受一个字符串，返回一个url对象,切出来路径
    var pathName = url.parse(requestUrl).pathname
  
    //对路径解码，防止中文乱码
    var pathName = decodeURI(pathName)
    res.pathName = pathName

    let user = qs.parse(url.parse(requestUrl).query)
    res.user = user
}
