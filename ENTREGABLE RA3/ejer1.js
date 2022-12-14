// Ejercicio 1: Crea una función que devuelva verdadero si el slug (ruta de acceso) de la url coincide con la pasada como parámetro. 

var slugIntroducido=prompt("Introduce un slug")

//la funcion tiene la labor de compararme el slug introducido con el que tiene la pagina actual por lo que le pasaremos por parametros el slugIntroducido

function compararSlug(slugIntroducido){
    var slugActual=window.location.pathname;
    var esValido=new Boolean;

    if (slugIntroducido==slugActual){
        esValido=true;
    } else{
        esValido=false;

    }

    return esValido;
    
}