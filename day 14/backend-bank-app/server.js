// const express = require('express') 
import express from 'express'
import connectToDatabase from './db.js'

const app = express()
const port = 3000

app.use(express.json())

let db;

// start server
app.listen(port, async () => {
    console.log(`my server is running at port ${port}`)
    db = await connectToDatabase('bank-db')
})


/*
API 1: Insert Account in Database

http method -> post
url -> '/create-account'
request -> body {
            'accountNo': '123ABC',
            'userName': 'dheeraj',
            'userNo': 12312213
        }
response - status = 201 body = {
                            'msg': 'account inserted successfully
                        }
*/

app.post('/create-account', async (req, res) => {
    try {
        let userAccountData = req.body;
        console.log(`request body ${JSON.stringify(userAccountData)}`)
        await db.collection('account').insertOne(userAccountData);
        res.status(201).json({
            msg: 'account inserted succesfully'
        })
    } catch (error) {
        res.status(500).send({
            error: error.message

        })
    }
})

app.get('/test-api', (req, res) => {
    console.log(`request is ${JSON.stringify(req.body)}`)
    res.send("api is up")
})