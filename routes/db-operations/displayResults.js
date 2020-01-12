const dbConn = require('../../util/db-config')

module.exports = async function updateStudent() {
  dbConn.query("select * from student", (err, results) => {
    if (err)
      return Promise.reject(err)
    else
      return Promise.resolve(results)
  })
}