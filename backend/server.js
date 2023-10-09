const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const  userRoutes = require('./routes/userRoutes')
const bodyParser = require('body-parser')
const { errorHandler, notFound } = require('./middleware/errorMiddleware')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
app.use(bodyParser.json());
app.use('/api/user',userRoutes);
app.use(errorHandler)
app.use(notFound)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})