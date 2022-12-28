//VARIABLES
let jugador = 0
let computadora = 0
let triunfos = 0
let perdidas = 0

function aleatorio (min, max){
    return Math.floor( Math.random() * (max - min + 1) + min)
}
function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){ 
        resultado = "Piedra 🥌 "
    } else if (jugada == 2){ 
        resultado = "Papel 📄"
    } else if (jugada == 3) {
        resultado = "Tijera ✂"
    } else {
        resultado = "MAL ELEGIDO"
    }
    return resultado
}
while (triunfos < 3 && perdidas < 3) {
    computadora = aleatorio(1,3)
    jugador = prompt("Elije entre piedra, papel o tijera:\n 1 = Piedra. \n 2 = Papel. \n 3 = Tijera. ")

    alert("Computadora elige: " + eleccion(computadora))
    alert("Tu eliges: " + eleccion(jugador))

    // COMBATE
    if (computadora == jugador){
        alert("EMPATE")
    } else if (jugador == 1 && computadora == 3 || jugador == 2 && computadora == 1 || jugador == 3 && computadora == 2){
        alert("GANASTE")
        triunfos ++
    } else {  (computadora == 1 && jugador == 3 || computadora == 2 && jugador == 1 || computadora == 3 && jugador == 2) 
        alert("PERDISTE")
        perdidas ++
    }   
}
if (triunfos > perdidas){
    alert("GANASTE 🥌🧾✂")
} else if (triunfos < perdidas) {
    alert("PERDISTE 🥌🧾✂")
} 
alert("Ganaste " + triunfos + " veces. \nPerdiste " + perdidas + " veces.")   
    
