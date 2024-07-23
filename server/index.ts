import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import cors from 'cors'
import api from './api'
import morgan from 'morgan'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use('/api', api)
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
})

mongoose.connect(process.env.MONGODB_CONNECTION_STR || 'mongodb://localhost:27017/local')

const db = mongoose.connection

db.on('error', console.log.bind(console, 'connection error: '))
db.once('open', () => {
  console.log('Connected to Mongo DB')

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
})
