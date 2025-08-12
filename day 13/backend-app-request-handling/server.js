// import express module
const express = require('express');

// initialize app with express function
const app = express();

// define port
const port = 3000;

// parse the request body (middleware)
app.use(express.json());

// API section
app.post('/insert-user', (request, response) => {
    console.log(`Request received is = ${JSON.stringify(request.body)}`);
    response.send('User inserted successfully');
});
// create an api below to send request body in sequence
app.post('/insert-user-1',(request,response)=>{
    console.log(`request receievd is =${JSON.stringify(request.body)}`)
    response.send(`${JSON.stringify(request.body)}`)

})
app.post('/insert-user-2',(request,response)=>{
    console.log(`request receievd is =${JSON.stringify(request.body)}`)
    response.send((request.body))
})
app.post('/insert-person',(request,response)=>{
    console.log(`person name is =${JSON.stringify(request.body)}`)
     response.send("person name is " + request.body.personName)
})
app.post('/insert2-person',(request,response)=>{
    console.log(`person name is =${JSON.stringify(request.body)}`)
     response.json(request.body.address)
})

// start server
app.listen(port, () => {
    console.log(`Server is started at port ${port}`);
});
