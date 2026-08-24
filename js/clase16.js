const salidaEl = document.getElementById("salida");
const nombreInput = document.getElementById("nombre");
const precioInput = document.getElementById("precio");
const Agregar = document.getElementById("agregar");
const Obtener = document.getElementById("obtener");

const salida = (msg) => {
  if (salidaEl) {
    salidaEl.textContent = JSON.stringify(msg, null, 2);
  }
};

const db = await new Promise((resolve, reject) => {
  const req = indexedDB.open("demo", 1);

  req.onupgradeneeded = () => {
    req.result.createObjectStore("productos", { keyPath: "id", autoIncrement: true });
  };

  req.onsuccess = () => resolve(req.result);
  req.onerror = () => reject(req.error);
});

const store = (mode) =>
  db
    .transaction("productos", mode)
    .objectStore("productos");

const put = (producto) =>
  new Promise((res, rej) => {
    const req = store("readwrite").put(producto);
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });

const getAll = () =>
  new Promise((res, rej) => {
    const req = store("readonly").getAll();
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });

Agregar.onclick = async () =>
  await put({
    nombre: nombreInput.value,
    precio: +precioInput.value,
  });

Obtener.onclick = async () =>
  salida(await getAll());











// const salidaEl = document.getElementById("salida");

// const salida = (msg) => {
//   if (salidaEl) {
//     salidaEl.textContent = JSON.stringify(msg, null, 2);
//   }
// };

// const db = await new Promise((resolve, reject) => {
//   const req = indexedDB.open("demo", 1);

//   req.onupgradeneeded = () => {
//     req.result.createObjectStore("productos", { keyPath: "id", autoIncrement: true, });
//   };

//   req.onsuccess = () => resolve(req.result);
//   req.onerror = () => reject(req.error);
// });


// const store = (mode) =>
//         db
//         .transaction("productos", mode)
//         .objectStore("productos");

//     const put = (producto) =>
//         new Promise((res, rej) => {
//         const req = store("readwrite").put(producto);
//         req.onsuccess = () => res(req.result);
//         req.onerror = () => rej(req.error);
//         });

// const getAll = () =>
//     new Promise((res, rej) => {
//     const req = store("readonly").getAll();
//         req.onsuccess = () => res(req.result);
//         req.onerror = () => rej(req.error);
//             });




// btnAgregar.onclick = async () =>
//             await put({
//                 nombre: nombreInput.value,
//                 precio: +precioInput.value,
//             });
            
//             btnObtener.onclick = async () =>
//             salida(await getAll());
    
    
    
    
    
    
    
    
    
    
    
    
            // const store= (module) =>
        //     db
        //     .trassaction("productos",mode)
        //     .objectstore("productos");
        
        // const put =(producto) =>
        //     new Promise ((res,rej)) =>{
        //         const req =store ("readwrite").put (producto);
        //         req.onsuccess=()=> res(req.result);
        //         req.onerror=() => rej(req.error);
        
        //     });