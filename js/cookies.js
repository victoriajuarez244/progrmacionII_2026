//windows alto/ancho
//innerwith x
//innerheight y para posiciones divido por 2 da el medio corta en 4 la pantalla espara los contenedores para centrar
// otra propiedad location.href.assign('url') redirecciona la pagina
//windows.history.go( ) valor negativa hacia atras valor positivo hacia adelante sirve para la posiciones historia de navegacion
// para no tener problemas usar asincronismo
//cookies problema es viejo capacidad pocos caracteres. ahora se utiliza  3 cosas  localstorage sessionstorage indexeddb
//cookie
//localstoge es una lista clave valor  valiable = string  tantas variables como quiero no hay limitaciones tiene persistencia uso igual a cookies mejor capacidad.incryptar informacion
//sessionstorage perimite crear clave  valor todas la que yo quiero con string  nohay persistencia. 
//indexeddb una base de datos indexada a al navegador. una base datos para guardar objetos

//localstorage.setItem("pepe","hola mundo")
//sessionstorage.setItem("pepe","hola mundo")
//localstorage.getItem("pepe")
//localstorage.removeItem("pepe")
//                     .clear();


function guardar() {
    const valor = document.getElementById("dato").value;
    localStorage.setItem("miDato", valor);
    alert("Guardado: " + valor);
}

function mostrar() {
    const valor = localStorage.getItem("miDato");
    document.getElementById("resultado").textContent = 
    valor ? "Valor guardado: " + valor : "No hay nada guardado";
}

function limpiar() {
    localStorage.removeItem("miDato");
    document.getElementById("resultado").textContent = "Se limpió el dato";
}

















// function probar() {
//     console.log("=== Iniciando prueba ===");

//     const valorPrueba = "dato de prueba " + Date.now();
//     localStorage.setItem("miDato", valorPrueba);
//     console.log("1) Guardado:", valorPrueba);

//     const leido = localStorage.getItem("miDato");
//     document.getElementById("resultado").textContent = "Valor guardado: " + leido;
//     console.log("2) Leído:", leido);

//     console.log("3) ¿Coincide?", leido === valorPrueba);

//     setTimeout(() => {
//     limpiar();
//     console.log("4) Limpiado. Valor actual:", localStorage.getItem("miDato"));
//     console.log("=== Prueba terminada ===");
//     }, 2000); 
// }