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
    //Expresión para traer el nombre de los url
    const nameUrl = /\[[a-zA-Z_ \/$]*\]/gim;
    const getName = data.match(nameUrl);
        console.log(getName);
    //Expresión para encontrar el url y traerlo
    const expReg = /(http:\/\/|https:\/\/|www\.)[^\s\)]+/gim;
    const getUrl = data.match(expReg);
        console.log(getUrl);
    //array.forEach(element => {
        
   // });
    


};




