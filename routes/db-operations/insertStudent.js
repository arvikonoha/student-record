const dbConn = require('../../util/db-config')

module.exports = async function insertStudent() {
  return new Promise((resolve, reject) => {
    let {
      usn,
      fname,
      lname,
      department,
      sem
    } = req.body
    dbConn.query(`insert into student values(?,?,?,?,?)`, [usn, fname, lname, department, sem], (err, result) => {
      if (err)
        return reject(err)
      console.log(result)
      resolve(result)
    })
  })
}