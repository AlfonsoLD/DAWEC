$(document.register).ready(function() {

  var username = document.getElementById("user").value;
  var password = document.getElementById("password").value;
  var keeplogged = document.getElementById("keeplogged").value;
  var noValido = / /;
  
  //validar longitud contraseña y usuario
  if ( password.length < 8 && username.length < 3) {
      $('#passwordlength').removeClass('valid').addClass('invalid');
  } else {
      $('#passwordlength').removeClass('invalid').addClass('valid');
  }

  if (username.length < 3) {
    $('#userlength').removeClass('valid').addClass('invalid');
    } else {
    $('#userlength').removeClass('invalid').addClass('valid');
    }

    //validar que no están vacíos
    if(username.length==0 || password.length==0){
        $('#empty').removeClass('valid').addClass('invalid');
    } else {
        $('#empty').removeClass('invalid').addClass('valid');
    }

  //validar letra
  if ( !password.match(/[A-z]/) ) {
      $('#letter').removeClass('invalid').addClass('valid');
  } else {
      $('#letter').removeClass('valid').addClass('invalid');
  }
  
  //validar letra mayúscula
  if ( password.match(/[A-Z]/) ) {
      $('#capital').removeClass('invalid').addClass('valid');
  } else {
      $('#capital').removeClass('valid').addClass('invalid');
  }
  
  //validar numero
  if ( password.match(/\d/) ) {
      $('#number').removeClass('invalid').addClass('valid');
  } else {
      $('#number').removeClass('valid').addClass('invalid');
  }

  //validar minuscula
  if(username.match(/[A-Z]/)){
 $('#userlower').removeClass('valid').addClass('invalid');
  } else {
      $('#userlower').removeClass('invalid').addClass('valid');
  }

  //validar espacios y caracteres especiales en usuario
  if(username.match(" ")||username.match(/[!"#$%&'()*+,./:;<=>?@[\]^``{|}~]/)){
    $('#userlower').removeClass('valid').addClass('invalid');
    } else {
         $('#userlower').removeClass('invalid').addClass('valid');
    }

    if(keeplogged==true){
        document.cookie ="keepsessionopen=true";
        }
    else{
        const d = new Date();
        d.setTime(d.getTime() + 5*60*1000);
        let expires = "expires="+ d.toUTCString();
        document.cookie =" keepsessionopen=false, expires="+expires;
        }

}).focus(function() {
    $('#pswd_info').show();
}).blur(function() {
    $('#pswd_info').hide();
});