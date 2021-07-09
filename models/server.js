const express = require('express')
const cors = require('cors')

class Server {
  constructor () {
    this.app = express()

    this.port = process.env.PORT

    this.usersPath = '../routes/user'

    // middlewares
    this.middlewares()
    // routes app
    this.routes()
  }

  middlewares () {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.static('public'))
  }

  routes () {
    this.app.use('/api/users', require(this.usersPath))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log('server running on port %s', this.port)
    })
  }
}

module.exports = Server
