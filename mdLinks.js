//File System 
const fs = require('fs');
const fetch = require('node-fetch');
const file = './README.md';
const path = require('path');

//path
const route = (file) => {
    file = path.resolve(file);
    return file;
};


// Funcion encargada de leer el documento .md
const readFile = (callback) => {
    fs.readFile(file, 'utf-8',  (err, data) => {
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
    
    //Expresión para encontrar el url y traerlo
    const expReg = /(http:\/\/|https:\/\/|www\.)[^\s\)]+/gim;
    const getUrl = data.match(expReg);
    newArray(getName, getUrl);
};

const newArray = (getName, getUrl) => {
  let infoObj = [];
    for (let i = 0; i < getUrl.length; i++) {
        let arr = {
            text: getName[i],
            href: getUrl[i],
            file: route(file)
    }
    infoObj.push(arr);
}
console.log(infoObj);
validate(getUrl);
}
//Después de tener el arreglo de objetos iteramos con .map para que nos de un nuevo arreglo
const validate = (getUrl) => {
    let statusUrl = getUrl.map((obj) => {
        return {status: '', ...obj }
    });
    statusUrl.forEach(urL => {
        fetch(urL.href)
        .then((res) => {
            //Si pasa el status, damos una condición
            if(res.status === 200){
                console.log(res);
            } else {
                console.log('fail');
            }
        });
    }); 
        console.log(statusUrl);
    }

//md links(path, options)
//path (ruta absoluta o relativa al archivo o directorio).

//options: Un objeto con las siguientes propiedades:

//validate: Valor que determina si se desea validar los links encontrados en el archivo. (tipo de dato booleano)
//stats: Valor que determina si se desea calcular los stats de de los links encontrados en el archivo. (tipo de dato booleano)
