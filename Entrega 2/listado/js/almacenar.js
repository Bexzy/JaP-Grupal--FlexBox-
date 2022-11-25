let list = []
var objetos = JSON.stringify(list)
var datos = localStorage.getItem('Lista')

function add() {
    var valor = document.getElementById('item').value
    const boton = document.getElementById('agregar') 
    list.push(valor)
    localStorage.setItem('Lista' , list)

}

document.addEventListener("DOMContentLoaded", () => {
    const cont = document.getElementById('contenedor')
    let pepe = JSON.parse(datos)

    pepe.forEach( element => 

        cont.innerHTML += ("<li>" + element + "</li>")
        
        

    )


})


function remove() {
    const boton2 = document.getElementById('limpiar')

    localStorage.clear();
    list = []


}


function eliminar() {
self.innerHTML = ""
}


function pregunta() {
return alert("Desea eliminar el articulo?")
}