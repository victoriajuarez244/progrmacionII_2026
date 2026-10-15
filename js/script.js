const EMOJIS = ["🐶", "🐱", "🦊", "🐼", "🐸", "🦁"];
const TIEMPO_TOTAL = 30;
const TIEMPO_OCULTAR = 800;

let cartas = [];
let seleccionadas = [];
let paresEncontrados = 0;
let tiempoRestante = TIEMPO_TOTAL;
let intervalo = null;
let juegoTerminado = false;
let bloqueado = false;

const app = document.getElementById("app");

const titulo = document.createElement("h1");
titulo.textContent = "Juego de memoria";

const cronometro = document.createElement("div");
cronometro.className = "cronometro";

const tablero = document.createElement("div");
tablero.className = "tablero";

const mensaje = document.createElement("div");
mensaje.className = "mensaje";

const botonComenzar = document.createElement("button");
botonComenzar.className = "reiniciar";
botonComenzar.textContent = "Comenzar juego";
botonComenzar.addEventListener("click", iniciarJuego);

const botonReiniciar = document.createElement("button");
botonReiniciar.className = "reiniciar";
botonReiniciar.textContent = "Reiniciar juego";
botonReiniciar.hidden = true;
botonReiniciar.addEventListener("click", iniciarJuego);

app.append(titulo, cronometro, tablero, mensaje, botonComenzar, botonReiniciar);

function mezclar(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function crearTablero() {
    tablero.innerHTML = "";
    cartas.forEach((emoji, indice) => {
        const boton = document.createElement("button");
        boton.className = "carta";
        boton.textContent = emoji;
        boton.addEventListener("click", () => elegirCarta(indice));
        tablero.appendChild(boton);
    });
}

function actualizarCronometro() {
    cronometro.textContent = "⏱ ".concat(tiempoRestante, " s");
    cronometro.classList.toggle("poco-tiempo", tiempoRestante <= 10);
}

function iniciarJuego() {
    clearInterval(intervalo);
    cartas = mezclar([...EMOJIS, ...EMOJIS]);
    seleccionadas = [];
    paresEncontrados = 0;
    tiempoRestante = TIEMPO_TOTAL;
    juegoTerminado = false;
    bloqueado = false;

    mensaje.textContent = "";
    mensaje.className = "mensaje";
    botonComenzar.hidden = true;
    botonReiniciar.hidden = true;

    crearTablero();
    actualizarCronometro();

    intervalo = setInterval(() => {
        tiempoRestante--;
        actualizarCronometro();
        if (tiempoRestante <= 0) terminarJuego(false);
    }, 1000);
}

function elegirCarta(indice) {
    const boton = tablero.children[indice];

    if (juegoTerminado || bloqueado) return;
    if (seleccionadas.includes(indice)) return;

    boton.classList.add("descubierta");
    seleccionadas.push(indice);

    if (seleccionadas.length === 2) {
        bloqueado = true;
        revisarPar();
    }
}

function revisarPar() {
    const [a, b] = seleccionadas;
    const botonA = tablero.children[a];
    const botonB = tablero.children[b];

    if (cartas[a] === cartas[b]) {
        botonA.classList.replace("descubierta", "par");
        botonB.classList.replace("descubierta", "par");
        botonA.disabled = true;
        botonB.disabled = true;
        paresEncontrados++;
        seleccionadas = [];
        bloqueado = false;
        if (paresEncontrados === EMOJIS.length) terminarJuego(true);
    } else {
        setTimeout(() => {
            botonA.classList.remove("descubierta");
            botonB.classList.remove("descubierta");
            seleccionadas = [];
            bloqueado = false;
        }, TIEMPO_OCULTAR);
    }
}

function terminarJuego(gano) {
    if (juegoTerminado) return;
    juegoTerminado = true;
    clearInterval(intervalo);

    if (gano) {
        mensaje.textContent = "¡Ganaste! Encontraste los 6 pares 🎉";
        mensaje.classList.add("victoria");
    } else {
        mensaje.textContent = "Se acabó el tiempo. ¡Perdiste!";
        mensaje.classList.add("derrota");
    }
    botonReiniciar.hidden = false;
}

mensaje.textContent = "Presioná «Comenzar juego» para jugar";
actualizarCronometro();
