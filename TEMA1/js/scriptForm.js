const objuser = document.getElementById("usuario");
const objpass = document.getElementById("senha");

function validaLogin() {
  var user = "Admin";
  var pass = "123";
  if (
    user === objuser.value && pass === objpass.value
  ) {
    alert("Login valido");
    return
    
  } else {
    alert("Login inválido");
return
    
  }
}
