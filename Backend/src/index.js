require('dotenv').config()
const http = require('http')
const PORT = process.env.PORT

const express = require('express')

const app = express()

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`)
})