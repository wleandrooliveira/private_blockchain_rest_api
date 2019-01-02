# Private BlockChain Rest Api"
================= 
Web service for a simple private Blockchain implemented using `Node.js` and `Express` framework  -- project @ Udacity's Blockchain Developer Nanodegree

The API project file server.js include two endpoints:

Get block

```
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
```
Post block
```
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
```

# Get started

1) Download project

```
$ git clone https://github.com/wleandrooliveira/private_blockchain_rest_api.git
```
2) Install dependencies

```
$ cd private_blockchain_rest_api
$ npm install
```
3) Run application

```
$ node server.js
```


