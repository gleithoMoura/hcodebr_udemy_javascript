//alert("hello word!")
console.log("hello word!")

var ola = "lets go"
console.log(ola)

// declaração de variaveis 
/*
    var - pode ser visto em todo o contexto
    const - declarar constantes
    let - so pode ser visto dentro do escopo
*/

let a  = 10;
const b  = "10";

console.log(a == b); //compara de os valores são iguais
console.log(a === b); // compara se o valor e o tipo são iguais
console.log(a != b); // valor diferente
console.log(a !== b); // valor e tipo diferente

console.log(a == b && typeof b == 'string'); // e
console.log(a == b || typeof b == 'string'); // ou

if (a === 10){
    console.log('atenção');
}

switch (a){
    case 10:
        console.log('numero');
        break;
    
    case '10':
        console.log('string');
        break;
}

let n = 5;
for (let i = 0; i <= 10; i++){
    // recurso chamado tamplate string
    console.log(`${i} x ${n} = ${i*n}`); // usar craze `` e não aspas''
    // console.log(i + ' x ' + n + ' = '  + (i * n));
}


// eventos com arrow function

window.addEventListener('focus', event => {
    console.log('focus');
    //alert('janela ativa');
})

document.addEventListener('click', event => {
    console.log('click');


})

// time stanp
let tempo  = Date.now();
console.log(tempo);

let data  = new Date();
console.log(data);
console.log(data.toLocaleDateString('pt-BR'));
console.log(data.getDate());
console.log(data.getDay());
console.log(data.getMonth());   // começa em zero atenção 
console.log(data.getFullYear());


let array = [654, 'string', data.toLocaleDateString('pt-BR')]

array.forEach(function(value, index) {
    console.log(index, value)
    
});