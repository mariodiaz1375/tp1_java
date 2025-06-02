let opcion = parseInt(prompt('1. Ver saludo\n2. Ver despedida\n3. Ver fecha actual'));
switch (opcion) {
    case 1:
        alert('Hola! Bienvenido.');
        console.log('Opcion saludo seleccionada');
        break;

    case 2:
        alert('Adios! Hasta pronto');
        console.log('Opcion despedida seleccionada');
        break;

    case 3:
        alert('Hoes es 02/06/2025');
        console.log('Opcion fecha seleccionada');
        break;

    default:
        alert('Opcion no valida');
        console.log('Intento con opcion no valida');
        break;
        
}