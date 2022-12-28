const subtitulo = document.getElementById("subtitulo");
const botonSeleccionarMascotaJugador = document.getElementById(
  "boton-seleccionar-mascota"
);
const botonReiniciarJuego = document.getElementById("boton-reiniciar");
const mascota_jugador = document.getElementById("mascota-jugador");
const mascota_enemigo = document.getElementById("mascota-enemigo");
const contenedorBotonesDeAtaque = document.getElementById(
  "contenedor-boton-ataque"
);
const seccionSeleccionarMascota = document.getElementById(
  "seleccionar-mascota"
);
const seccionAtaque = document.getElementById("seleccionar-ataque");
const seccionReiniciar = document.getElementById("reiniciar");
const imgSrcJugador = document.getElementById("img-miniatura-jugador");
const imgSrcEnemigo = document.getElementById("img-miniatura-enemigo");
const seccionMensajes = document.getElementById("mensajes");
const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const seccion_mensaje = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
const contenedorTarjetas = document.getElementById("contenedor-de-tarjetas");

let botones = [];
let mokepones = [];
let opcionDeMokepones;
let ataqueJugador = [];
let ataqueEnemigo = [];
let inputRocoMisterioso
let inputRocoFashion
let inputAbueRoco
let inputRocoDarthVader
let mascotaElecta;
let tipoAtaqueJugador;
let tipoAtaqueEnemigo;

let ataquesGuardadosJugador;
let ataquesMokepon;
let ataquesMokeponJugador = [];
let ataquesMokeponEnemigo;
let ataqueJugadorIcono = [];
let ataqueEnemigoIcono = [];
let ataqueAleaEnemigo;
let indexAtaquesJugador;
let indexAtaquesEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let contador = 0;
//---------Creamos nuestra clase Mokepon
class Mokepon {
  constructor(nombre, foto, vida, tipo) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.tipo = tipo;
    this.ataques = [];
  }
}
//-------Creamos nuestros objetos de la clase Mokepon, con sus 3 atributos

let rocomisterioso = new Mokepon('Roco_Misterioso', './assets/roco_misterioso.png', 5, "Agua");
let rocofashion = new Mokepon('Roco_Fashion', './assets/roco_fashion.png', 5, "Tierra");
let abueroco = new Mokepon('Abue_Roco', './assets/abue_roco.png', 5, "Fuego");
let rocodarthvader = new Mokepon('Roco_Darth_Vader', './assets/roco_darth_vader.png', 5, "Fuego" );


rocomisterioso.ataques.push(
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" }
);

rocofashion.ataques.push(
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" }
);

abueroco.ataques.push(
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" }
);
rocodarthvader.ataques.push(
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" }
);
mokepones.push(rocomisterioso,rocofashion,abueroco,rocodarthvader)


function iniciarJuego() {
  seccionAtaque.style.display = "none";
  seccionMensajes.style.display = "none";
  seccionReiniciar.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = ` <input type="radio" name="mascota" id="${mokepon.nombre}" value="${mokepon.nombre}">
        <label for="${mokepon.nombre}" class="tarjeta-mokepon">
            <p>${mokepon.nombre}</p> 
            <img src="${mokepon.foto}" alt="${mokepon.nombre}">
        </label> `;

    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputRocoMisterioso = document.getElementById('Roco_Misterioso')
    inputRocoFashion = document.getElementById('Roco_Fashion')
    inputAbueRoco = document.getElementById('Abue_Roco')
    inputRocoDarthVader = document.getElementById('Roco_Darth_Vader')
  });

  botonSeleccionarMascotaJugador.addEventListener(
    "click",
    seleccionarMascotaJugador
  );

  botonReiniciarJuego.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  let indicador = 0;
  if (
    inputRocoMisterioso.checked ||
    inputRocoFashion.checked ||
    inputAbueRoco.checked ||
    inputRocoDarthVader.checked 
  ) {
    seccionSeleccionarMascota.style.display = "none";
    seccionAtaque.style.display = "flex";
    indicador = 1;
  }


  if (inputRocoMisterioso.checked) {
    mascota_jugador.innerHTML = inputRocoMisterioso.id;
    mascotaElecta = inputRocoMisterioso.id;
    tipoAtaqueJugador = rocomisterioso.tipo;
    imgSrcJugador.src = rocomisterioso.foto;
    ataquesGuardadosJugador = rocomisterioso.ataques;
  } else if (inputRocoFashion.checked) {
    mascota_jugador.innerHTML = inputRocoFashion.id;
    mascotaElecta = inputRocoFashion.id;
    tipoAtaqueJugador = rocofashion.tipo;
    imgSrcJugador.src = rocofashion.foto;
    ataquesGuardadosJugador = rocofashion.ataques;
  } else if (inputAbueRoco.checked) {
    mascota_jugador.innerHTML = inputAbueRoco.id;
    mascotaElecta = inputAbueRoco.id;
    tipoAtaqueJugador = abueroco.tipo;
    imgSrcJugador.src = abueroco.foto;
    ataquesGuardadosJugador = abueroco.ataques;
  } else if (inputRocoDarthVader.checked) {
    mascota_jugador.innerHTML = inputRocoDarthVader.id;
    mascotaElecta = inputRocoDarthVader.id;
    tipoAtaqueJugador = rocodarthvader.tipo;
    imgSrcJugador.src = rocodarthvader.foto;
    ataquesGuardadosJugador = rocodarthvader.ataques;
  } else {
    alert("Elige una opción");
    seccionAtaque.style.display = "none";
    seccionSeleccionarMascota.style.display = "flex";
  }
  if (indicador === 1) {
    elegirMascotaEnemigo();
  }
}
function tiposAtaques() {
  /*-----------COMPARA CUANDO FUEGO ES MAYOT QUE TIERRA-----------*/
  if (tipoAtaqueJugador === "Fuego" && tipoAtaqueEnemigo === "Tierra") {
    ataquesGuardadosJugador.push({
      nombre: "🔥",
      id: "boton-fuego",
      claseEstilos: "fuego"
    });

    orderAtaques(ataquesGuardadosJugador);
    console.log(mascotaElecta);
  } else if (tipoAtaqueJugador === "Tierra" && tipoAtaqueEnemigo === "Agua") {
  /*-----------COMPARA CUANDO TIERRA ES MAYOT QUE AGUA-----------*/
    ataquesGuardadosJugador.push({
      nombre: "🌱",
      id: "boton-tierra",
      claseEstilos: "tierra"
    });

    orderAtaques(ataquesGuardadosJugador);
    console.log(mascotaElecta);
  } else if (tipoAtaqueJugador === "Agua" && tipoAtaqueEnemigo === "Fuego") {
  /*-----------COMPARA CUANDO AGUA ES MAYOT QUE FUEGO-----------*/
    ataquesGuardadosJugador.push({
      nombre: "💧",
      id: "boton-agua",
      claseEstilos: "agua"
    });

    orderAtaques(ataquesGuardadosJugador);
    console.log(mascotaElecta);
  }

  botonesAtaquesDelJugador(mascotaElecta);
  secuenciaAtaqueJugador();
}

function orderAtaques(array) {
  array.sort((nombre1, nombre2) => {
    if (nombre1.nombre < nombre2.nombre) {
      return 1;
    } else if (nombre1.nombre > nombre2.nombre) {
      return -1;
    } else return 0;
  });
}

function botonesAtaquesDelJugador(mascotaElecta) {
  for (let i = 0; i < mokepones.length; i++) {
    if (mokepones[i].nombre === mascotaElecta) {
      ataquesMokeponJugador = mokepones[i].ataques;
    }
  }
  ataquesMokeponJugador.forEach((ataque) => {
    ataquesMokepon = `<button id="${ataque.id}" class="boton-de-ataque BAtaque ${ataque.claseEstilos}">${ataque.nombre}</button>`;
    contenedorBotonesDeAtaque.innerHTML += ataquesMokepon;
  });

  botones = document.querySelectorAll(".BAtaque");
}

function elegirMascotaEnemigo() {
  let ataqueAleatorio = aleatorio(0, mokepones.length - 1);

  mascota_enemigo.innerHTML = mokepones[ataqueAleatorio].nombre;
  tipoAtaqueEnemigo = mokepones[ataqueAleatorio].tipo;
  imgSrcEnemigo.src = mokepones[ataqueAleatorio].foto;
  ataquesMokeponEnemigo = mokepones[ataqueAleatorio].ataques;
  tiposAtaques();
}

function secuenciaAtaqueJugador() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        ataqueJugador.push("FUEGO");
        ataqueJugadorIcono.push("FUEGO <i class='fa-solid fa-fire'></i>");
        console.log(ataqueJugador);
        boton.disabled = "true";
        boton.classList.add("gris");
      } else if (e.target.textContent === "💧") {
        ataqueJugador.push("AGUA");
        ataqueJugadorIcono.push("AGUA <i class='fa-solid fa-droplet'></i>");
        console.log(ataqueJugador);
        boton.disabled = "true";
        boton.classList.add("gris");
      } else {
        ataqueJugador.push("TIERRA");
        ataqueJugadorIcono.push("TIERRA <i class='fa-solid fa-seedling'></i>");
        console.log(ataqueJugador);
        boton.disabled = "true";
        boton.classList.add("gris");
      }
      contador += 1;
      console.log("Contador: " + contador);
      ataqueAleatorioEnemigo();
    });
  });
}

function ataqueAleatorioEnemigo() {
  ataqueAleaEnemigo = aleatorio(0, ataquesMokeponEnemigo.length - 1);

  if (ataquesMokeponEnemigo[ataqueAleaEnemigo].nombre === "🔥") {
    ataqueEnemigo.push("FUEGO");
    ataqueEnemigoIcono.push("<i class='fa-solid fa-fire'></i> FUEGO");
    console.log(
      "Ataque enemigo: " + ataqueEnemigo + " índice: " + ataqueAleaEnemigo
    );
    ataquesMokeponEnemigo.splice(ataqueAleaEnemigo, 1);
    console.log(ataquesMokeponEnemigo);
  } else if (ataquesMokeponEnemigo[ataqueAleaEnemigo].nombre === "💧") {
    ataqueEnemigo.push("AGUA");
    ataqueEnemigoIcono.push("<i class='fa-solid fa-droplet'></i> AGUA");
    console.log(
      "Ataque enemigo: " + ataqueEnemigo + " índice: " + ataqueAleaEnemigo
    );
    ataquesMokeponEnemigo.splice(ataqueAleaEnemigo, 1);
    console.log(ataquesMokeponEnemigo);
  } else {
    ataqueEnemigo.push("TIERRA");
    ataqueEnemigoIcono.push("<i class='fa-solid fa-seedling'></i> TIERRA");
    console.log(
      "Ataque enemigo: " + ataqueEnemigo + " índice: " + ataqueAleaEnemigo
    );
    ataquesMokeponEnemigo.splice(ataqueAleaEnemigo, 1);
    console.log(ataquesMokeponEnemigo);
  }

  if (ataqueJugador.length === 5) {
    combate();
  }
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaquesJugador = ataqueJugadorIcono[jugador];
  indexAtaquesEnemigo = ataqueEnemigoIcono[enemigo];
}

function combate() {
  for (let i = 0; i < ataqueJugador.length; i++) {
    if (ataqueJugador[i] === ataqueEnemigo[i]) {
      indexAmbosOponentes(i, i);
      crearMensaje("EMPATASTE 🤜🤛");
    } else if (
      (ataqueJugador[i] === "FUEGO" && ataqueEnemigo[i] === "TIERRA") ||
      (ataqueJugador[i] === "AGUA" && ataqueEnemigo[i] === "FUEGO") ||
      (ataqueJugador[i] === "TIERRA" && ataqueEnemigo[i] === "AGUA")
    ) {
      victoriasJugador++;
      indexAmbosOponentes(i, i);
      crearMensaje("Ganaste 🎊🤩🎉");
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      victoriasEnemigo++;
      indexAmbosOponentes(i, i);
      crearMensaje("Perdiste 😥😭");
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }

  verificarVidas();
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  seccionMensajes.style.display = "flex";
  seccion_mensaje.innerHTML = resultado;

  nuevoAtaqueDelJugador.innerHTML += indexAtaquesJugador;
  nuevoAtaqueDelEnemigo.innerHTML += indexAtaquesEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}
function verificarVidas() {
  if (victoriasJugador == victoriasEnemigo) {
    crearMensajeFinal(
        "¡EMPATARON! Reiniciar para ganar <p><i class='fa-solid fa-face-smile'></i></p>"
    ); //ganas
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal(
      "Felicidades, ganaste la batalla rocopon 🎉🎊✨😙🤩🤗 <p class ='figuraResultado'><i class='fa-solid fa-trophy'></i></p>"
    ); //ganas
    imgSrcEnemigo.classList.add("gris");
  } else {
    crearMensajeFinal(
      "Tu Rocopon ha muerto💀!PERDISTE! <p class ='figuraResultado'><i class='fa-solid fa-face-sad-tear'></i></p>"
    ); //pierdes
    imgSrcJugador.classList.add("gris");
  }
}

function crearMensajeFinal(resultadoFinal) {
  seccion_mensaje.innerHTML = resultadoFinal;
  subtitulo.style.display = "none";
  contenedorBotonesDeAtaque.style.display = "none";
  seccionReiniciar.style.display = "flex";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", iniciarJuego);