
//File System 
let fs = require('fs');

// Funcion encargada de leer el documento .md
const readFile = () => {
    fs.readFile('./README.md', 'utf-8', callback = (err, data)=>{
        if (err) {
            console.log('Tienes un error, verifica'); 
        }else {
            //Invocamos la función convert para pasarle la data
            convert(data);
        }
    });
}
readFile();

const convert = (data) => {
    //console.log(data);
    let route = /(http:\/\/|https:\/\/|www\.)[^\s]+/gim;
    //let url = /\[./;
    let dataRoute = data.match(route);
        console.log(dataRoute);
    
        
};


//module.exports = {
  //  readFile
//}


