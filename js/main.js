function validateForm(){
	
	function validaremail(){
		var email = document.getElementById('input-email').value;
		var verificacion = /[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
		if (verificacion.exec(email)===null) {
			alert("La dirección de email es incorrecta.");
			return false;
		} else {
			alert("La dirección de email es correcta.");
			return true;
		}
	} 
	validaremail();	

	function contraseña() {
		var pass = document.getElementById('input-password').value;
		for (var i =0; i <= pass.length; i++) {
			if (pass.length < 6) {
				alert ("Debe tener al menos 6 caracteres");
			}else if (pass === "password" || pass === "123456" || pass === "098754") {
				alert ("Su contraseña no puede ser password,123456, 098754");
				return false;
			}
			else {
				alert ("contraseña correcta");
				return true;
			}
		}
	}
	contraseña();

	function seleccion() {
		var indice = document.getElementsByTagName('select').selectedIndex;
			if( indice == null || indice === 0 ) {
				alert ("Debe elegir una de las opciones");
  				return false;
  			}else {
  				return true;
  			}
	}
	seleccion();
}

