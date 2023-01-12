//1
        let numParrafos = document.getElementsByTagName("p").length
        console.log(numParrafos)
//2         
        let parrafo2 = document.getElementsByTagName("p")[1].textContent
        console.log(parrafo2)
//3        
        let numEnlaces = document.getElementsByTagName("a").length
        console.log(numEnlaces)
//4
        let primerEnlace = document.getElementsByTagName("a")[0].getAttribute("href")
        console.log(primerEnlace)

//5
        let penultimoEnlace = document.getElementsByTagName("a")[document.getElementsByTagName("a").length-2].getAttribute("href")
        console.log(penultimoEnlace)

//6
        let enlace = document.getElementsByTagName("a")
        let suma = 0

        for (let i = 0; i < enlace.length; i++) {
            link = enlace[i].href

            if(link.includes("/wiki/Municipio")){
                suma++;
            }
        }
        console.log(suma)

//7
        let parrafouno = document.getElementsByTagName("p")[0]
        let numeroEnlaces = parrafouno.getElementsByTagName("a").length
        console.log(numeroEnlaces)


let info = document.getElementById("info");
info.innerHTML = "1.Numero de parrafos: "+numParrafos + "<br>" + "2.Contenido del segundo parrafo" +parrafo2 + "<br>"
+ "3.Numero de enlaces del documento: "+numEnlaces + "<br>"
+ "4.Primer enlace: "+ primerEnlace+ "<br>" +
 "5.penultimo enlace: "+penultimoEnlace + "<br>" +
 "6. numero de veces que hay wiki/municipio: "+suma + "<br>"
 + "7. numero de enlaces del primer parrafo: "+numeroEnlaces;