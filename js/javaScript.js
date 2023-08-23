const form = document.getElementById('formulario');

form.addEventListener('submit',async function (e) {
    e.preventDefault();
    const data = new FormData(form);
    let btn = document.getElementById('btn');
    btn.value = "enviando...";
    let titulo = document.getElementById('titulo');
    fetch("https://script.google.com/macros/s/AKfycbx5CN1m7Ch46Zl5TexrvMhwG8mVEIF-znB04vAm1fduA00g4jpdc9WTBZqSJmxT4G9V/exec", {
        method: 'POST',
        body: data,
    }).then( res => res.text())
        .then( data => {
            titulo.innerText = "Gracias por contactarnos " + data;
            btn.value = "enviado";

         });
})





////////enviar a google  sheet un registro con una api///// no es gratis la api-30 dias de prueba sad
// const formulario = document.getElementById('formulario');

// console.log(formulario);

// formulario.addEventListener('submit', function (e) {
//     e.preventDefault();
//     fetch("https://sheet.best/api/sheets/35c11845-7cfa-4d02-aad7-ef10f8b17207", {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             "nombre": formulario.nombre.value,
//             "correo": formulario.correo.value,
//             "telefono": formulario.telefono.value,
//         })

//     });

// });