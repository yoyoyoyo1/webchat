const fs = require('fs')
let handle = {}
module.exports = (res, req) => {

    let files = fs.readdirSync(__dirname);
    for (let f of files) {
        if (f[0] == '.' || f == 'index.js') continue;
        try {
            let x = require('./' + f);
            handle[x.route] = x.func
        } catch (e) {
            console.log(e);
        }
    }
    return handle
}