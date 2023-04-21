function validate() {  
	var result = "";	
	result += validateName(); 	
	result += validateEmail();
	result += validatePassword();
	result += validateTerms();
	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}

function validateName() {
	var name = document.getElementsByName("name")[0].value;
	if (name.length <= 3)
		return "El nombre debe contener al menos 3 caracteres.\n";	
	return "";
}

function validatePassword() {
	var password = valueOf("password");
	var retype = valueOf("retype_password");
	
	if (password.length <= 6) 
		return "La contraseña debe tener al menos 6 caracteres.\n";
	
	if (password != retype) 
		return "Las contraseñas no coinciden.\n";	
	return "";
}

function validateEmail() {
	var email = valueOf("email");
	var retype = valueOf("retype_email");
	
	if (email.indexOf('@') == -1) 
		return "El email debe contener @.\n";
	
	if (email != retype)
		return "Los emails no coinciden.\n";
	return "";	
}

function validateTerms() {
	var terms = document.getElementsByName("terms")[0];
	if (!terms.checked)
		return "Por favor acepte los Terminos de servicio y Politicas de privacidad";	
	return "";
}

function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}