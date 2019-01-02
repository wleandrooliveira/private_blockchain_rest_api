# Private BlockChain Rest Api"

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
when run node server.js by first time, you see this messagem in prompt or terminal

Server listening on port 5001, Ctrl+C to stop
New hash: 128dbb2a737629eba57c1dffd15facdf7ddd69f8d2145d5c5f241c604b95a3e1
Added block #0
Genesis block added!
```

# RESTful API Endpoint

## Get Block

**Method**: GET

**URL**: `/block/:blockHeight`

In this Request has used postman

Example:
```
http://localhost:5001/block/0

**Success Response**
* Code: 200 OK
* Content: JSON object of the block

{
    "height": 0,
    "timeStamp": "",
    "body": "First block in the chain - Genesis block",
    "previousBlockHash": "",
    "hash": "128dbb2a737629eba57c1dffd15facdf7ddd69f8d2145d5c5f241c604b95a3e1",
    "time": "1546445532"
}
```
**Method**: GET

**URL**: `/`

In this Request has used postman

Example:
```
http://localhost:5001/

**Error Response**
* Code: 404 Not Found

{
    "status": 404,
    "message": "Accepted endpoints: POST /block or GET /block/{BLOCK_HEIGHT}"
}
```

## Add Block

Add a new block with string data to the Blockchain

**Method**: POST

**URL**: `/block`

**Data**:
* key: body
* value: string

Example:
```
http://localhost:5001/block
data:

{
    body: "Hello, Blockchain!"
}
```

**Success Response**
* Code: 200 OK

**Error Response**
* Code: 400 Bad Request