const dbConn = require('../../util/db-config')

module.exports = async function insertStudent(usn,
  fname,
  lname,
  department,
  sem) {
  return new Promise((resolve, reject) => {

    dbConn.query(`insert into student values(?,?,?,?,?)`, [usn, fname, lname, department, sem], (err, result) => {
      if (err)
        return reject(err)
      console.log(result)
      resolve(result)
    })
  })
}