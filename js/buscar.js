//import { API } from './constantes.js';

//console.log(API)

let form = document.querySelector('form');
let buscar = document.getElementById('palabra');
let tbody = document.querySelector('tbody');
let btn = document.getElementById('buscar');

form.addEventListener('submit', find);

async function find(e) {
    e.preventDefault();

    btn.innerText = "buscando...";

    let titulo = document.getElementById('titulo');
    let mensaje = document.getElementById("mensaje");

    actualizarTabla();
};

window.editar = async function editar(id) {
try {
    fetch("https://script.google.com/macros/s/AKfycbyLXj2BzeJ-fkwVZYcqrt5mzhVT7CkcYj3BeZEueIxcRscUbZJkuuzPxMasxqS92bJ1/exec" + `?update=true&id=${id}$data=${form[0].value}`)
        .then(res => res.text())
        .then(data => {
            actualizarTabla();
            console.log(data)});
    }catch(error){
        console.log(error);
    }
}
window.eliminar = async function eliminar(id) {
try {
    fetch("https://script.google.com/macros/s/AKfycbyLXj2BzeJ-fkwVZYcqrt5mzhVT7CkcYj3BeZEueIxcRscUbZJkuuzPxMasxqS92bJ1/exec" + `?del=true&id=${id}`)
        .then(res => res.text())
        .then(data => {
            actualizarTabla();
            console.log(data)});
    }catch(error){
        console.log(error);
    }
}

async function actualizarTabla() {
    try {
        fetch("https://script.google.com/macros/s/AKfycbwd1qG3_DZ0Dv0ytrkOeXdOQ2-p2R5QYQwkImHGdXEjAGcR06d7G7EJfilRLcBDG9D2/exec")
            .then(res => res.json())
            .then(data => {
                const vec = data.nombre;
                if (vec.length) {
                    const text = vec.map((j) => {
                        return `
                    <tr>
                        <td>${j[0]}</td>
                        <td>${j[1]}</td>
                        <td>${j[2]}</td>
                        <td>${j[3]}</td>
                        <td class="editar" onClick="editar(${j[0]})">Editar</td>
                        <td class="eliminar" onClick="eliminar(${j[0]})">eliminar</td>
                    </tr>
                 `});
                    tbody.innerHTML = text.join("");
                }
                else
                    mensaje.innerHTML = "no hay datos";

            });
    } catch (error) {
        mensaje = "mensaje error con la base de datos " + error;
    } finally {
        btn.innerText = "Buscar";
    }
}