const http = require('http')
const express = require('express')
const app = express()
const { connection } = require('./Config/database')
require('dotenv').config()
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')


//CORS 
var corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.urlencoded())
app.use(bodyParser.urlencoded({ extended: true }))
  // DB CONNECTION
  ; (async () => await connection())()

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.json(['SERVER IS LIVE!'])
})

app.use(express.json())
routes.map(route => {
  app.use(route.path, route.handler)
})


const PRT = process.env.PORT || 4001
app.listen(PRT, () => {
  console.log(
    `________________________________\n 🚀 Server running on PORT ${PRT}\n________________________________\n`
  )
})

