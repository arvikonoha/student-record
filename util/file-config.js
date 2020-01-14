const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join("public", "uploads", "images"))
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + ".jpg")
  }
})
const upload = multer({
  storage
})
module.exports = upload