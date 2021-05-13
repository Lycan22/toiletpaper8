const express = require('express');
const cors = require('cors');
const gateClient = require('./interface/snap7');

const app = express();

app.get('/client',cors(),(req,res)=>{
    let openGate = new gateClient

})


app.get('/api/customers', cors(), (req, res) => {
    const customers = [
        {id: 1, db: '100', lastName: 'run'},
        {id: 2, db: '100', lastName: 'stop'},
        {id: 3, db: '100', lastName: 'transit'},
    ];

    res.json(customers);
});


const port =5000;

app.listen(port,() => console.log(`Server started on port ${port}`));
