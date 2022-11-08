function ValidateString()


let cadena1 = window.prompt("introduce la cadena")
let cadena2 = window.prompt("introduce la cadena")

cadena1 = getCleanedString(cadena1);
cadena2 = getCleanedString(cadena2);
// Comprobar si son iguales
if(cadena1 === cadena2) console.log("Son iguales");
else console.log("No son iguales");

//Funcion para limpiar la cadena
function getCleanedString(cadena){
    // Definimos los caracteres que queremos eliminar
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
 
    // Los eliminamos todos
    for (var i = 0; i < specialChars.length; i++) {
        cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }   
 
    // Lo queremos devolver limpio en minusculas
    cadena = cadena.toLowerCase();
 
    // Quitamos espacios y los sustituimos por _
    cadena = cadena.replace(/ /g,"_");
 
    // Quitamos acentos y "ñ".
    cadena = cadena.replace(/á/gi,"a");
    cadena = cadena.replace(/é/gi,"e");
    cadena = cadena.replace(/í/gi,"i");
    cadena = cadena.replace(/ó/gi,"o");
    cadena = cadena.replace(/ú/gi,"u");
    cadena = cadena.replace(/ñ/gi,"n");
    return cadena;
 }