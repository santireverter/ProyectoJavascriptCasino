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
    localStorage.setItem("name", nombre);
    localStorage.setItem("surname", apellido);
    localStorage.setItem("money", dinero);
}



/////                    Botones y event listeners          ///////////////////



let botonUser = document.getElementById("btnUser");
botonUser.addEventListener("click", ingresarNuevoUsuario);

let botonJuego1 = document.getElementById("btnJuego1");
botonJuego1.addEventListener("click", corroborarLogIn);
botonJuego1.addEventListener("click", corroborarApuestas);
botonJuego1.addEventListener("click", piedraPapelTijera);

let botonMovimientos = document.getElementById("btnMovimientos");
botonMovimientos.addEventListener("click", mostrarMovimientos);

let botonJuego2 = document.getElementById("btnJuego2");
botonJuego2.addEventListener("click", corroborarLogIn);
botonJuego2.addEventListener("click", corroborarApuestas);
botonJuego2.addEventListener("click", caraOCruz);



//////                   Corroborar apuestas           //////////////////////


function corroborarApuestas() {
    dineroApostado = parseInt(document.getElementById("dineroApostado").value);
    contadorInterno = 0;
    console.log(contadorExterno)
    if (contadorExterno >= 1) {
        if (dineroApostado <= dinero && dineroApostado != 0) {
            contadorInterno++;
        }
        else if (dineroApostado == 0 || dineroApostado == NaN) {
            swal({
                title: 'Error',
                text: 'Ingrese un monto para apostar',
                icon: 'error',
                Button: 'OK'
            });
        }
        else {
            swal({
                title: 'Error',
                text: 'Esta apostando mas de lo que posee',
                icon: 'warning',
                button: 'OK'
            })
        }
    }
}


// function apuestaExcedida (){
//     let otraApuesta = document.createElement("h4");
//     otraApuesta.innerHTML = `Usted esta apostando mas de lo que posee`;
//     let apuesta = document.getElementById("ppt");
//     apuesta.append(otraApuesta); 
// }


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


/////////                    Calcular Ganancias o perdidas totales     //////////////    

function calcularTotal(...movimientos){
    return movimientos.reduce((acc, n) => acc + n, 0)
}



/////////                Mostrar Movimientos             ///////////////////



function mostrarMovimientos() {
        let gananciasDelDia = calcularTotal(...movimientos);
        let dineroActual = document.createElement("h3");
        dineroActual.innerHTML = `Su dinero actual es ${dinero} y sus ganancias de hoy son ${gananciasDelDia}
                                <h3>Sus movimientos son los siguientes: </h3>`                                    ;
        let lista = document.getElementById("movimientos");
        lista.appendChild(dineroActual)
        for (let i = 0; i < movimientos.length; i++) {
            let movimientosDinero = document.createElement("li");
            movimientosDinero.innerHTML = `${movimientos[i]}`
            lista.appendChild(movimientosDinero);
        }
    }


//////                      Piedra Papel o Tijeras           //////////////////

function piedraPapelTijera() {
    valor = numeroAleatorio(0, 2);
    let apuesta = document.getElementById("ppt");
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



////////                  Cara o Cruz                   ////////////////////

function caraOCruz(){
    valor = numeroAleatorio(0, 1);
    if(contadorInterno != 0){
        let eleccion = +(document.querySelector("input[name=eleccionCOC]:checked").value);
        if(valor == 0 && eleccion == 0){
            let resultado = document.createElement("h4");
                resultado.innerHTML = "Salio cara, Usted gana";
                document.getElementById("caraOCruz").appendChild(resultado);
                calcularGanancia();
        }
        else if(valor == 0 && eleccion == 1){
            let resultado = document.createElement("h4");
                resultado.innerHTML = "Salio cruz, Usted pierde";
                document.getElementById("caraOCruz").appendChild(resultado);
                calcularPerdida();
        }
        else if(valor == 1 && eleccion == 0){
            let resultado = document.createElement("h4");
                resultado.innerHTML = "Salio cara, Usted pierde";
                document.getElementById("caraOCruz").appendChild(resultado);
                calcularPerdida();
        }
        else{
            let resultado = document.createElement("h4");
                resultado.innerHTML = "Salio cruz, Usted gana";
                document.getElementById("caraOCruz").appendChild(resultado);
                calcularGanancia();
        }
    }
}


////////////////                   Corroborar que se hayan loggeado   //////////////////////


function corroborarLogIn(){
    if (nombre == "" || apellido == "" || dinero == "") {
        swal({
            title: 'No se ha loggeado',
            text: 'Por favor haga click en el boton de Ingresar de mas arriba para loggearse',
            button: 'Continuar',
            icon: "warning",
        })
    }
    else{
        contadorExterno++;
    }
}



