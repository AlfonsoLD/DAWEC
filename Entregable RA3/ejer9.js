var Runner = {
    Nombre: new String,
    Apellidos: new String,
    Evento: new String,
    Fecha: new Date(),
    Dorsal: new Int,
    Hora_de_inicio: new Date(),
    Hora_de_finalizacion: new Date(),
};

function CalcularMarca(Dorsal) {
    if (Hora_de_finalizacion == null) {
        console.log("00:00:00")
    }
    else {
        console.log(Hora_de_finalizacion - Hora_de_inicio)
    }
}

function OrdenarCorredores(Runner, []) {
        Runner.sort((a, b) => {
          if(a == b) {
            return 0; 
          }
          if(a < b) {
            return -1;
          }
          return 1;
        });
}