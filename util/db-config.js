const mysql = require('mysql')

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST || "***REMOVED***",
  user: process.env.DATABASE_USER || "***REMOVED***",
  port: process.env.DATABASE_PORT || "3306",
  password: process.env.DATABASE_PASSWORD || "***REMOVED***",
  database: process.env.DATABASE_NAME || "***REMOVED***"
})

connection.connect(err => {
  if (err) {
    console.log(err)
    return
  }

  console.log("Database connected")
})

module.exports = connection