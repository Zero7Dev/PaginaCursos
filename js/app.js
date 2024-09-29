// variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');


//listeners

cargarEventListeners();
function cargarEventListeners() {
    //dispara cuando se presiona "agregar carrito"
    cursos.addEventListener('click', comprarCurso);
}
//funciones
function comprarCurso(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);
    }
}