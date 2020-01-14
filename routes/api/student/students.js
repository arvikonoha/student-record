const express = require('express')
const route = express.Router()
const displayResults = require('../../db-operations/displayResults')

route.get('/', async (req, res) => {
  try {
    let results = await displayResults()
    console.log(results)
    return res.render('students', {
      students: results
    })
  } catch (err) {
    console.log(err.stack)
    return
  }
})

module.exports = route