require('dotenv').config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

/* needs to be agreeable for both my pc and HEROKU */
const port = process.env.PORT || 4000;




const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/api/greeting", (req, res) => {
  res.status(200).json(`Hello, ${req.query.name}! How are you?`);
});

server.use((req,res)=>{
    res.json(`This API is alive!`)
})

server.listen(port,()=>{
    console.log(`Listening on ${port}`);
    
})
