const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const typeAccount = document.getElementById('selectForm');
const selectFrm = document.getElementById('selectForm');
const checkFrm = document.getElementById('checkForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    
	if(checkInputs()) {
		// Muestro una ventana de confirmacion
		const confirmation = window.confirm('Los datos que has introducido son correctos, ¿quieres continuar?');
		if (confirmation) {
			// Si el usuario kace click en OK, borra el contenido de todos los campos
			username.value = '';
			email.value = '';
			password.value = '';
			password2.value = '';
			// Muestro mensaje de éxito
			alert('Datos enviado correctamente');

			form.reset();
		} else {
			// Si el usuario hace clic en Cancelar, mantiene los datos del formulario
			return false;
		}
	}
});

function checkInputs() {
	let isValid = true;

    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
		isValid = false;
    } else if (!onlyLetters(usernameValue)) {
		setErrorFor(username, 'Please, only input letters.');
		isValid = false;
	}else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
		isValid = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
		isValid = false;
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
		isValid = false;
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
		isValid = false;
    } else if (passwordValue != password2Value) {
        setErrorFor(password2, 'Passwords does not match');
		isValid = false;
    } else {
        setSuccessFor(password2);
    }

	if (selectFrm.value === '') {
		setErrorFor(selectFrm, 'Please, select a option.');
		isValid = false
	} else {
		setSuccessFor(selectFrm);
	}

	if (!checkFrm.checked) {
		setErrorFor(checkFrm, 'Please check the box.')
		isValid = false;
	} else {
		setSuccessFor(checkFrm);
	}

	return isValid;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'error'; // form-control
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'success';
}

function onlyLetters (username) {
	var regex = /^[a-zA-Z]*$/;

	if (!regex.test(username)) {
		return false;
	}
	return true;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
