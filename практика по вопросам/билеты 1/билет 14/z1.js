let http= require('http');
let mo= require('./mod');

let handler=(req,res)=>{
    if(req.method=='POST' && mo.isJsonContentType(req.headers)){
        let result='';
        req.on('data',(data)=>{result+=data;})
        req.on('end',()=>{
            try{
                let obj=JSON.parse(result);
                console.log(obj);
                if(mo.isJsonAccept(req.headers))
                mo.write200(res,'ok json',JSON.stringify(obj));
                else mo.write400(res,'no accept');
            }
            catch (e){mo.write400(res,'catch:bad json');}
        })
    } else mo.write400(res,'no json-post') ;
}

let server=http.createServer();
server.listen(3000,(v)=>{console.log('server.listen(3000)')})
.on('error',(e)=>{console.log('server.listen(3000):error:',e.code)})
.on('request',handler)