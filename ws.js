const http = require('http')
const handle = require('./router')()

const CONNS = {}

const server = http.createServer(async (request, response) => {

  require('./init')(response, request, CONNS) //初始化res

  if (handle[response.pathName]) { //路由
    handle[response.pathName](response, request)
    return
  }

  require('./static')(response, request) //静态文件服务器

})

require('./wshandlers/index')(server, CONNS)

server.listen(8765, function listening() {
  console.log('监听 %d', server.address().port)
});