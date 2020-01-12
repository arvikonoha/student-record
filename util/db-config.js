const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'db4free.net',
  user: 'arvikonoha',
  port: 3306,
  password: 'nevergivup99',
  database: 'student_records'
})

connection.connect(err => {
  if (err) {
    console.log(err)
    return
  }
  console.log("Database connected")
})



module.exports = connection