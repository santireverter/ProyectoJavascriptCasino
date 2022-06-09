let resultado = 0;
let contadorExterno = 0;
let contadorInterno = 0;
do{
let tipoDeJuego = +prompt("Quiere jugar al: 1-Piedra, Papel o Tijera / 2- Tirar una moneda para probar suerte");
if (tipoDeJuego == 1){ // piedra papel o tijeras
    let eleccion = +prompt("Elija 1-Piedra/ 2-Papel/ 3-Tijera")
    resultado = numeroAleatorio(0,2);
    switch(eleccion){
        case 1:
            if(resultado == 0){
                alert("La maquina hizo Piedra, hay empate");
                continuaJugando()
                break;
            }
            else if(resultado == 1){
                alert("La maquina hizo Papel, Usted pierde");
                continuaJugando()
                break;
            }
            else{
                alert("La maquina hizo Tijera, Usted gana");
                continuaJugando()
                break;
            }
        case 2:
            if(resultado == 0){
                alert("La maquina hizo Piedra, Usted gana");
                continuaJugando()
                break;
            }
            else if(resultado == 1){
                alert("La maquina hizo Papel, hay empate");
                continuaJugando()
                break;
            }
            else{
                alert("La maquina hizo Tijera, Usted pierde");
                continuaJugando()
                break;
            }
        case 3:
            if(resultado == 0){
                alert("La maquina hizo Piedra, Usted pierde");
                continuaJugando()
                break;
            }
            else if(resultado == 1){
                alert("La maquina hizo Papel, Usted gana");
                continuaJugando()
                break;
            }
            else{
                alert("La maquina hizo Tijera, hay empate");
                continuaJugando()
                break;
            }
        default:
            alert("Por favor ingrese el numero de la opcion")
    }
}
else if(tipoDeJuego == 2){ // Moneda
    let eleccion = +prompt("Elija 1-Cara/ 2-Cruz")
    resultado = numeroAleatorio(0,1);
    if(resultado == 0 && eleccion == 1){
        alert("se tira la moneda y el resultado es...")
        alert("Salio cara, Usted gana");
        continuaJugando();
    }
    else if(resultado == 0 && eleccion == 2){
        alert("se tira la moneda y el resultado es...")
        alert("Salio cara, Usted pierde");
        continuaJugando();
    }
    else if(resultado == 1 && eleccion == 1){
        alert("se tira la moneda y el resultado es...")
        alert("Salio cruz, Usted pierde");
        continuaJugando();
    }
    else if(resultado == 1 && eleccion == 2){
        alert("se tira la moneda y el resultado es...")
        alert("Salio cruz, Usted gana");
        continuaJugando();
    }
    else{
        alert("Por favor ingrese un numero valido de entre las opciones");
        continuaJugando();
    }
}
else{
    alert("Por favor ingrese un numero valido de entre las opciones")
}
}
while(contadorExterno != 1)



function continuaJugando(){
    let continua = +prompt("Desea continuar jugando? 1- SI / 2-NO");
    if(continua == 2){
        return contadorExterno++;
    }
    // else{
    //     alert("Espere un segundo que lo llevamos al inicio");
    // }
}

function repetir(){
    let repite = +prompt("Desea repetir? 1-SI / 2-NO");
    if(repite == 2){
        return contadorInterno++;
    }
}

function numeroAleatorio(min, max) { //Funcion generadora de numeros aleatorios
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }