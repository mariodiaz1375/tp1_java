let mensaje = ''
do {
    mensaje = prompt('Ingrese un mensaje para repetir')
    if (mensaje.toLowerCase() != 'salir') {
        alert(mensaje)
        console.log(mensaje)
    }
}while (mensaje.toLowerCase() != 'salir')
console.log('RPOGRAMA TERMINADO')