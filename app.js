let numeroSecreto = 0; 
let intentos =0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);


function asignarTextoElemento (elemento, texto) {
    let elemtoHTML = document.querySelector(elemento);
    elemtoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value);
    
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto.
        if (numeroDeUsuario > numeroSecreto) {
         asignarTextoElemento('p', 'El numero secreto es menor');
        }else {
         asignarTextoElemento('p', 'El numero secreto es mayor');   
        }
intentos++;
limpiarcaja();
    }
    return;
} 

function limpiarcaja() {
    document.querySelector('#valorUsuario').value='';
   
}

function GenerarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log (listaNumerosSorteados);
    //Si ya sorteamos todos los numero
    if (listaNumerosSorteados.length == numeroMaximo) {
       asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        //si el numero genrado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return GenerarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

   
    return numeroSecreto;

}
function condicionesIniciales() {
    asignarTextoElemento ('h1','Juego del numero secreto!');
    asignarTextoElemento ('p',`indica un numero del 1 al ${numeroMaximo} `);
    numeroSecreto = GenerarNumeroSecreto(); 
    intentos= 1; 

}




function reiniciarJuego(){
    //limpiar caja
    limpiarcaja();
    //Indicar el mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();  