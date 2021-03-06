import 'babel-polyfill'
import http from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import WooliesService from './services/woolies-service'
import WooliesRepo from './repos/woolies-repo'

const app = express()
app.server = http.createServer(app)

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Exercise 1
app.get('/api/answers/user', (req, res) =>
  res.json({
    name: 'test',
    token: '1234-455662-22233333-3333',
  })
)

// Exercise 2
app.get('/api/answers/sort', async (req, res) => {
  try {
    const service = new WooliesService({
      wooliesRepo: new WooliesRepo(),
    })

    res.json(await service.sortProducts(req.query.sortOption))
  } catch (e) {
    res.json(e)
  }
})

app.server.listen(process.env.PORT || 3000, () =>
  console.log(`Express server started on port ${app.server.address().port}`)
)
