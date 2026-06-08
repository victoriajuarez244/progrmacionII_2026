function validar() {

    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let sexo = document.getElementById("sexo");
    let comentario = document.getElementById("comentario");

    if (nombre.value == "") {
        alert("Completar nombre");
        nombre.focus();
        return false;
    }

    if (apellido.value == "") {
        alert("Completar apellido");
        apellido.focus();
        return false;
    }

    if (sexo.value == "") {
        alert("Seleccionar sexo");
        sexo.focus();
        return false;
    }

    if (comentario.value == "") {
        alert("Completar comentario");
        comentario.focus();
        return false;
    }

    alert("OK");
}

function cargarProfesiones() {

    let sexo = document.getElementById("sexo");
    let profesion = document.getElementById("profesion");

    if (sexo.value == "M") {
        profesion.innerHTML =
        "<option>Ingeniero</option>" +
        "<option>Mecánico</option>";
    }

    if (sexo.value == "F") {
        profesion.innerHTML =
        "<option>Docente</option>" +
        "<option>Enfermera</option>"+
        "<option>maesrta</option>" +
        "<option>educacion</option>";
    }
}