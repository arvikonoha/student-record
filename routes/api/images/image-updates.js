const express = require("express");
const route = express.Router();
const upload = require("../../../util/file-config");
const modifyStudent = require("../../../models/db-operations/student/modifyStudent");

route.post("/api/image/:usn", upload.single("stdimg"), async (req, res) => {
  try {
    let {
      usn
    } = req.params
    let {
      filename
    } = req.file;
    let isDeleted = await modifyStudent.deleteImage(usn)
    if (isDeleted) {
      let isUpdated = await modifyStudent.updateImage(filename, usn)
      if (isUpdated)
        return res.redirect("/students");
    }
  } catch (err) {
    console.log(err);
    res.render("errors", {
      message: err.sqlMessage
    });
  }
});

module.exports = route