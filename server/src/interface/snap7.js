const snap7 = require('node-snap7');
const DI = require('./di');

const gate =()=>{

    let s7client = new snap7.S7Client();
    s7client.ConnectTo('192.168.0.201', 0, 3, function(err) {
        if(err)
            return console.log(' >> Connection failed. Code #' + err + ' - ' + s7client.ErrorText(err));

        // Read the first byte from PLC process outputs...
        s7client.ABRead(0, 1, function(err, res) {
            if(err)
                return console.log(' >> ABRead failed. Code #' + err + ' - ' + s7client.ErrorText(err));

            // ... and write it to stdout
            console.log(res)
        });

        const readDI = async ()=>{
            console.time('ReadDB duration');
            const res = await s7client.DBRead(DI.dbNr, DI.dbVars,DI.dbVars,function (err,res){
                if (err)
                    return console.log('error'+err+s7client.ErrorText(err));

            });
            res.forEach(v => console.log(`${v.ident}: ${v.value}`));
            console.timeEnd('ReadDB duration');

        };
        return {readDI}
    });

}


