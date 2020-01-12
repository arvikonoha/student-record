const mysql = require('mysql')

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST || "db4free.net",
  user: process.env.DATABASE_USER || "arvikonoha",
  port: process.env.DATABASE_PORT || "3306",
  password: process.env.DATABASE_PASSWORD || "nevergivup99",
  database: process.env.DATABASE_NAME || "student_records"
})

connection.connect(err => {
  if (err) {
    console.log(err)
    return
  }

  console.log("Database connected")
})

module.exports = connection