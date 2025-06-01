let contar = parseInt(prompt('Ingrese un numero'))
console.log('probando')
if (contar > 0) {
    for (let i = contar; i>=1; i--) {
        console.log('El numero es: ', i)
    }
    console.log('DESPEGUE!!')
}
else {
    console.log('Ingresa un numero positivo para la cuenta regresiva')
}