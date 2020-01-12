const express = require('express')
const route = express.Router()
const dbConn = require('../../../util/db-config')

route.post('/', (req, res) => {
  let {
    usn,
    fname,
    lname,
    department,
    sem
  } = req.body
  dbConn.query(`insert into student values(?,?,?,?,?)`, [usn, fname, lname, department, sem], (err, results) => {
    if (err) {
      return res.render('errosrs', {
        message: err.sqlMessage
      })
    }
    res.redirect("/students")
  })
})

module.exports = route