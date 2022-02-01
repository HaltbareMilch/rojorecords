const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "roxas",
password: "rojo",
database:"rojorecords_tracklist" 
})

module.exports = db;