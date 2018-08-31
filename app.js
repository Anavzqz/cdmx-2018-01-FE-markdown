//File System 
const fs = require('fs');

// Funcion encargada de leer el documento .md
const readFile = () => {
    fs.readFile('./README.md', 'utf-8',  (err, data) => {
        if (err) {
            console.log('Tienes un error, verifica'); 
        }else {
            //Invocamos la función convert para pasarle la data
            url(data);
        }
    });
}
readFile();

const url = (data) => {
    //console.log(data);
    const expReg = /(http:\/\/|https:\/\/|www\.)[^\s]+/gim;
    //let url = /\[./;
    const getData = data.match(expReg);
        console.log(getData);
};
