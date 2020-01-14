const dbConn = require('../../../util/db-config')
const path = require('path')
const fs = require("fs")

module.exports.insertStudent = async function (usn,
  fname,
  lname,
  department,
  sem, filename) {
  return new Promise((resolve, reject) => {
    dbConn.query(`insert into student values(?,?,?,?,?,?)`, [usn, fname, lname, department, sem, path.join("uploads", "images", filename)], (err, result) => {
      if (err)
        return reject(err)
      resolve(result)
    })
  })
}

module.exports.updateStudent = async function (usn,
  fname,
  lname,
  department,
  sem, oldusn) {
  return new Promise((resolve, reject) => {
    dbConn.query(`update student set usn=?,fname=?,lname=?,department=?,sem=? where usn=?`, [usn, fname, lname, department, sem, oldusn], (err, result) => {
      if (err)
        return reject(err)
      resolve(result)
    })
  })
}

module.exports.deleteImage = async function (usn) {
  return new Promise((resolve, reject) => {
    dbConn.query("select imageurl from student where usn=?", [usn], (err, result) => {
      if (err)
        reject(err)
      else {
        let [{
          imageurl
        }] = result
        fs.unlink(path.join("public", imageurl), (err) => {
          if (err)
            reject(err)
          else {
            return resolve({
              done: true
            })
          }
        })
      }
    })
  })
}

module.exports.updateImage = async function (filename, usn) {
  return new Promise((resolve, reject) => {
    dbConn.query("update student set imageurl=? where usn=?", [path.join("uploads", "images", filename), usn], (err, result) => {
      if (err)
        return reject(err)
      return resolve(result)
    })
  })
}