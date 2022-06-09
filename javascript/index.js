let resultado = 0;
let contadorExterno = 0;
let contadorInterno = 0;
do {
    let tipoDeJuego = +prompt("Quiere jugar al: 1-Piedra, Papel o Tijera / 2- Tirar una moneda para probar suerte");
    if(tipoDeJuego == 1) { // Piedra papel o Tijeras
        do{ 
            contadorInterno = 0;
            let eleccion = +prompt("Elija 1-Piedra/ 2-Papel/ 3-Tijera");
            resultado = numeroAleatorio(0, 2);
            switch (eleccion) {
                case 1:
                    if (resultado == 0) {
                        alert("La maquina hizo Piedra, hay empate");
                        repetirJuego();
                        break;
                    }
                    else if (resultado == 1) {
                        alert("La maquina hizo Papel, Usted pierde");
                        repetirJuego();
                        break;
                    }
                    else {
                        alert("La maquina hizo Tijera, Usted gana");
                        repetirJuego();
                        break;
                    }
                case 2:
                    if (resultado == 0) {
                        alert("La maquina hizo Piedra, Usted gana");
                        repetirJuego();
                        break;
                    }
                    else if (resultado == 1) {
                        alert("La maquina hizo Papel, hay empate");
                        repetirJuego();
                        break;
                    }
                    else {
                        alert("La maquina hizo Tijera, Usted pierde");
                        repetirJuego();
                        break;
                    }
                case 3:
                    if (resultado == 0) {
                        alert("La maquina hizo Piedra, Usted pierde");
                        repetirJuego();
                        break;
                    }
                    else if (resultado == 1) {
                        alert("La maquina hizo Papel, Usted gana");
                        repetirJuego();
                        break;
                    }
                    else {
                        alert("La maquina hizo Tijera, hay empate");
                        repetirJuego();
                        break;
                    }
                default:
                    alert("Por favor ingrese el numero de la opcion");
            }
        }
        while (contadorInterno == 0)
    }    
    else if (tipoDeJuego == 2) { //Moneda
        do {  
            contadorInterno = 0;
            let eleccion = +prompt("Elija 1-Cara/ 2-Cruz")
            resultado = numeroAleatorio(0, 1);
            if (resultado == 0 && eleccion == 1) {
                alert("se tira la moneda y el resultado es...");
                alert("Salio cara, Usted gana");
                repetirJuego();
            }
            else if (resultado == 0 && eleccion == 2) {
                alert("se tira la moneda y el resultado es...");
                alert("Salio cara, Usted pierde");
                repetirJuego();
            }
            else if (resultado == 1 && eleccion == 1) {
                alert("se tira la moneda y el resultado es...");
                alert("Salio cruz, Usted pierde");
                repetirJuego();
            }
            else if (resultado == 1 && eleccion == 2) {
                alert("se tira la moneda y el resultado es...");
                alert("Salio cruz, Usted gana");
                repetirJuego();
            }
            else {
                alert("Por favor ingrese un numero valido de entre las opciones");
            }
        }
        while(contadorInterno == 0)
    }
    else{ 
        alert("Por favor ingrese un numero valido de entre las opciones");
    }
    continuaJugando();
}  
while (contadorExterno == 0)



function continuaJugando(){
    let continua = +prompt("Desea continuar jugando? 1- SI / 2-NO");
    if(continua == 2){
        return contadorExterno++;
    }
}

function repetirJuego(){
    let repite = +prompt("Desea repetir? 1-SI / 2-NO");
    if(repite == 2){
        return contadorInterno++;
    }
}

function numeroAleatorio(min, max) { //Funcion generadora de numeros aleatorios
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }