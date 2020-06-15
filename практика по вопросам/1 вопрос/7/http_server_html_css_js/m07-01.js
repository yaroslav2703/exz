function Stat(sfn='./static'){
    this.STATIC_FOLDER=sfn;
    let pathStatic = (fn)=>{return `${this.STATIC_FOLDER}${fn}`;}
    this.writeHTTP404=(res)=>{
        res.statusCode = 404;
        res.statusMessage = 'Resourse not found';
        res.end("HTTP ERROR 404: Resourse not found");
    }
    let fs = require('fs');
    let pipeFile = (req, res, headers)=>{
        res.writeHead(200, headers);
        fs.createReadStream(pathStatic(req.url)).pipe(res);
    }
    this.isStatic = (ext, fn)=>{
        let reg = new RegExp(`^\/.+\.${ext}$`); 
        return reg.test(fn);
    }
    this.sendFile = (req, res, headers)=>{
        fs.access(pathStatic(req.url), fs.constants.R_OK, err =>{
            if(err) this.writeHTTP404(res);
            else pipeFile(req, res, headers);
        });
    }
}

module.exports=(parm)=>{return new Stat(parm);}