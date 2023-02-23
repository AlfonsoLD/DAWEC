window.onload = cargaDatos
let main = document.getElementById("main")
let generate = document.getElementById("generate")
generate.addEventListener("click", cargaDatos)
let users = []

window.onload = function () {
    document.getElementById('guardar_user_xml').addEventListener('click',guardar_user_xml)
    document.getElementById('guardar_user_fetch').addEventListener('click',guardar_user_fetch)
}



function cargaDatos() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log("onreadystatechange - peticion a WEB randomUser")
        if (xhr.readyState ==4 && xhr.status==200) {
            let user = JSON.parse(xhr.responseText);

            generarCarta(user);
        }
    };
    xhr.open("GET", "https://randomuser.me/api/?nat=es");
    xhr.send();
}

function generarCarta(userObj) {
    user = userObj.results[0]

    main.innerHTML = `
    
    
    <div class="card" style="width: 18rem;">
        <img src="${user.picture.large}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${user.name.title} ${user.name.first}</h5>

        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${user.location.street.name} ${user.location.street.number}</li>
            <li class="list-group-item">${user.phone}</li>
            <li class="list-group-item">${user.email}</li>
        </ul>
        <button type="button" id="add" class="btn btn-light">Guardar user en la BDD</button>
    </div>
    
    `
    let addUser = document.getElementById("add")
    addUser.addEventListener("click", ()=>{
        users.push(user)
        construirTabla(users)

    })
}


function construirTabla(users){
    console.log(user)

    document.getElementById('main').innerHTML +="<br>"
    let container_table = document.getElementById('tabla')
    container_table.innerHTML =""
    
    let table = document.createElement('table')

    let tr_header = document.createElement('tr')

    let columnas = [
        'NAME',
        'STREET',
        'PHONE',
        'EMAIL'
    ]

    columnas.forEach((columna)=>{
        let th = document.createElement('th');
        th.appendChild(document.createTextNode(columna))
        tr_header.appendChild(th)
    })

    table.appendChild(tr_header);

    users.forEach((user)=>{
        let tr = document.createElement('tr');
        for( const camp in user){
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(user[camp]))
            tr.appendChild(td)
        }
        table.appendChild(tr)
    })

    container_table.appendChild(table)
}





function guardar_user_fetch(){
    console.log(users); 
    fetch('save_users.php',{
        method: 'POST',
        eaders: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(users)
    }).then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((data) => {
        console.log(data);
        document.getElementById("main").innerHTML += `<br>`;
    })
    .catch((err) => console.log(err));
}



function enviar_user(user) {
    
    console.log(users);
    fetch("save_users.php", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
    })
    .then((users) => {
        construirTabla(user);
    })
    .catch((err) => console.log(err));
}
function guardar_user_xml(){
    users
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.readyState)

            document.getElementById("main").innerHTML += `<br>`;
        }
    }
    let data=JSON.stringify(users);
    xhr.open('POST', 'save_users.php');
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(data);
}