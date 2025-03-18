function abrirModal (src) {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('imgModal').src = src;
}

function cerrarModal(){
    document.getElementById('modal').style.display = 'none';
}