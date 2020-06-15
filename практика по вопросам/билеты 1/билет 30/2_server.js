var http = require('http');
let url = require('url');
let mp=require('multiparty');


let server = http.createServer((request, response)=>{
    let parsedUrl = url.parse(request.url, true);
if (parsedUrl.pathname === '/sixth_seventh') {
        let result='';
		let form =new mp.Form({uploadDir:'./'});
		form.on('field',(name,value)=>{
			console.log('------------field-------------');
			console.log(name,value);
			result+=`<br/>---${name}= ${value}`;
		});
		form.on('file', (name, file)=>{
			console.log('-----file ------------');
			console.log(name,file);
			result+=`<br/>---${name}= ${file.originalFilename}: ${file.path}`;
		});
		form.on('error',(err)=> {
			console.log('------err--------------');
			console.log('err =',err);
			response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
			response.write('<h1>Form/error</h1>');
			response.end()
		});
		form.on('close',()=>{
			console.log('-----------close----------');
			response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
			response.write('<h1>Form</h1>');
			response.end(result);
		})
        form.parse(request);
    }

}).listen(5000);

console.log('Server running at http://localhost:5000/');