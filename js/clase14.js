let videojuegos = [
    {
        nombre: "Minecraft",
        genero: "Sandbox",
        clasificacion:"5 estrellas",  
        precio: 20
    },
    {
        nombre: "Terraria",
        genero: "Aventura",
        clasificacion:"4 estrellas",
        precio: 10
    },
    {
        nombre: "Stardew Valley",
        genero: "Simulacion",
        clasificacion:"5 estrellas",
        precio: 15
    }
];

let contenedor = document.getElementById("contenedor");

console.log(typeof contenedor);

console.log(typeof videojuegos);


for (let i = 0; i < videojuegos.length; i++) {

    contenedor.innerHTML += `
        <div class="ficha">
            <p>Nombre: ${videojuegos[i].nombre}</p>
            <p>Género: ${videojuegos[i].genero}</p>
            <p>Precio: ${videojuegos[i].precio}</p>
            <p>clasificacion: ${videojuegos[i].clasificacion}</p>

        </div>
    `;
}