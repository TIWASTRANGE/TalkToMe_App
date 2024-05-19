const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const { chats } = require('./data/data');


// creating instance of eexpress called app
const app = express()

// configuring the dotenv to hide important information
dotenv.config()

// creating express server API
app.get('/', (req, res) =>{
    res.send("This our group API on Port 5000")
});

app.get('/api/chat', (req, res) =>{
    res.send(chats)
});

app.get('/api/chat/:id', (req, res) =>{
    // search the chats for a single chat using the id
    const singleChat = chats.find((c) => c._id === req.params.id)
    // chat not existing?
    if(!singleChat){
        res.status(404).send("Chat not found")
    }
    res.send(singleChat)
})

// choosing a Port to run server.
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})
