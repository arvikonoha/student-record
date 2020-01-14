const dbConn = require('../../../util/db-config')

module.exports.displayStudents = async function () {

  return new Promise((resolve, reject) => {
    dbConn.query("select * from student", (err, results) => {
      if (err)
        return reject(err)
      resolve(results)
    })
  })
}

module.exports.displayStudent = async function (usn) {

  return new Promise((resolve, reject) => {
    dbConn.query("select * from student where usn=?", [usn], (err, results) => {
      if (err)
        return reject(err)
      resolve(results)
    })
  })
}