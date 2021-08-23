const {S7Client} = require('s7client');
const DI = require('./di');
const AI = require('./ai');

let diList = [];
let aiList = [];


const Client = () => {
    const plcSettings = {
        name: "LocalPLC",
        host: '192.168.0.201',
        port: 102,
        rack: 0,
        slot: 3
    };


    let client = new S7Client(plcSettings);
    client.on('error', console.error);

    const connect = async ()=>{
        const cpuInfo = await client.connect();
        console.log(cpuInfo);
        console.log("\n");
    };

    const readDI = async ()=>{
        console.time('ReadDB duration');
        const res = await client.readDB(DI.dbNr, DI.dbVars);
        res.forEach(v => console.log(`${v.ident}: ${v.value}`));
        console.timeEnd('ReadDB duration');
        //res.toJSON(diList);
        //diList.push(res);
        JSON.stringify(diList);
        console.log('success'+diList);

    };

    const readAI = async ()=>{
        console.time('ReadAI duration');
        const res = await client.readDB(AI.dbNr, AI.dbVars);
        res.forEach(v => console.log(`${v.ident}: ${v.value}`));
        console.timeEnd('ReadDB duration');
        await res.json(aiList);
        console.log('success'+aiList);

    };

    const disconnect = () => {
        console.log('Disconnecting form the s7 client');
        client.disconnect();
    };

    return {connect,disconnect,readDI,readAI}
};

module.exports = Client;

/*
// PLC Connection Settings
const plcSettings = {
    name: "LocalPLC",
    host: '192.168.0.201',
    port: 102,
    rack: 0,
    slot: 3
};

// DBA to read
let dbNr = 10;
let dbVars = [
    {
        ident: "BOOL Bit 0",
        type: "BOOL",
        start: 0,
        bit: 0
    },
    {
        ident: "BOOL Bit 7",
        type: "BOOL",
        start: 0,
        bit: 7
    },
];


let client = new S7Client(plcSettings);
client.on('error', console.error);

(async function() {
    const cpuInfo = await client.connect();
    console.log(cpuInfo);
    console.log("\n");

    console.time('ReadDB duration');
    const res = await client.readDB(dbNr, dbVars);
    res.forEach(v => console.log(`${v.ident}: ${v.value}`));
    console.timeEnd('ReadDB duration');

    client.disconnect();
})();

*/
