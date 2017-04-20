// importing lodash module
import _ from 'lodash';

const array = [1];
const other = _.concat(array, 2, [3], [
    [4]
]);

console.log(other); // [1, 2, 3, [4]]

// main.js
import { Dog, Wolf } from './zoo/zoo';
import { Cat } from './zoo/cat';


var myDog = new Dog('Sherlock', 'beagle');
document.getElementById('content').innerHTML += myDog.bark();

var myWolf = new Wolf('Direwolf');
document.getElementById('content').innerHTML += `<br/>${myWolf.bark()}`;

document.getElementById('loadCat').addEventListener('click', e => {
    require.ensure([], () => {


        //var Cat = require('./cat');

        var myCat = new Cat('Bugsy');
        document.getElementById('content').innerHTML += `<br/>${myCat.meow()}`;
    });
});

//https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/


function actualizaNotificaciones(id) {
    console.log(`Usuario ${id} actualizado xx`);
}

function obtenerUsuarios() {
    console.log('Leyendo nuevos usuarios');
    let min = 12345;
    let max = 23456;
    return Math.floor(Math.random() * (max - min)) + min;
}
/*
let idUsuariosP = [];
let n = idUsuariosP.length;
idUsuariosP.push(obtenerUsuarios());
setInterval(() => {
  console.log("Listando usuarios");
  for (var i = n; i < idUsuariosP.length; i++) {
    actualizaNotificaciones(idUsuariosP[i]);
  }
  n = idUsuariosP.length;
}, 3000);
setInterval(() => {
  idUsuariosP.push(obtenerUsuarios());
}, 3000);
*/

var idUsuarios = Rx.Observable.create((leerNuevosUsuarios) => {
    setInterval(() => {
        leerNuevosUsuarios.next(obtenerUsuarios());
    }, 3000);
});

idUsuarios.subscribe((usuarioId) => {
    actualizaNotificaciones((usuarioId));
});
