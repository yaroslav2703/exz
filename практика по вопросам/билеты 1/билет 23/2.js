const sql = require('mssql/msnodesqlv8');

let config = {driver: "msnodesqlv8", connectionString: "Driver={SQL Server Native Client 11.0};Server={DESKTOP-1JIVBFF\\SQLEXPRESS};Database={MDA};Trusted_Connection={yes};"};

let callGET_PULPITS=(f, _cb)=>{
    const cb = _cb?_cb:(err,result)=>{console.log('default cb');}
    const rq = new sql.Request();
    rq.input('f', sql.VarChar(10), f);
    rq.execute('GET_PULPITS', (err,result)=>{
        proc_result(err,result);
        cb(err,result);
    });
    rq.on('info', message=>{console.log('info', message)});
};

sql.connect(config, err=>{
    if(err) console.log('connection error with DB: ', err.code);
    else{
        console.log('connected');
        callGET_PULPITS('TOV', h);
    }
})

let h = (err,result)=>{
    if(err) console.log('error: ',err);
    else console.log('success!');
    process.exit(0);
}

let proc_result = (err,result)=>{
    if(err) console.log('proc_result error: ', err);
    else{
        console.log(result.recordset);
    }
}