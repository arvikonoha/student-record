const express = require('express')
const route = express.Router()
const dbConn = require('../../../util/db-config')

route.post('/', async (req, res) => {
  try {
    let {
      usn,
      fname,
      lname,
      department,
      sem
    } = req.body
    let [results] = await dbConn.query(`insert into student values(?,?,?,?,?)`, [usn, fname, lname, department, sem])
    if (results)
      res.redirect("/students")
  } catch (err) {
    console.log(err)
    return res.render('errors', {
      message: err.sqlMessage
    })
  }
})

module.exports = route