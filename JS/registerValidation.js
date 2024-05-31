document.addEventListener('DOMContentLoaded', function(){

    const signupForm = document.getElementById('signin-form');
    const signupError = document.getElementById('signup-error');
    const nameInput = document.getElementById('nombre');
    const lastNameInput = document.getElementById('apellido');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const dateInput = document.getElementById('date');
    const countryInput = document.getElementById('pais');
    const legalInput = document.getElementById('legal');
    const nameError = document.getElementById('name-error');
    const lastNameError = document.getElementById('lastName-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const dateError = document.getElementById('date-error');
    const countryError = document.getElementById('pais-error');
    const legalError = document.getElementById('legal-error');

    signupForm.addEventListener('submit', function(event){
        event.preventDefault(); //para que no se actualice la página
        validateForm();    
    });

    nameInput.addEventListener('blur', function(){
        validateEmail();
    });

    nameInput.addEventListener('input', function(){
        clearInputError(nameError)
    });

    lastNameInput.addEventListener('input', function(){
        clearInputError(lastNameError)
    });

    emailInput.addEventListener('input', function(){
        clearInputError(emailError)
    });

    passwordInput.addEventListener('input', function(){
        clearInputError(passwordError);
    });

    dateInput.addEventListener('input', function(){
        clearInputError(dateError);
    });

    countryInput.addEventListener('input', function(){
        clearInputError(countryError);
    });

    legalInput.addEventListener('input', function(){
        clearInputError(legalError);
    });




    // FUNCIONES

    // FUNCION: validar fomrulario
    function validateForm(){
        const isValidName = validateName();
        const isValidLastName = validateLastName();
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();
        const isValidDate = validateDate();
        const isValidCountry = validateCountry();
        const isValidLegal = validateLegal();

        clearError(signupError);

        if (isValidName && isValidLastName && isValidEmail && isValidPassword && isValidDate && isValidCountry && isValidLegal) {
            signupForm.reset();
            alert('Te has registrado con éxito!');   
        } else{
            showError(signupError, '¡Ingrese todos los campos correctamente!');
        }
    }

    // FUNCIÓN: validar nombre
    function validateName(){
        const nameRegex = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
        const nameValue = nameInput.value.trim();

        if (!nameRegex.test(nameValue)) {
            showInputError(nameError);
            return false;
        }
        return true;
    }

    // FUNCIÓN: validar apellido
    function validateLastName(){
        const nameRegex = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
        const lastNameValue = lastNameInput.value.trim();

        if (!nameRegex.test(lastNameValue)) {
            showInputError(lastNameError);
            return false;
        }
        return true;
    }

    // FUNCIÓN: validar email
    function validateEmail(){
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const emailValue = emailInput.value.trim();

        if (!emailRegex.test(emailValue)) {
            showInputError(emailError);
            return false;
        }
        return true;
    }

    // FUNCIÓN: validar password
    function validatePassword(){
        const passwordValue = passwordInput.value.trim();

        if (passwordValue.length < 6 || passwordValue.length > 15) {
            showInputError(passwordError);
            return false;
        }
        return true;
    }

    // FUNCIÓN: vlidar fecha nacimiento
    function validateDate() {
        const dateValue = new Date(dateInput.value);
    
        if (!dateValue || isNaN(dateValue.getTime())) {
            showInputError(dateError, 'Ingrese la fecha de nacimiento!');
            return false;
        }
    
        const minDate = new Date(1924, 0, 1);
        const maxDate = new Date(2007, 11, 31);
        if (dateValue < minDate || dateValue > maxDate) {
            showInputError(dateError);
            return false;
        }
    
        return true;
    }

    //FUNCIÓN: validar País
    function validateCountry(){
        const countryValue = countryInput.value;
        if (countryValue == '') {
            showInputError(countryError);
            return false;
        }
        return true;
    }

    //FUNCIÓN: validar términos y condiciones
    function validateLegal(){
        if (!legalInput.checked) {
            showInputError(legalError);
            return false;
        }
        return true;
    }



    // FUNCIÓN: mostrar error
    function showError(errorElement, message){
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
    }
    function showInputError(errorElement){
        // errorElement.innerHTML = message;
        errorElement.style.visibility = 'visible';
    }

    // FUNCIÓN: ocultar error
    function clearError(errorElement){
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }
    function clearInputError(errorElement){
        errorElement.style.visibility = 'hidden';
    }


});