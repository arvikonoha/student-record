const express = require('express')
const route = express.Router()
const insertStudent = require('../../db-operations/insertStudent')

route.post('/', async (req, res) => {
  try {
    let {
      usn,
      fname,
      lname,
      department,
      sem
    } = req.body
    let results = await insertStudent(usn,
      fname,
      lname,
      department,
      sem)
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