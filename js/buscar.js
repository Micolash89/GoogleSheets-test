//import { API } from './constantes.js';

//console.log(API)

let form = document.querySelector('form');
let buscar = document.getElementById('palabra');
let tbody = document.querySelector('tbody');



form.addEventListener('submit', async function (e) {
    e.preventDefault();

    let btn = document.getElementById('buscar');
    btn.innerText = "buscando...";

    let titulo = document.getElementById('titulo');
   let mensaje = document.getElementById("mensaje");
    try {
        fetch("https://script.google.com/macros/s/AKfycbwd1qG3_DZ0Dv0ytrkOeXdOQ2-p2R5QYQwkImHGdXEjAGcR06d7G7EJfilRLcBDG9D2/exec")
            .then(res => res.json())
            .then(data => {
                const vec = data.nombre;
                if (vec.length) {
                    let text = vec.map((j) => {
                        return `
                    <tr>
                        <td>${j[0]}</td>
                        <td>${j[1]}</td>
                        <td>${j[2]}</td>
                         <td>${j[3]}</td>
                        <td class="editar" onClick="editar">Editar</td>
                        <td class="eliminar" onClick="eliminar"  >eliminar</td>
                    </tr>
                 `});
                    tbody.innerHTML = text.join("");
                    // let edit = document.querySelectorAll('.editar');
                    // console.log(edit);
                    // console.log($(td).closest('tr').children().eq(0).text());
                    // function editar(e) {
                    // console.log(e.target)
                    // let id = $(e.target).closest('tr').children().eq(0).text();
                    // fetch(API + `?del=true&id=${id}`).then(res => res.text()).then(data => console.log(data));


                    // edit.forEach(function (td) {
                    //let id = $(td).closest('tr').children().eq(0).text();
                    // td.addEventListener('click', async () => {
                    //     fetch(api + `?del=true&id=${id}`).then(res => res.text()).then(data => console.log(data));
                    // });
                    // });
                    //}

                    function eliminar(td) {
                        let eli = document.querySelectorAll('.eliminar');
                        eli.forEach(function (td) {
                            let id = $(td).closest('tr').children().eq(0).text();
                            td.addEventListener('click', function () {

                            });
                        });
                    }


                }
                else
                    mensaje.innerHTML = "no hay datos";



            });
    } catch (error) {
        mensaje = "mensaje error con la base de datos " + error;
    } finally {
        btn.innerText = "Buscar";
    }

})

