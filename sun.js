const express = require('express')
const bodyParser = require(  'body-Parser')
const { response } = require('express')
const app=express()
const port = 3000

app.use (bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
)
app.get('/', (req,res)=>{
    response.json({ info:'node.js'})
})
const server = app.listen(5000, function () {
    let host = server.address().address
    let port = server.address().port
})
