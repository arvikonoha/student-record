const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index')
})

app.use('/api/student', require('./routes/api/student/student'))
app.use('/students', require('./routes/api/student/students'))

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening to the port ${process.env.PORT||3000}`)
})