// EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un 
// mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.

const edadValidator = (edad) => {
    if(typeof edad !== `number` || isNaN(edad) || !Number.isInteger(edad)){
        return `El parametro ingresado no es un numero valido`;
    }

    const validator =  edad >= 18 ? `Eres mayor de edad` : `Eres menor de edad`;
    return validator
};

console.log(edadValidator(18));
console.log(edadValidator(14));
console.log(edadValidator("18"));
console.log(edadValidator(17.9));

// EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
// de lo siguiente:
// • Examen =20%
// • tareas = 40%
// • asistencia = 10%
// • investigación = 30%
// Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.

const finalNote = (nombre,carnet,exam,tareas,asistencia,investigacion) =>{
    if ([exam, tareas, asistencia, investigacion].some(nota => typeof nota !== 'number' || nota < 0 || nota > 10)) {
        return 'Las notas deben ser números entre 0 y 10.';
    }

    const nota = (exam * 0.20 + tareas * 0.40 + asistencia * 0.10 + investigacion * 0.30).toFixed(2);
    const datos = `Nombre alumno:${nombre} Carnet:${carnet} NotaFinal:${nota}`;
    return datos;
}

console.log(finalNote('Jefferson ','K7092323',9,8.7,7,9));

// EJERCICIO 3:
// CATEGORIA    AUMENTO
//  A            15%
//  B            30%
//  C            10%
//  D            20%
// Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
// Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
// aumento. Deberá demostrar los datos del empleado y el aumento salarial.

const calcularAumento = (nombre, salario, categoria) => {
    const aumentos = {
        A: 0.15,
        B: 0.30,
        C: 0.10,
        D: 0.20  
    };

    if (typeof salario !== 'number' || salario <= 0) {
        return 'El salario debe ser un número positivo.';
    }
    
    if (!Object.keys(aumentos).includes(categoria)) {
        return 'Categoria no valida. utilizar validas: A, B, C, D.';
    }

    const porcentajeAumento = aumentos[categoria];
    const aumento = salario * porcentajeAumento;
    const salarioFinal = salario + aumento;

    const datos = `Nombre: ${nombre} Salario Actual: $${salario.toFixed(2)}\nCategoría: ${categoria} Aumento: $${aumento.toFixed(2)}\nSalario Final: $${salarioFinal.toFixed(2)}`;
    return datos;
};

console.log(calcularAumento('Juan Pérez', 2000, 'A'));
console.log(calcularAumento('Pedro Ruiz', 1800, 'E'));

// EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
// calcular cual número es el mayor y devolverlo
//
//PRIMER VERSION, SOLO FUNCIONA CON NODE.JS y GENERA CONFLICO CON MANIPULACION DE DOM
//
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('¿Ingrese un primer numero? ', (num1) => {
//     rl.question('¿Ingrese un segundo numero? ', (num2) => {
//         const mayor = num1 > num2 ? console.log(`El segundo numero es mayor que el primero ${num2}`) : console.log(`El primer numero es mayor que el segundo numero ${num1}`);
//         rl.close(); 
//         return mayor;
//     });
// });

document.getElementById('numMayor').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const numMayorResult = document.getElementById('numMayorResult')

    const mayor = num1 > num2 
    ?`El primer numero ${num1} es mayor que el segundo numero ${num2}` 
    :`El segundo numero ${num2} es mayor que el primer numero ${num1}`;

    numMayorResult.innerHTML = mayor
})

// EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
// Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
// coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
// el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
// aplicara en base a lo que selecciono el usuario.

const calcularDescuento = () => {
    const seleccion = document.getElementById('escogerAuto').value;
    
    if (seleccion === 'ESCOGE UN AUTO') {
        document.getElementById('resultado').innerHTML = 'Por favor, seleccione un coche.';
        return;
    }

    const [coche, precioOriginal] = seleccion.split(',');
    const precio = Number(precioOriginal);
    let descuento = 0;

    if (coche === 'FORD FIESTA') {
        descuento = 5;
    } else if (coche === 'FORD FOCUS') {
        descuento = 10;
    } else if (coche === 'FORD ESCAPE') {
        descuento = 20;
    }

    const descuentoAplicado = (precio * descuento) / 100;
    const precioConDescuento = precio - descuentoAplicado;

    document.getElementById('resultado').innerHTML = 
        `El coche seleccionado es ${coche}.<br>` +
        `Precio original: $${precio.toFixed(2)}<br>` +
        `Descuento aplicado: $${descuentoAplicado.toFixed(2)} (${descuento}%)<br>` +
        `Precio con descuento: $${precioConDescuento.toFixed(2)}`;
};

document.getElementById('calcularBtn').addEventListener('click', calcularDescuento);

// EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
// en cuenta lo siguiente:
// Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
// descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
// es Puerto el Triunfo el descuento será del 15%.
const descViaje = () => {
    const selectOrigen = document.getElementById('origenSelect').value;
    const selectDestino = document.getElementById('destinoSelect').value;

    if (selectOrigen === 'ESCOGE UN PUNTO DE ORIGEN') {
        document.getElementById('viajeResult').innerHTML = 'Por favor, seleccione un punto de origen.';
        return;
    }
    if (selectDestino === 'ESCOGE UN DESTINO') {
        document.getElementById('viajeResult').innerHTML = 'Por favor, seleccione un destino.';
        return;
    }
    const origen = document.getElementById('origenSelect').value;
    const destino = document.getElementById('destinoSelect').value;
    const precioOriginal = 100;

    let descuento = 0;

    if (origen === 'Ciudad de Palma') {
        if (destino === 'La Costa del Sol') {
            descuento = 5;
        } else if (destino === 'Panchimalco') {
            descuento = 10;
        } else if (destino === 'Puerto El Triunfo') {
            descuento = 15;
        }
    }

    const precioDescuento = precioOriginal - (precioOriginal * (descuento / 100));
    const mensaje = descuento > 0
    ? `El origen es ${origen}, el destino es ${destino}. El descuento aplicado es del ${descuento}%. Precio original: $${precioOriginal}. Precio con descuento: $${precioDescuento.toFixed(2)}.`
    : `El origen es ${origen}, el destino es ${destino}. No hay descuento disponible. Precio original: $${precioOriginal}.`;

    document.getElementById('viajeResult').innerHTML = mensaje;
};

document.getElementById('viajeBtn').addEventListener('click', descViaje);

// EJERCICIO 7:
// Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
// • La cantidad de valores negativos ingresados.
// • La cantidad de valores positivos ingresados.
// • La cantidad de múltiplos de 15.
// • El valor acumulado de los números ingresados que son pares.

document.getElementById('ingresarNumeros').addEventListener('click', () => {
    let negativos = 0;
    let positivos = 0;
    let multiplos15 = 0;
    let acumuladoPares = 0;

    let numeros = [];
    for (let i = 0; i < 10; i++) {
        let num = parseInt(prompt(`Tipo de numeros sugeridos \n 
            valores negativos. \n 
            valores positivos. \n 
            valores múltiplos de 15. \n 
            valores pares, \n 
            Ingrese el valor ${i + 1}:`), 10);
        if (!isNaN(num)) {
            numeros.push(num);
        } else {
            alert('Por favor ingrese un número válido.');
            i--; // Repetir el mismo índice en caso de entrada inválida
        }
    }

    numeros.forEach(num => {
        if (num < 0) {
            negativos++;
        } else if (num > 0) {
            positivos++;
        }

        if (num % 15 === 0) {
            multiplos15++;
        }

        if (num % 2 === 0) {
            acumuladoPares += num;
        }
    });

    document.getElementById('resultadosCant').innerHTML = `
        Cantidad de valores negativos: ${negativos}<br>
        Cantidad de valores positivos: ${positivos}<br>
        Cantidad de múltiplos de 15: ${multiplos15}<br>
        Valor acumulado de números pares: ${acumuladoPares}
    `;
});

// EJERCICIO 8:
// Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
// por el usuario.

document.getElementById('inputNum').addEventListener('click', () => {

    const numero = parseInt(prompt(`Ingrese un numero\n
        Para consultar su tabla de multiplicar`))
        if (!isNaN(numero)) {
            let tabla = `Tabla de multiplicar del: ${numero}<br>`
            for(let i = 1; i <= 10; i++){
                tabla += `${numero} x ${i} = ${numero * i}<br>`
                document.getElementById('resultTable').innerHTML = tabla;
            }
        } else {
            alert('Por favor ingrese un número válido.');
        }
});

// EJERCICIO 9:
// Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
// Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
// • Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
// • Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
// • Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
// • Si no está entre ningún caso anterior la frase “Temperatura desconocida”

document.getElementById('inputTemp').addEventListener('click', () => {
    
    const tempC = parseInt(prompt(`Ingrese la temperatura a consultar (Tempertura Celsius)`))

    const fahrenheit = (tempC * 9/5) + 32

    if(!isNaN(fahrenheit)){
        if(fahrenheit >= 14 && fahrenheit < 32 ){
            document.getElementById('resultTemp').innerHTML = `
            ${tempC} C°<br>
            ${fahrenheit} F°<br>
            "Temperatura baja"  `
        }else if (fahrenheit >= 32 && fahrenheit < 68 ){
            document.getElementById('resultTemp').innerHTML = `
            ${tempC} C°<br>
            ${fahrenheit} F°<br>
            "Temperatura adecuada"  `
        }else if (fahrenheit >= 68 && fahrenheit < 96 ){
            document.getElementById('resultTemp').innerHTML = `
            ${tempC} C°<br>
            ${fahrenheit} F°<br>
            "Temperatura Alta"  `
        }else{
            document.getElementById('resultTemp').innerHTML = `
            "Temperatura Desconocida"  `
        }
    }else {
        alert('La temperatura que esta ingresando no es valida o no es un numero.');
    }
})

// EJERCICIO 10:
// Se cuenta con la siguiente información:
// • Las edades de 5 estudiantes del turno mañana.
// • Las edades de 6 estudiantes del turno tarde.
// • Las edades de 11 estudiantes del turno noche.
// Nota: Las edades de cada estudiante se deberán ingresar por la web.
// Lo que queremos devolver:
// • Obtener el promedio de las edades de cada turno (tres promedios).
// • Imprimir dichos promedios (promedio de cada turno).
// • Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
// promedio de edades mayor.

function obtenerPromedio(edades) {
    const total = edades.reduce((acumulador, edad) => acumulador + edad, 0);
    return total / edades.length;
}

document.getElementById('inputEstudiantesProm').addEventListener('click', () => {
    const edadesManana = [];
    const edadesTarde = [];
    const edadesNoche = [];

    // Ingresar edades del turno mañana (5 estudiantes)
    for (let i = 0; i < 5; i++) {
        let edad = parseInt(prompt(`Ingrese la edad del estudiante ${i + 1} del turno mañana:`));
        if (!isNaN(edad)) {
            edadesManana.push(edad);
        } else {
            alert("Por favor, ingrese un número válido.");
            return;
        }
    }

    // Ingresar edades del turno tarde (6 estudiantes)
    for (let i = 0; i < 6; i++) {
        let edad = parseInt(prompt(`Ingrese la edad del estudiante ${i + 1} del turno tarde:`));
        if (!isNaN(edad)) {
            edadesTarde.push(edad);
        } else {
            alert("Por favor, ingrese un número válido.");
            return;
        }
    }

    // Ingresar edades del turno noche (11 estudiantes)
    for (let i = 0; i < 11; i++) {
        let edad = parseInt(prompt(`Ingrese la edad del estudiante ${i + 1} del turno noche:`));
        if (!isNaN(edad)) {
            edadesNoche.push(edad);
        } else {
            alert("Por favor, ingrese un número válido.");
            return;
        }
    }

    const promedioManana = obtenerPromedio(edadesManana);
    const promedioTarde = obtenerPromedio(edadesTarde);
    const promedioNoche = obtenerPromedio(edadesNoche);

    let mayorPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);
    let turnoConMayorPromedio = '';

    if (mayorPromedio === promedioManana) {
        turnoConMayorPromedio = 'mañana';
    } else if (mayorPromedio === promedioTarde) {
        turnoConMayorPromedio = 'tarde';
    } else {
        turnoConMayorPromedio = 'noche';
    }

    // Mostrar resultados
    document.getElementById('resultProm').innerHTML = `
        Promedio de edades turno mañana: ${Math.round(promedioManana)}<br>
        Promedio de edades turno tarde: ${Math.round(promedioTarde)}<br>
        Promedio de edades turno noche: ${Math.round(promedioNoche)}<br><br>
        El turno con el promedio de edades más alto es el turno ${turnoConMayorPromedio}.
    `;  
});