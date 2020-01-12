const mysql = require('mysql')
const promisifier = require('./promisifier')
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
})

connection.connect(err => {
  if (err) {
    console.log(err)
    return
  }

  console.log("Database connected")
})

module.exports = connection