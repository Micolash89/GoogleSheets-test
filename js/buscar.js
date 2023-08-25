
let api = "https://script.google.com/macros/s/AKfycbw0nU2uiC1-wUhKnZwUXF-MixD8cBs0BMRojUYw04TqB58xF3s_1D2Y072XAw2Lyu02/exec";

let form = document.querySelector('form');
let buscar = document.getElementById('palabra');
let tbody = document.querySelector('tbody');

 



form.addEventListener('submit', async function (e) {
    e.preventDefault();

    let btn = document.getElementById('buscar');
    btn.innerText = "buscando...";
    let titulo = document.getElementById('titulo');
    mensaje = document.getElementById("mensaje");
    try {
        fetch(api)
            .then(res => res.json())
            .then(data => {
                let vec = data.nombre;
                if (vec.length) {
                    vec.forEach((j) => {
                        tbody.innerHTML += `
                    <tr>
                        <td>${j[0]}</td>
                        <td>${j[1]}</td>
                        <td>${j[2]}</td>
                         <td>${j[3]}</td>
                        <td class="editar" onClick="editar">Editar</td>
                        <td class="eliminar" onClick="eliminar"  >eliminar</td>
                    </tr>
                 `
                });
                
                let edit = document.querySelectorAll('.editar');
                console.log(edit);
                console.log($(td).closest('tr').children().eq(0).text());
                function editar() {
                    



                    edit.forEach(function (td) {
                        let id = $(td).closest('tr').children().eq(0).text();
                        td.addEventListener('click', async () => {
                            fetch(api + `?del=true&id=${id}`).then(res => res.text()).then(data => console.log(data));
                        });
                    });
                }
                
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

