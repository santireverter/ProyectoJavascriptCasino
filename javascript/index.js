///                    inicializaciones globales                   /////////

let valor = 0;
let contadorExterno = 0;
let contadorInterno = 0;
let dinero = 0;
let dineroApostado = 0;

class Jugador {
    constructor(nombre, apellido, dinero) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dinero = dinero;
    }
}

const movimientos = [];
const jugadores = [];

let apuesta = document.getElementById("ppt");

/////                      Crear usuario                   ////////////////


const ingresarNuevoUsuario = () => {
    let perfil = document.getElementById("jugador");
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    dinero = parseInt(document.getElementById("dinero").value);
    jugadores.push(new Jugador(nombre, apellido, dinero));
    let nuevoJugador = document.createElement("li");
    nuevoJugador.innerHTML = `<h3>${nombre} ${apellido}</h3>
                              <p>su dinero es: ${dinero}</p>`;
    perfil.append(nuevoJugador);
}



/////                    Botones y event listeners          ///////////////////



let botonUser = document.getElementById("btnUser");
botonUser.addEventListener("click", ingresarNuevoUsuario);

let botonJuego1 = document.getElementById("btnJuego1");
botonJuego1.addEventListener("click", corroborarApuestas);
botonJuego1.addEventListener("click", piedraPapelTijera);

let botonMovimientos = document.getElementById("btnMovimientos");
botonMovimientos.addEventListener("click", mostrarMovimientos);



//////                   Corroborar apuestas           //////////////////////


function corroborarApuestas() {
    dineroApostado = parseInt(document.getElementById("dineroApostado").value);
    contadorInterno = 0;
    if (dineroApostado <= dinero) {
        contadorInterno++;
    }
    else {
        let otraApuesta = document.createElement("h4");
        otraApuesta.innerHTML = `Usted esta apostando mas de lo que posee`;
        let apuesta = document.getElementById("ppt");
        apuesta.append(otraApuesta);
    }
}


//////                  Funcion generadora de numeros aleatorios                  /////////////////


function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/////                     Calcular Ganancia y Perdida                     ///////////////////



function calcularGanancia() {
    dinero = dinero + dineroApostado;
    movimientos.push(dineroApostado);
}
function calcularPerdida() {
    dinero = dinero - dineroApostado;
    movimientos.push(-dineroApostado);
}


/////////                Mostrar Movimientos             ///////////////////



function mostrarMovimientos() {
        alert(dinero);
        for (let i = 0; i < movimientos.length; i++) {
            alert(movimientos[i]);
        }
    }



//////                      Piedra Papel o Tijeras           //////////////////

function piedraPapelTijera() {
    valor = numeroAleatorio(0, 2);
    if (contadorInterno != 0) {
        let eleccion = +(document.querySelector("input[name=eleccionPPT]:checked").value);
        switch (eleccion) {
            case 0:
                if (valor == 0) {
                    let resultado = document.createElement("h4");
                    resultado.innerHTML = "La maquina hizo Piedra, hay empate";
                    apuesta.insertBefore(resultado, botonMovimientos);
                    break;
                }
                else if (valor == 1) {
                    let resultado = document.createElement("h4");
                    resultado.innerHTML = "La maquina hizo Papel, Usted pierde";
                    apuesta.insertBefore(resultado, botonMovimientos);
                    calcularPerdida();
                    break;
                }
                else {
                    let resultado = document.createElement("h4");
                    resultado.innerHTML = "La maquina hizo Tijera, Usted gana";
                    apuesta.insertBefore(resultado, botonMovimientos);
                    calcularGanancia();
                    break;
                }
            case 1:
                if (valor == 0) {
                    let resultado = document.createElement("h4");
                    resultado.innerHTML = "La maquina hizo Piedra, Usted gana";
                    apuesta.insertBefore(resultado, botonMovimientos);
                    calcularGanancia();
                    break;
                }
                else if (valor == 1) {
                    let resultado = document.createElement("h4");
                    resultado.innerHTML = "La maquina hizo Papel, hay empate";
                    apuesta.insertBefore(resultado, botonMovimientos);
                    break;
                }
                else {
                    let resultado = document.createElement("h4");
                    resultado.innerHTML = "La maquina hizo Tijera, Usted pierde";
                    apuesta.insertBefore(resultado, botonMovimientos);
                    calcularPerdida();
                    break;
                }
            case 2:
                if (valor == 0) {
                    let resultado = document.createElement("h4");
                    resultado.innerHTML = "La maquina hizo Piedra, Usted pierde";
                    apuesta.insertBefore(resultado, botonMovimientos);
                    calcularPerdida();
                    break;
                }
                else if (valor == 1) {
                    let resultado = document.createElement("h4");
                    resultado.innerHTML = "La maquina hizo Papel, Usted gana";
                    apuesta.insertBefore(resultado, botonMovimientos);
                    calcularGanancia();
                    break;
                }
                else {
                    let resultado = document.createElement("h4");
                    resultado.innerHTML = "La maquina hizo Tijera, hay empate";
                    apuesta.insertBefore(resultado, botonMovimientos);
                    break;
                }
        }
    }
}





//          {
//             contadorInterno = 0;
//             dineroApostado = +prompt("Cuanto desea apostar?")
//             if (dineroApostado <= dinero) {
//                 let eleccion = +prompt("Elija 1-Cara/ 2-Cruz")
//                 valor = numeroAleatorio(1, 2);
//                 if (valor == 1 && eleccion == 1) {
//                     alert("se tira la moneda y el resultado es...");
//                     alert("Salio cara, Usted gana");
//                     calcularGanancia();
//                     repetirJuego();
//                 }
//                 else if (valor == 1 && eleccion == 2) {
//                     alert("se tira la moneda y el resultado es...");
//                     alert("Salio cara, Usted pierde");
//                     calcularPerdida();
//                     repetirJuego();
//                 }
//                 else if (valor == 2 && eleccion == 1) {
//                     alert("se tira la moneda y el resultado es...");
//                     alert("Salio cruz, Usted pierde");
//                     calcularPerdida();
//                     repetirJuego();
//                 }
//                 else if (valor == 2 && eleccion == 2) {
//                     alert("se tira la moneda y el resultado es...");
//                     alert("Salio cruz, Usted gana");
//                     calcularGanancia();
//                     repetirJuego();
//                 }
//                 else {
//                     alert("Por favor ingrese un numero valido de entre las opciones");
//                 }
//             }
//             else {
//                 alert("Usted esta apostando mas dinero del que posee");
//             }
//         }
//          (contadorInterno == 0)


//         alert("Por favor ingrese un numero valido de entre las opciones");

//     mostrarMovimientos();
//     continuaJugando();

// while (contadorExterno == 0)



// function continuaJugando() {
//     let continua = +prompt("Desea continuar jugando? 1- SI / 2-NO");
//     if (continua == 2) {
//         return contadorExterno++;
//     }
// }

// function repetirJuego() {
//     let repite = +prompt("Desea repetir? 1-SI / 2-NO");
//     if (repite == 2) {
//         return contadorInterno++;
//     }
// }






