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

    filtrar();
};

window.editar = async function editar(id) {
try {
    fetch("https://script.google.com/macros/s/AKfycbzsqKDGdM4uMbR6G85SMPE5DRdw5vyi1KG1kkqbCr2AEHDJGzuadB12iX1iJtqjXg11/exec"+`?update=true&id=${id}&dato=${form[0].value}`)
        .then(res => res.text())
        .then(data => {
            actualizarTabla();
            titulo.innerText += " - " + data;});
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
        fetch("https://script.google.com/macros/s/AKfycbwd1qG3_DZ0Dv0ytrkOeXdOQ2-p2R5QYQwkImHGdXEjAGcR06d7G7EJfilRLcBDG9D2/exec"+`?var=${form[0].value}`)
        .then(res => res.json())
        .then(data => {
                const vec = data.nombre;
                if (vec.length) {
                    const text = vec.map((j) => {
                        return `
                    <tr>
                        <td class="id">${j[0]}</td>
                        <td class="nombre">${j[1]}</td>
                        <td >${j[2]}</td>
                        <td >${j[3]}</td>
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

async function filtrar() {
    try {
        fetch("https://script.google.com/macros/s/AKfycbwhPIZ2lRoQoJAmANksbf8SEVsGxUmqoEAWXjRkU_KMM4DqS_zGFndNVmr3LzGEtRrB/exec")
        .then(res => res.json())
        .then(data => {
                const vec = data.nombre;
                if (vec.length) {
                    const text = vec.map((j) => {
                        return `
                    <tr>
                        <td class="id">${j[0]}</td>
                        <td class="nombre">${j[1]}</td>
                        <td >${j[2]}</td>
                        <td >${j[3]}</td>
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