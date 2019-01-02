const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Block = require('./src/app/Block')
const Blockchain = require('./src/app/BlockChain')
const chain = new Blockchain()
const config = require('./src/config/config')


// Server setup
app.listen(config.port, () => {
    console.log('Server listening on port %s, Ctrl+C to stop', config.port)
});



app.use(bodyParser.json())
app.get('/', (req, res) => res.status(404).json({
  "status": 404,
  "message": "Accepted endpoints: POST /block or GET /block/{BLOCK_HEIGHT}"
}))


app.get('/block/:height', async (req, res) => {
  try {
    const response = await chain.getBlock(req.params.height)
    res.send(response)
  } catch (error) {
    res.status(404).json({
      "status": 404,
      "message": "Block not found"
    })
  }
})


app.post('/block', async (req, res) => {
  if (req.body.body === '' || req.body.body === undefined) {
    res.status(400).json({
      "status": 400,
      message: "Fill the body parameter"
    })
  }

  await chain.addBlock(new Block(req.body.body))
  const height = await chain.getBlockHeight()
  const response = await chain.getBlock(height)

  res.status(201).send(response)
})