const express = require('express')
const route = express.Router()
const dbconn = require('../../../util/db-config')

route.get('/', async (req, res) => {
  try {
    let [results] = await dbconn.query("select * from student")
    res.render('students', {
      students: results
    })
  } catch (err) {
    console.log(err.stack)
    return
  }
})

module.exports = route