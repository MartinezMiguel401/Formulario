// Se crea un arreglo vacío donde vamos a guardar los alumnos
let alumnos = [];


// Función que calcula y muestra el promedio del alumno
function calcularPromedio() {


    // Guardamos lo que escribió el usuario en el campo nombre
    let nombre = document.getElementById("nombre").value;


    // Obtenemos la primera calificación y la convertimos a número decimal
    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );


    // Hacemos lo mismo con las demás calificaciones
    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );

    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );


    // Obtenemos la edad y también la convertimos a número
    let Edad = parseFloat(
        document.getElementById("edad").value
    );


    // Sumamos las cuatro calificaciones y las dividimos entre 4
    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Revisamos que el nombre y las calificaciones sí tengan datos
    if (
        nombre === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        // Mostramos un mensaje si falta algún dato
        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        // Detiene la función para que ya no siga ejecutándose
        return;
    }


    // Comprueba que la edad tenga sentido
    if (Edad < 0 || Edad > 120) {

        // Muestra una alerta en pantalla
        alert("Escribe una edad valida por favor");

        return;
    }


    // Comprueba que las calificaciones estén entre 0 y 10
    if (
        calificacion1 < 0 || calificacion1 > 10 ||
        calificacion2 < 0 || calificacion2 > 10 ||
        calificacion3 < 0 || calificacion3 > 10
    ) {

        alert("Ninguna calificacion puede ser mayor a 10 o menor a 0");

        return;
    }


    // Si el promedio está entre 9 y 10 entra aquí
    if (promedio >= 9 && promedio <= 10) {

        // innerHTML sirve para escribir contenido dentro del div resultado
        document.getElementById("resultado").innerHTML =

            // Mostramos el nombre del alumno
            "<strong>Alumno:</strong> " + nombre +

            // br sirve para hacer un salto de línea
            "<br><strong>Edad:</strong> " + Edad +

            // toFixed(2) hace que el promedio tenga solamente 2 decimales
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +

            "<br><br>Excelente";
    }


    // Si el promedio está entre 8 y 8.9 mostramos Muy bien
    if (promedio >= 8 && promedio <= 8.9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + Edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Muy bien";
    }


    // Si está entre 7 y 7.9 mostramos Bien
    if (promedio >= 7 && promedio <= 7.9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + Edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Bien";
    }


    // Comprueba el siguiente rango de promedio
    if (promedio >= 6.5 && promedio <= 6.9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + Edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Piensa en conta";
    }


    if (promedio >= 6 && promedio <= 6.4) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + Edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Date de baja";
    }


    // Si el promedio está entre 0 y 5.9 entra en este último caso
    if (promedio >= 0 && promedio <= 5.9) {

        document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + Edad +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br>Vete a turismo o la 11";
    }

}



// Función para guardar un nuevo alumno en el arreglo
function AgregarAlumnos() {


    // Sacamos nuevamente los datos porque esta es otra función
    let nombre = document.getElementById("nombre").value;

    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );

    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );

    let Edad = parseFloat(
        document.getElementById("edad").value
    );


    // Calculamos el promedio del alumno que vamos a guardar
    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;


    // Volvemos a validar los datos antes de guardarlos
    if (
        nombre === "" ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";

        return;
    }


    // Validación de edad
    if (Edad < 0 || Edad > 120) {

        alert("Escribe una edad valida por favor");

        return;
    }


    // Validación de calificaciones
    if (
        calificacion1 < 0 || calificacion1 > 10 ||
        calificacion2 < 0 || calificacion2 > 10 ||
        calificacion3 < 0 || calificacion3 > 10
    ) {

        alert("Ninguna calificacion puede ser mayor a 10 o menor a 0");

        return;
    }


    // Creamos un objeto que va a guardar todos los datos del alumno
    let Alumno = {

        // A la propiedad nombre le damos el valor de la variable nombre
        nombre: nombre,

        edad: Edad,

        calificacion1: calificacion1,

        calificacion2: calificacion2,

        calificacion3: calificacion3,

        calificacion4: calificacion4,

        promedio: promedio
    };


    // push mete el objeto Alumno al final del arreglo alumnos
    alumnos.push(Alumno);


    // Avisamos que sí se guardó
    alert("Alumno agregado correctamente");
}



// Función que muestra todos los alumnos que están guardados
function MostrarAlumnos() {


    // Esta variable va a ir juntando todo el texto que queremos mostrar
    let texto = "";


    // El for se repite mientras existan alumnos dentro del arreglo
    for (let i = 0; i < alumnos.length; i++) {


        // += agrega más información sin borrar la que ya estaba
        texto +=

            // alumnos[i] representa al alumno que se está recorriendo en ese momento
            "<strong>Alumno: </strong>" + alumnos[i].nombre +

            "<br><strong>Edad: </strong>" + alumnos[i].edad +

            "<br><strong>Promedio: </strong>" + alumnos[i].promedio.toFixed(2) +

            "<br><br>";
    }


    // Al final mostramos todo el texto que juntamos
    document.getElementById("resultado").innerHTML = texto;
}



// Función que borra todos los alumnos guardados
function LimpiarAlumnos() {


    // Volvemos a dejar el arreglo vacío
    alumnos = [];


    // También borramos lo que estaba impreso en pantalla
    document.getElementById("resultado").innerHTML = "";


    // Avisamos que ya se borró la lista
    alert("Lista de alumnos eliminada");
}