//File System 
const fs = require('fs');
const fetch = require('node-fetch');
const file = './README.md';

//path
const route = (file) => {
    return file = resolve(file);
};
route('./README.md');

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
        console.log(getName);
    //Expresión para encontrar el url y traerlo
    const expReg = /(http:\/\/|https:\/\/|www\.)[^\s\)]+/gim;
    const getUrl = data.match(expReg);
        console.log(getUrl);
};

const newArray = (getName, getUrl) => {
    let infoObj = [];
    let i = 0;
    for (i; i < getUrl.length; i++){
        infoObj.push({
        href: getUrl[i],
        text: getName[i],
        file: route(file)
    });
}
newArray();
}

/*const validate = () => {
    let i = 0;
    for (i; i < getUrl.length; i++) {
        fetch(getUrl[i])
        .then((res) => {
            console.log(res);
            //Si pasa el status, damos una condición
            if(status === 200){
                return 
            }
        });
    }
}*/

//md links(path, options)
//path (ruta absoluta o relativa al archivo o directorio).

//options: Un objeto con las siguientes propiedades:

//validate: Valor que determina si se desea validar los links encontrados en el archivo. (tipo de dato booleano)
//stats: Valor que determina si se desea calcular los stats de de los links encontrados en el archivo. (tipo de dato booleano)



