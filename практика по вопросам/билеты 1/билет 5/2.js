const sql = require('mssql/msnodesqlv8');

let config = {driver: "msnodesqlv8", connectionString: "Driver={SQL Server Native Client 11.0};Server={DESKTOP-1JIVBFF\\SQLEXPRESS};Database={MDA};Trusted_Connection={yes};"};

let dbsel=()=>{
    new sql.Request().query('SELECT FACULTY FROM FACULTY;', processing_result)
};

sql.connect(config, err=>{
    if(err) console.log('connection error with DB: ', err.code);
    else{
        console.log('connected');
        dbsel();
    }
})

let processing_result = (err, result)=>{
    if(err) console.log('proc_result error: ', err.code, err.originalError.info.message);
    else{
        //console.log('Row count: ', result.rowsAffected[0]);
        // for(let i=0;i<result.rowsAffected[0]; i++){
        //     let str='--';
        //     for(key in result.recordset[i]){
        //         str+= `${key} = ${result.recordset[i][key]}`;
        //     }
            //console.log(JSON.stringify(result.recordset));
            console.log(result.recordset);
        //}
        // console.log('Row count: ', result.rowsAffected[0]);
        // for(let i=0;i<result.rowsAffected[0]; i++){
        //     let str='--';
        //     for(key in result.recordset[i]){
        //         str+= `${key} = ${result.recordset[i][key]}`;
        //     }
        //     console.log(str);
        // }
    }
}