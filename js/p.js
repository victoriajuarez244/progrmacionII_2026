document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-recomendacion");
    const nombreInput = document.getElementById("nombre");
    const mensajeInput = document.getElementById("mensaje");
    const listaNombres = document.getElementById("lista-recomendaciones");
    const listaMensajes = document.getElementById("lista-mensajes");
  
    function guardarRecomendaciones(data) {
      localStorage.setItem("recomendaciones", JSON.stringify(data));
    }
  
    function obtenerRecomendaciones() {
      return JSON.parse(localStorage.getItem("recomendaciones")) || [];
    }
  
    function renderizarRecomendaciones() {
      const recomendaciones = obtenerRecomendaciones();
      listaNombres.innerHTML = "";
      listaMensajes.innerHTML = "";
  
      recomendaciones.forEach((rec) => {
        const bloqueNombre = document.createElement("div");
        // bloqueNombre.classList.add("bloque-nombre");
        bloqueNombre.innerHTML = `<p class="title"><b>${rec.nombre}</b></p><p>${rec.fecha}</p>`;
        listaNombres.appendChild(bloqueNombre);
  
        const bloqueMensaje = document.createElement("div");
        bloqueMensaje.classList.add("bloque-mensaje");
        bloqueMensaje.innerHTML = `<p>${rec.mensaje}</p>`;
        listaMensajes.appendChild(bloqueMensaje);
      });
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nombre = nombreInput.value.trim();
      const mensaje = mensajeInput.value.trim();
  
      if (nombre === "" || mensaje === "") {
        alert("Por favor, completá ambos campos.");
        return;
      }
  
      const fecha = new Date();
      const fechaFormateada = fecha.toLocaleString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
  
      const nuevaRecomendacion = {
        nombre: nombre,
        mensaje: mensaje,
        fecha: fechaFormateada,
      };
  
      const recomendaciones = obtenerRecomendaciones();
      recomendaciones.push(nuevaRecomendacion);
      guardarRecomendaciones(recomendaciones);
  
      nombreInput.value = "";
      mensajeInput.value = "";
  
      renderizarRecomendaciones();
    });
  
    renderizarRecomendaciones();
  });
  