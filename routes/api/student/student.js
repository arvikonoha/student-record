const express = require("express");
const route = express.Router();
const upload = require("../../../util/file-config");
const modifyStudent = require("../../../models/db-operations/student/modifyStudent");

route.post("/api/student", upload.single("stdimg"), async (req, res) => {
  try {
    let {
      usn,
      fname,
      lname,
      department,
      sem
    } = req.body;
    let {
      filename
    } = req.file;
    let results = await modifyStudent.insertStudent(
      usn,
      fname,
      lname,
      department,
      sem,
      filename
    );
    if (results) return res.redirect("/students");
  } catch (err) {
    console.log(err);
    res.render("errors", {
      message: err.sqlMessage
    });
  }
});

route.post("/api/student/:oldusn", async (req, res) => {
  try {
    let {
      usn,
      fname,
      lname,
      department,
      sem
    } = req.body;
    let {
      oldusn
    } = req.params;
    let results = await modifyStudent.updateStudent(
      usn,
      fname,
      lname,
      department,
      sem,
      oldusn
    );
    if (results) return res.redirect("/students");
  } catch (err) {
    console.log(err);
    res.render("errors", {
      message: err.sqlMessage
    });
  }
});

module.exports = route;