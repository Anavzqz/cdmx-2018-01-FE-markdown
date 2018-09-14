//File System 
const fs = require('fs');
const fetch = require('node-fetch');
const file = './README.md';
const path = require('path');

//path para la ruta absoluta o relativa
const route = (file) => {
    return new Promise((resolve, reject) => {
        if(!file) {
            reject(err);
        } else {
            resolve(path.resolve(file));
        }
    });
};


// Funcion encargada de leer el documento .md
const readFile = (file) => {
    return new Promise((reject, resolve) => {
        fs.readFile(file, 'utf-8',  (err, data) => { 
            if (!data) {
                reject(err); 
            }else {
                resolve(data);
                console.log(data);
                //Invocamos la función convert para pasarle la data
                //url(data);
            } 
        });  
    });
};


const url = (data) => {
    //Revisar si es necesario tener el nombre del link
    return new Promise((resolve, reject) => {
        if(!data){
            reject(err);
        }else {
            //Expresión para encontrar el url y traerlo
        const expReg = /(http:\/\/|https:\/\/|www\.)[^\s\)]+/gim;
        const getUrl = data.match(expReg);
           resolve(getUrl);
        }   
    });
};

const newArray = (getUrl) => {
  return new Promise((resolve, reject) => {
    if(!getUrl) {
        reject(err);
    } else {
        let infoObj = [];
        for (let i = 0; i < getUrl.length; i++) {
            let arr = {
                href: getUrl[i],
                file: route(file)
        }
        infoObj.push(arr);
    }
    resolve(infoObj);
    console.log(infoObj);
  };
});
}

route(file) 
.then(result => readFile(result))
.then(result => url(result))
.then(result => newArray(result))
.catch(err => {
    console.log('Ocurrio un error', err);
  });

/*//Después de tener el arreglo de objetos iteramos con .map para que nos de un nuevo arreglo agregando el status
const validate = (infoObj) => {
    let statusUrl = infoObj.map((obj) => {
        return {status: '', ...obj }
    });
    statusUrl.forEach(urL => {
        fetch(urL.href)
        .then((res) => {
            //Si pasa el status, damos una condición
            if(res.status === 404){
                urL.status = 'FAIL 404';
            } else {
                urL.status = 'OK 200';
            }
        });
    }); 
    return statusUrl;
    };
*/