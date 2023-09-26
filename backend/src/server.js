const express = require('express');
const morgan = require('morgan'); 


const server = express();
const port = 3000;

server.get("/", (req, res)=>{
    res.send("works!")
});

server.use(morgan('dev'));

server.listen(port, ()=>{
    console.log(`Server running on port `,port);
});

module.exports = server;