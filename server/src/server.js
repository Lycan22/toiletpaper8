const express = require('express');
const cors = require('cors');
//const gateClient = require('./interface/snap7');
const s7 = require('server/src/interface/s7client');

const app = express();

//app.get('/openGate',cors(),(req,res)=>{
//    let openGate = new gateClient;


//});

app.get('/opens7', cors(),async (req, res) => {
    try {
        await s7().connect();
        await s7().readDI();
    } catch (e) {
        return res.status(500).send('Could not connect to the gate system.')
    }
    res.status(200).send('OK');

});



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
