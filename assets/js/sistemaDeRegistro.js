/*
Sistema para registrar pacientes y mostrarlos en tarjetas

Primer paso: Obtener todos los elementos de nuuestro html y guardarlos en variables de JS
*/

//Inputs separados, boton, textoConfirmacion

let nombrePaciente = document.getElementById("nombrePaciente"); //input nombre
let edadPaciente = document.getElementById("edadPaciente"); //input edad
let botonRegistrarPaciente = document.getElementById("btnRegistrarPaciente"); //boton
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion"); //container mensaje de confirmacion
let contenedorTarjeta = document.getElementById("contenedorTarjetas"); //container para tarjetas


//Array para almacenar a mis pacientes
let pacientes = [];

//Funcion para registrar pacientes
function registrarPaciente(){

    //Obtengo el atributo value de mi input 
    let valorNombrePaciente = nombrePaciente.value;
    let valorEdadPaciente = edadPaciente.value;

    //Array para guardar los datos del paciente
    let paciente = {
        nombre : valorNombrePaciente, // tomo el valor del input y lo asigno a esta variable
        edad : valorEdadPaciente, // tomo el valor del input y lo asigno a esta variable
        citas: []
    };

    //Cuando tengo ls informacion del paciente...
    pacientes.push(paciente); // array.push(valorAagregar) -> agrega un valor al final del array

    // 1. Muestro info en consola
    mostrarInfoPaciente(paciente); // Invocacion de otra funcion para mostrar la info del paciente

    // 2. Muestro el Mensaje de confirmacion (textContent)
    mensajeConfirmacion.textContent = "Paciente registrado con exito";

    // 3. Genera la tarjeta del paciente
    generarTarjetaPaciente(paciente); // Invocacion de una funcion para generar tarjetas

    return paciente;


} // fin de la funcion registrarPaciente

// Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: ", paciente.edad); //31
    console.log("Citas registradas: ");
    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora)
    });
} // fin de la funcion mostrarInfoPaciente

// Funcion para generar tarjetas de pacientes
function generarTarjetaPaciente(paciente){

    //Crear
    let tarjetaDiv = document.createElement("div"); // <div></div>
    tarjetaDiv.className = "col-sm-12 col-md-6 col-lg-3"; // aqui le especifico que es una columna

    //Crear el contenido de la tarjeta
    tarjetaDiv.innerHTML = `<div class="card border-info mb-3">
                                <div class="card-header">
                                    Paciente
                                </div>
                                    <div class="card-body">
                                        <h5 class="card-title">${paciente.nombre}</h5>
                                        <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
                                        <p>Edad: ${paciente.edad}</p>
                                    </div>
                                </div>`
    //Poner
    contenedorTarjeta.appendChild(tarjetaDiv); 
} // Cierre de la funcion generarTarjetaPaciente

botonRegistrarPaciente.addEventListener("click", registrarPaciente); //Evento para registrar pacientes


