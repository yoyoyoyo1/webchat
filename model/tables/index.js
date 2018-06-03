const {
    sql, Sql
  } = require('../db.js');
  const fs = require('fs');
  
  
  let models = {};
  
  let files = fs.readdirSync(__dirname);
  for (let f of files) {
    if (f[0] == '.' || f == 'index.js') continue;
    try {
      let fn = require('./' + f);
      if (typeof fn == 'function') {
        let ms = fn(sql, Sql);
        for (let k in ms) {
          models[k] = ms[k];
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
  module.exports = models;
  