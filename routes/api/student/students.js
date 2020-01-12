const express = require('express')
const route = express.Router()
const dbconn = require('../../../util/db-config')

route.get('/', (req, res) => {
  dbconn.query("select * from student", (err, results) => {
    if (err) {
      console.log(err.stack)
      return
    }
    res.render('students', {
      students: results
    })
  })
})

module.exports = route