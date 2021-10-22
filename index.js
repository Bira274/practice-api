const express = require ('express');
const app = express();

// make a request
app.get('/',(req, res) => {
    return res.json({message: 'Hello world!'})
})

// spin up express server
app.listen(3000, () => {
    console.log('Server is running')
})