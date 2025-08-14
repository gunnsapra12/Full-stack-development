// const express = require('express') 
import express from 'express'

const app = express()
const port = 3000

app.use(express.json())



// API 1 create todo
app.post('/insert-todo', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    res.send("to-do created successfully")
})

// API 2 Read a single todo
app.get('/read-todo', (req, res) => {
    console.log(`read to-do = ${req.query.id}`)
    let todoObj = {
        "title": "gym",
        "date": "1 aug 2025"
    }
    res.json(todoObj);
})

// API 3 read all todo
app.get('/read-all', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    let todoArr = [
        {
            "id": 1,
            "name": "ram",
            "rollNo": 123
        },
        {
            "id": 2,
            "name": "shyam",
            "rollNo": 456
        }
    ]
    res.json(todoArr)
})

// API 4 update todo
app.patch('/update-todo', (req, res) => {
    console.log(`user id = ${JSON.stringify(req.query.id)}`)
    console.log(`update data = ${req.body}`)
    res.send("todo updated successfully")
})


// API 5 delete todo
app.delete('/delete-todo', (req, res) => {
    console.log(`delete todo with id = ${req.query.id}`)
    res.send("todo deleted successfully")
})


// start server
app.listen(port, () => {
    console.log(`my server is running at ${port}`)
})