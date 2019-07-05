import http from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.server = http.createServer(app)

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.status(200).end('Hello')
})

export default app
