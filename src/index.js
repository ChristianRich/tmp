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

import WooliesService from './services/woolies'

app.get('/', async (req, res) => {
  const s = new WooliesService()
  const x = await s.getShopperHistory()
  res.status(200).json(x)
})

app.server.listen(process.env.PORT || 3000, () =>
  console.log(`Express server started on port ${app.server.address().port}`)
)
