const dbConn = require('../../util/db-config')

module.exports = async function insertStudent() {
  let {
    usn,
    fname,
    lname,
    department,
    sem
  } = req.body
  dbConn.query(`insert into student values(?,?,?,?,?)`, [usn, fname, lname, department, sem], (err, result) => {
    if (err)
      return Promise.reject(err)
    else
      return Promise.resolve(result)
  })
}