const sql = require('mssql/msnodesqlv8');

let config = {driver: "msnodesqlv8", connectionString: "Driver={SQL Server Native Client 11.0};Server={DESKTOP-1JIVBFF\\SQLEXPRESS};Database={MDA};Trusted_Connection={yes};"};

let dbins=(f,fn, _cb)=>{
    const cb = _cb?_cb:(err,result)=>{console.log('default cb');}
    const ps = new sql.PreparedStatement();
    ps.input('f', sql.VarChar(10));
    ps.input('fn', sql.VarChar(50));
    ps.prepare('insert FACULTY(FACULTY, FACULTY_NAME) values(@f,@fn);', err=>{
        if(err) cb(err,null);
        else ps.execute({f:f,fn:fn}, (err,result)=>{
            if(err) cb(err,null);
            else cb(null,result);
        })
    })
};

sql.connect(config, err=>{
    if(err) console.log('connection error with DB: ', err.code);
    else{
        console.log('connected');
        dbins('PLN', 'POLINA', (err,result)=>{});
    }
})