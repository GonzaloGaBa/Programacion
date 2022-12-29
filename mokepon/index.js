const express = require('express');

const cors = require('cors');

const app = express();

const port = 8080;

const jugadores = [];

class Jugador {}

app.get('/unirse', (req, res) => {
    const id = `${Math.random()}`;

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    //res.setHeader("Acces-Control-Allow-Origin", "*" )

    res.send(id);
});

app.use(cors());

app.listen(port, () => {
  console.log(`¡Servidor listo! ${port}`);
});