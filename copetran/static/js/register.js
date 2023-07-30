const nombre = document.getElementById("nombre"); //input que contiene los nombres del usuario
const email = document.getElementById("email") //input que contiene el email del usuario
const emailbx = document.getElementById("email")
const apellido = document.getElementById("apellido") //input que contiene el apellido del usuario
const pass = document.getElementById("password1") //input de la primera de dos contraseñas
const pass1 = document.getElementById("password2") //input de la segunda de dos contraseñas
const form = document.getElementById("form") //formulario, de aqui sabremos cuando activar la funciona creada mas abajo
const parrafo = document.getElementById("warnings") //etiqueta <p> que contiene los errores de los datos (ahora esta vacia)
const boton = document.getElementById("boton") //boton que cambia de color y de ocntenido segun la exactitud de los datos
const container = document.getElementById("contenedor")// este es el container qeu contiene el formulario, cambia de color segun la exatitud de los datos


const ErrorEmail = document.getElementById("ErrorEmail") //espacio que se rellena en caso de que el email sea erroneo
const ErrorPass = document.getElementById("ErrorPass")//espacio que se rellena en caso que las contraseñas tengan algun priblema
const ErrorNom = document.getElementById("ErrorNombre")//espacio que se rellena en caso que el nombre tenga algun priblema
const ErrorApe = document.getElementById("ErrorApellido")//espacio que se rellena en caso que el apellido tengan algun priblema


//variables de caja de errores
var warnings = "" //en esta variable se guarddan todos los posibles errores 
var emailValidate = "" //en esta variable se guardan los errores que conteie el email
var PassValidate = ""//en esta variable se guardan los errores que conteie las contraseñas (uno a la vez)
var NomValidate = ""
var ApeValidate = ""


var entrar = false //esta variable decide si los datos son validos o invalidos 
// si esta en --false-- significa que todos los datos son validos 
// si esta en --true-- significa que algun dato es invalido 

var emailCorrecto = false
function VerificarEmail(){
    //console.log("cambio")
    ErrorEmail.innerHTML="" //vaciamos el contenido de lso errores del email
    emailValidate=""
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //esto nos ayuda a validar el email
        if(!regexEmail.test(email.value)){ // condicion que valida el email (si la condicion detecta algo cambia la variable entrar a positivo, o sea bloquea la entrada)
            emailValidate = `el email no es valido <br>`
            entrar = true  
            ErrorEmail.innerHTML=emailValidate
            ErrorEmail.style.color="red"
            email.style.boxShadow = "1px 1px 5px red"
            container.style.borderColor = "red" //cambia de color el container
        }else{
            async function verificarDominioCorreo(email) {
                return new Promise(function(resolve, reject) {
                  var xhr = new XMLHttpRequest();
                  var url = 'verificar_dominio.php';
                  var params = 'email=' + encodeURIComponent(email);
              
                  xhr.open('POST', url, true);
                  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
              
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      if (xhr.status === 200) {
                        var respuesta = xhr.responseText;
                        if (respuesta === 'true') {
                          resolve();
                        } else {
                          reject(new Error('El email no existe'));
                        }
                      } else {
                        reject(new Error('Error en la solicitud AJAX'));
                      }
                    }
                  };
              
                  xhr.send(params);
                });
              }
              
              async function VerificarEmail() {
                try {
                  await verificarDominioCorreo(email.value);
                  // La verificación del dominio de correo se completó con éxito
                  emailValidate = '';
                  ErrorEmail.innerHTML = emailValidate;
                  emailbx.style.boxShadow = '1px 1px 5px green';
                  emailbx.classList.add('ring-1');
                  emailbx.classList.add('ring-green-400');
                  emailCorrecto=true
                } catch (error) {
                  // Hubo un error en la verificación del dominio de correo o el correo no existe
                  entrar = true;
                  emailValidate = 'El email no existe <br>';
                  ErrorEmail.innerHTML = emailValidate;
                  ErrorEmail.style.color = 'red';
                  emailbx.style.boxShadow = '1px 1px 5px red';
                  container.style.borderColor = 'red';
                  emailCorrecto=false
                  console.log('correo no válido');
                }
              }
              
              // Llamada a la función VerificarEmail()
              VerificarEmail();
              
        }
}

function VerificarNombre(){
    if(nombre.value.length < 3 ){ // condicion que valida el nombre (que no sea tan corto) (si la condicion detecta algo cambia la variable entrar a positivo, o sea bloquea la entrada)
        warnings += `El nombre es muy corto <br>`
        entrar = true
        container.style.borderColor = "red" //cambia de color el container
        nombre.style.boxShadow = "1px 1px 5px red"
        nombre.classList.add("ring-1");
        nombre.classList.add("ring-red-400");
    }else{
        nombre.style.boxShadow = "1px 1px 5px green"
        nombre.classList.add("ring-1");
        nombre.classList.add("ring-green-400");
    }
}

function VerificarApellido(){
    if(apellido.value.length < 3){ // Condicion que valida que el apellido no sea corto (si la condicion detecta algo cambia la variable entrar a positivo, o sea bloquea la entrada)
        nombre.focus()
        warnings = `El apellido es muy corto <br>`
        entrar = true
        container.style.borderColor = "red" //cambia de color el container
        apellido.style.boxShadow = "1px 1px 5px red"
        apellido.classList.add("ring-1");
        apellido.classList.add("ring-red-400");
    }else{
        apellido.style.boxShadow = "1px 1px 5px green"
        apellido.classList.add("ring-1");
        apellido.classList.add("ring-green-400");
    }
}

function VerificarPassword(){
    if(pass1.value !== pass.value){ //condicion que evalua que las contraseñas sean diferentes (si la condicion detecta algo cambia la variable entrar a positivo, o sea bloquea la entrada), en caso que no detecte nada significa que las contraseñas son iguales, y va a pasar al --else if--
        PassValidate = `las contraseñas no coinciden <br>`
        ErrorPass.innerHTML=PassValidate
        ErrorPass.style.color="red"
        entrar = true
        pass.focus()
    }else if(pass.value.length < 8 && pass1.value.length < 8){ //esta condicion evalua que la contraseña tenga mas de 8 caracteres (si la condicion detecta algo cambia la variable entrar a positivo, o sea bloquea la entrada)
        PassValidate = `la contraseña debe tener por lo menos 8 acaracteres <br>`
        ErrorPass.innerHTML=PassValidate
        ErrorPass.style.color="red"
        entrar = true
        pass.focus()
    }else if(!tiene_numeros(pass.value)){ //esta condicion evalua que la contraseña tenga mas de 8 caracteres (si la condicion detecta algo cambia la variable entrar a positivo, o sea bloquea la entrada)
        PassValidate = `la contraseña debe tener por lo menos un numero <br>`
        ErrorPass.innerHTML=PassValidate
        ErrorPass.style.color="red"
        entrar = true
        pass.focus()
    }else if(!tiene_mayusculas(pass.value)){ //esta condicion evalua que la contraseña tenga mas de 8 caracteres (si la condicion detecta algo cambia la variable entrar a positivo, o sea bloquea la entrada)
        PassValidate = `la contraseña debe tener por lo menos una mayuscula <br>`
        ErrorPass.innerHTML=PassValidate
        ErrorPass.style.color="red"
        entrar = true
        pass.focus()
    }else if(!tiene_caracterEspecial(pass.value)){ //esta condicion evalua que la contraseña tenga mas de 8 caracteres (si la condicion detecta algo cambia la variable entrar a positivo, o sea bloquea la entrada)
        PassValidate = `la contraseña debe tener por lo menos un caracter especial: ! @ # $ % & / * ? - _ <br>`
        ErrorPass.innerHTML=PassValidate
        ErrorPass.style.color="red"
        entrar = true
        pass.focus()
    }
}

email.addEventListener('change', function() {
    VerificarEmail();
});
nombre.addEventListener('change', function() {
    VerificarNombre();
});
apellido.addEventListener('change', function() {
    VerificarApellido();
});


//funcion para ver si un dato contiene o no numeros
var numeros="0123456789";

function tiene_numeros(texto){
    //console.log(texto)
    for(i=0; i<texto.length; i++){
        if (numeros.indexOf(texto.charAt(i),0)!=-1){
            return true;
        }
    }
    return false;
}

//funcion para ver sun un dato contiene o no MAYUSCULAS
var mayusculas="QWERTYUIOPASDFGHJKLZXCVBNMÑ";

function tiene_mayusculas(texto){
    //console.log(texto)
    for(i=0; i<texto.length; i++){
        if (mayusculas.indexOf(texto.charAt(i),0)!=-1){
            return true;
        }
    }
    return false;
}

//funcion para ver sun un dato contiene caracteres especiales
var caracteresEspeciales="!@#$%&/*?-_";

function tiene_caracterEspecial(texto){
    //console.log(texto)
    for(i=0; i<texto.length; i++){
        if (caracteresEspeciales.indexOf(texto.charAt(i),0)!=-1){
            return true;
        }
    }
    return false;
}



//convertir en mayusculas
function mayus(e) {
    //console.log(e.value.toUpperCase());
    e.value = e.value.toUpperCase();
    var value = e.value;
    const filteredValue = value.replace(/\d/g, ''); // Eliminar números
    value = filteredValue.toUpperCase();
    e.value = value;
}
function mayusEmail(e) {
    //console.log(e.value.toUpperCase());
    e.value = e.value.toUpperCase();
}

//impedir escribir numeros
function nonum(e) {
    var code;
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;
    var character = String.fromCharCode(code);
    var AllowRegex  = /^[\ba-zA-Z\s-]$/;
    if (AllowRegex.test(character)) return true;     
    return false;
}

//La siguiente funcion valida todos los campos del formulario de registro
form.addEventListener("submit", e=>{
    entrar = false
    
    //vaciamos todos los errores
    parrafo.innerHTML ="" //vaciamos el contenido de los errores generales
    ErrorEmail.innerHTML="" //vaciamos el contenido de lso errores del email
    ErrorApe.innerHTML=""
    ErrorNom.innerHTML=""
    ErrorPass.innerHTML="" //vaciamos el contenido de lso erroers de las contraseñas

    VerificarEmail();
    VerificarApellido();
    VerificarApellido();
    VerificarPassword();
    console.log(emailCorrecto)
    console.log(entrar)
    if (emailCorrecto) {
        if(!entrar){ // no se encontro nuingun error en los datos(todos son validos)

        //loader
        console.log('a')
        var loader = document.getElementById("loader");
        loader.className += " loader";

        boton.innerHTML = "" //vaciar el boton
        boton.style.display = 'none' //el boton no aparezca
        boton.style.backgroundColor = "white" //cambio de color de boton
        ErrorPass.innerHTML=PassValidate //vaciamos el contenido de lso erroers de las contraseñas
        //window.location.href = "datos.php";
        parrafo.innerHTML = "" //vaciamos el contenido de los errores generales
        ErrorEmail.innerHTML="" //vaciamos el contenido de lso errores del email
        ErrorApe.innerHTML=""
        ErrorNom.innerHTML=""

        }
        if(entrar){ // -entrar- es positivo en caso que se encontrara algun problema
            //colocamos nuevos errores
            parrafo.innerHTML =warnings //se llena la cariable anterior mente creada con los errores
            container.style.borderColor = "red" //cambia de color el container
            e.preventDefault(); //se bloquea el acceso
        }
    }else{
            //colocamos nuevos errores
            parrafo.innerHTML =warnings //se llena la cariable anterior mente creada con los errores
            container.style.borderColor = "red" //cambia de color el container
            e.preventDefault(); //se bloquea el acceso
    }
    

})

//Fin de la funcion que valida los campos del register