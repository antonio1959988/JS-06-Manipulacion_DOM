/*
DOM (Document Object Model / Modelo de Objetos del Documento) es una API para documentos HTML y XML.

Cuando creamos paginas que usan HTML + CSS estamos creando paginas estaticas (porque no tienen interactividad), cuando agregamos JavaScript nuestras paginas se convierten en sitios dinamicos (tienen interactividad).

El navegador lee nuestro documento html de arriba a abajo, de izquierda a derecha (renderizacion)

Para que una pagina se renderice correctamente se toma en cuenta el contenido, el peso de las imagenes, la conexion a iternet, etc.

Cuando el documento se renderiza, se crea un "arbol" (DOM), tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de esas etiquetas se consideran "Hojas" (nodos).

Cuando hablamos del dom y entendemos que se representa con un arbol con ramas y hojas entendemos que cada una de estas ramas y hojas es un nodo.

Que es un nodo?
Representacion mas basica de lo que existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, puede set un texto, incluso un comentario.

    - Document: Nodo raiz, a partir del cual se derivan los demas nodos. Es el objeto a partir del cual se puede acceder a cualquier elemento dentro de el. Todos los nodos derivan de este.

    - Element: Son nodos definidos por etiquetas html (div, h1, p, img, meta, head, script, etc), ya sea que se vean o no se vean (etiquetas que interpreta el navegador)

    - Text: Es el texto que hay dentro de un elemento se considera un nodo, con la caaracteristica que es un nodo hijo.

    - Atributes: Los atributos de las etiquetas tambien se convierten en nodos. Son nodos que estan asociados a un elemento y se pueden considerar tambien nodos hijos

    - Comment: Los comentarios tambien son un nodo, porque forma parte del documento.


    ¿Para que utilizamos javascript en un DOM?
        - Agregar elementos html
        - Modificar elementos html
        - Eliminar elementos html

    document.body.p
    //caja.folderDocumentos.folderRojo.actaNacimiento

    console.log('Hello World!');
*/

//Comenzamos a trabajar con los nodos de mi documento html

// 1. Guardar los elementos html en variables JS (let,var,const)
/* Metodos de seleccion de elementos: Permiten traer una etiqueta de html y guardarla para su uso posterior

    Metodos tradicionales
    - getElementByID         (trae el elemento por su id)
    - getElementByTagName
    - getElementByClassName

*/

//Aqui obtengo un elemento por id
let nombrePaciente = document.getElementById('nombrePaciente');
console.log(nombrePaciente);


//Aqui obtengo varios elementos por clase
const columnas = document.getElementsByClassName("col");
console.log(columnas);

//Aqui obtengo varios elementos por etiqueta
const inputs = document.getElementsByTagName("input");
console.log(inputs);

/*
Metodos actuales
La unica diferencia entre el querySelector y el getElement, es que tenemos que especificar el tipo de selector que usaremos (. para clase, # para id, etc)

    . document.querySelector
    . document.querySelectorAll

*/

//Aqui obtengo un elemento por el selector #
let conntainerPadre = document.querySelector("#containerPadre");
console.log(conntainerPadre);

//Aqui obtengo varios elementos por el selector .
let containers = document.querySelectorAll(".container");
console.log(containers);

/*Primer paso: Guardar nuestras etiquetas en variables de JS*/

/*
Metodos para modificar elementos

    - innerHTML: Esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. Asignamos una cadena de texto y podemos modificar o eliminar el texto.  (ya existe un texto)

    - textContent: Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar o eliminar el texto. (crear un nuevo texto)

*/

//Modificando el texto de un H1 con innerHTML
let titulo = document.getElementById("titulo");
titulo.innerHTML = "Nuevo texto de mi titulo";

//Creando un nuevo texto con innerHTML
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

mensajeConfirmacion.innerHTML = "<p>Mensaje de confirmacion</p>";

/*
Crear elementos

    . Crear el elemento
         - createElement
         - createTextNode
         - createComment

    - Poner el elemento
        - append
        - appendChild

*/

//Creando un elemento con createElement
let imagen = document.createElement("img");

//Crear los atributos de un elemento
imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt = "foto de Perro feliz";

//Poner mi imagen en el contenedor de mensajeConfirmacion
mensajeConfirmacion.appendChild(imagen);