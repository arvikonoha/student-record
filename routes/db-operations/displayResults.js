const dbConn = require('../../util/db-config')

module.exports = async function displayResults() {

  return new Promise((resolve, reject) => {
    dbConn.query("select * from student", (err, results) => {
      if (err)
        return reject(err)
      console.log(results)
      resolve(results)
    })
  })
}