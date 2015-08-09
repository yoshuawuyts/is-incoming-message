const test = require('tape')
const http = require('http')
const nets = require('nets')

const isReq = require('./')

test('check if value is an incoming message', function (t) {
  t.plan(1)
  const server = http.createServer(function (req, res) {
    t.ok(isReq(req), 'true')
    res.end()
    server.close()
  })

  server.listen()

  const port = server.address().port
  nets('http://localhost:' + port)
})
