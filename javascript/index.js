let valor = 0;
let contadorExterno = 0;
let contadorInterno = 0;
let dinero = 0;
let dineroApostado = 0;

class Jugador{
    constructor (nombre, apellido, dinero){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dinero = dinero;
    }
}

const movimientos = [];
const jugadores = [];

const ingresarNuevoUsuario = ()=> {
    let perfil = document.getElementById("jugador");
    console.log(perfil)
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    dinero = document.getElementById("dinero").value;
    // jugadores.push(new Jugador(nombre, apellido, dinero));

    
    let nuevoJugador = document.createElement("li");
    nuevoJugador.innerHTML = `<h3>${nombre}-${apellido}</h3>
                              <p>su dinero es: ${dinero}</p>`;
    perfil.appendChild(nuevoJugador);
}
let boton = document.getElementById("btn");
boton.addEventListener("click", ingresarNuevoUsuario);
// const ingresarNuevoUsuario = ()=> {
//     let perfil = document.getElementById("jugador");
//     let nombre = document.getElementById("nombre").value;
//     let apellido = document.getElementById("apellido").value;
//     dinero = document.getElementById("dinero").value;
//     // jugadores.push(new Jugador(nombre, apellido, dinero));

    
//     let nuevoJugador = document.createElement("li");
//     nuevoJugador.innerHTML = `<h3>${nombre}-${apellido}</h3>
//                         <p>su dinero es: ${dinero}</p>`;
//     perfil.append(nuevoJugador);
// }

 
// function piedraPapelTijera(){
//     valor = numeroAleatorio(0, 2);
//     let eleccion = document.getElementById("eleccionPPT").value;
//     switch (eleccion){
//         case "Piedra":
//             if (valor == 0) {
//                 alert("La maquina hizo Piedra, hay empate");
//                 repetirJuego();
//                 break;
//             }
//             else if (valor == 1) {
//                 alert("La maquina hizo Papel, Usted pierde");
//                 calcularPerdida();
//                 repetirJuego();
//                 break;
//             }
//             else {
//                 alert("La maquina hizo Tijera, Usted gana");
//                 calcularGanancia();
//                 repetirJuego();
//                 break;
//             }
//         case "Papel":
//             if (valor == 0) {
//                 alert("La maquina hizo Piedra, Usted gana");
//                 calcularGanancia();
//                 repetirJuego();
//                 break;
//             }
//             else if (valor == 1) {
//                 alert("La maquina hizo Papel, hay empate");
//                 repetirJuego();
//                 break;
//             }
//             else {
//                 alert("La maquina hizo Tijera, Usted pierde");
//                 calcularPerdida();
//                 repetirJuego();
//                 break;
//             }
//         case "Tijera":
//             if (valor == 0) {
//                 alert("La maquina hizo Piedra, Usted pierde");
//                 calcularPerdida();
//                 repetirJuego();
//                 break;
//             }
//             else if (valor == 1) {
//                 alert("La maquina hizo Papel, Usted gana");
//                 calcularGanancia(); 
//                 repetirJuego();
//                 break;
//             }
//             else {
//                 alert("La maquina hizo Tijera, hay empate");
//                 repetirJuego();
//                 break;
//             }
//             default:
//                 alert("Por favor seleccione una opcion");
//         }
//     } 



            // if (dineroApostado <= dinero) {
            //     //let eleccion = +prompt("Elija 1-Piedra/ 2-Papel/ 3-Tijera");
            //     valor = numeroAleatorio(0, 2);
            //     switch (eleccion) {
            //         case 1:
            //             if (valor == 0) {
            //                 alert("La maquina hizo Piedra, hay empate");
            //                 repetirJuego();
            //                 break;
            //             }
            //             else if (valor == 1) {
            //                 alert("La maquina hizo Papel, Usted pierde");
            //                 calcularPerdida();
            //                 repetirJuego();
            //                 break;
            //             }
            //             else {
            //                 alert("La maquina hizo Tijera, Usted gana");
            //                 calcularGanancia();
            //                 repetirJuego();
            //                 break;
            //             }
            //         case 2:
            //             if (valor == 0) {
            //                 alert("La maquina hizo Piedra, Usted gana");
            //                 calcularGanancia();
            //                 repetirJuego();
            //                 break;
            //             }
            //             else if (valor == 1) {
            //                 alert("La maquina hizo Papel, hay empate");
            //                 repetirJuego();
            //                 break;
            //             }
            //             else {
            //                 alert("La maquina hizo Tijera, Usted pierde");
            //                 calcularPerdida();
            //                 repetirJuego();
            //                 break;
            //             }
            //         case 3:
            //             if (valor == 0) {
            //                 alert("La maquina hizo Piedra, Usted pierde");
            //                 calcularPerdida();
            //                 repetirJuego();
            //                 break;
            //             }
            //             else if (valor == 1) {
            //                 alert("La maquina hizo Papel, Usted gana");
            //                 calcularGanancia(); 
            //                 repetirJuego();
            //                 break;
            //             }
            //             else {
            //                 alert("La maquina hizo Tijera, hay empate");
            //                 repetirJuego();
            //                 break;
            //             }
            //         default:
            //             alert("Por favor ingrese el numero de la opcion");
            //     }
            // }
            // else {
            //     alert("Usted esta apostando mas dinero del que posee");
            // }



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

// function numeroAleatorio(min, max) { //Funcion generadora de numeros aleatorios
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function calcularGanancia(){
//     dinero = dinero + dineroApostado;
//     movimientos.push(dineroApostado);
//     alert("su cantidad de dinero es " + dinero);
// }
// function calcularPerdida(){
//     dinero = dinero - dineroApostado;
//     movimientos.push(-dineroApostado);
//     alert("su cantidad de dinero es " + dinero);
// }

// function mostrarMovimientos(){
//     let mostrar = +prompt("desea ver sus movimientos? 1- SI / 2- NO");
//     if(mostrar == 1){
//         for (let i = 0; i < movimientos.length; i++){
//             alert(movimientos[i]);
//         }
//     }
// }

