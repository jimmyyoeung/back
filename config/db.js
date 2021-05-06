const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'cj654063-002.dbaas.ovh.net',
  port     : '35305',
  user     : 'gsbyoeung',
  password : 'gsbyoeungSU2020',
  database : 'gsbyoeung'
});

module.exports = connection