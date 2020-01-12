const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '***REMOVED***',
  user: '***REMOVED***',
  port: 3306,
  password: '***REMOVED***',
  database: '***REMOVED***'
})

connection.connect(err => {
  if (err) {
    console.log(err)
    return
  }
  console.log("Database connected")
})



module.exports = connection