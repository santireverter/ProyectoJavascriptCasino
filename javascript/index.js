let resultado = 0;
let contador = 0;
//do{
let luckyNumber = +prompt("Ingrese su numero de la suerte (y que sea positivo)")
let tipoDeJuego = +prompt("Quiere jugar al: 1-Piedra, Papel o Tijera / 2- Tirar una moneda para probar suerte");
if (tipoDeJuego == 1){
    let eleccion = +prompt("Elija 1-Piedra/ 2-Papel/ 3-Tijera")
    resultado = luckyNumber & 3;
    switch(eleccion){
        case 1:
            if(resultado == 0){
                alert("La maquina hizo Piedra, hay empate");
                break;
            }
            else if(resultado == 1){
                alert("La maquina hizo Papel, Usted pierde");
                break;
            }
            else{
                alert("La maquina hizo Tijera, Usted gana");
                break;
            }
        case 2:
            if(resultado == 0){
                alert("La maquina hizo Piedra, Usted gana");
                break;
            }
            else if(resultado == 1){
                alert("La maquina hizo Papel, hay empate");
                break;
            }
            else{
                alert("La maquina hizo Tijera, Usted pierde");
                break;
            }
        case 3:
            if(resultado == 0){
                alert("La maquina hizo Piedra, Usted pierde");
                break;
            }
            else if(resultado == 1){
                alert("La maquina hizo Papel, Usted gana");
                break;
            }
            else{
                alert("La maquina hizo Tijera, hay empate");
                break;
            }
        default:
            alert("Por favor ingrese el numero de la opcion")
    }
}
else if(tipoDeJuego == 2){
    let eleccion = +prompt("Elija 1-Cara/ 2-Cruz")
    alert("se tira la moneda y el resultado es...")
    resultado = luckyNumber % 2;
    if(resultado == 0 && eleccion == 1){
        alert("Salio cara, Usted gana");
    }
    else if(resultado == 0 && eleccion == 2){
        alert("Salio cara, Usted pierde");
    }
    else if(resultado == 1 && eleccion == 1){
        alert("Salio cruz, Usted pierde");
    }
    else{
        alert("Salio cruz, Usted gana");
    }
}
else{
    alert("Por favor ingrese un numero valido de entre las opcion")
}
//}
//while(contador != 1)