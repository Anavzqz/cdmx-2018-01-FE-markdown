//let http = require('http'),
//fs se encarga de comunicarse con el sistema de archivos de la computadora
//fs = require('fs');

//let readme = fs.readFile("./index.html");

//http.createServer(function(req,res) {
  //  res.write(readme);
  //  res.end();
//}).listen(8080);

//File System 
let fs = require('fs');

 // /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
// Funcion encargada de leer el documento .md
const readFile = () => {
    fs.readFile('./README.md', 'utf-8', callback = (err, data)=>{
        if (err) {
            console.log('Tienes un error, verifica'); 
        }else {
            //.match(route);
            console.log(data);   
        }
    });
}
readFile();

const convert = (data) => {
    let route = /((http:\/\/|https:\/\/|www\.)[^\s]+)/gim;
    //let url = /\[./;
        data.match(route);
}
convert();
//module.exports = {
  //  readFile
//}


