const express = require('express')
const app = express()
const cors = require('cors')
const port = 4000

app.get('/', (req, res)=>{
    res.send('Hello')
})

app.listen(port, ()=>{
    console.log(`Server is listening on ${port}`);
} )