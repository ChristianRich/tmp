import 'babel-polyfill'
import http from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import WooliesService from './services/woolies-service'

const app = express()
app.server = http.createServer(app)

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', async (req, res) => {
  const s = new WooliesService()
  const x = await s.getShopperHistory()
  res.status(200).json(x)
})

app.get('/user', (req, res) =>
  res.status(200).json({
    name: 'test',
    token: '1234-455662-22233333-3333',
  })
)

app.server.listen(process.env.PORT || 3000, () =>
  console.log(`Express server started on port ${app.server.address().port}`)
)
