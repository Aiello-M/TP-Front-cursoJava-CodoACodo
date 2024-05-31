document.addEventListener('DOMContentLoaded', function(){

    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');

    loginForm.addEventListener('submit', function(event){
        event.preventDefault(); //para que no se actualice la página
        validateForm();    
    });

    emailInput.addEventListener('blur', function(){
        validateEmail();
    });

    emailInput.addEventListener('input', function(){
        clearInputError(emailError)
    });

    passwordInput.addEventListener('input', function(){
        clearInputError(passwordError);
    });




    // FUNCIONES

    // FUNCION: validar fomrulario
    function validateForm(){
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();

        clearError(loginError);

        if (isValidEmail && isValidPassword) {
            loginForm.reset();
            alert('Has ingresado con éxito');   
        } else{
            showError(loginError, '¡Error! Email o password incorrectos');
        }
    }

    // FUNCIÓN: validar email
    function validateEmail(){
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const emailValue = emailInput.value.trim();

        if (!emailRegex.test(emailValue)) {
            // showError(loginError, '¡Error! Email o password incorrectos');
            showInputError(emailError);
            return false;
        }
        return true;
    }

    // FUNCIÓN: validar password
    function validatePassword(){
        const passwordValue = passwordInput.value.trim();

        if (passwordValue.length < 6 || passwordValue.length > 15) {
            // showError(loginError, '¡Error! Email o password incorrectos');
            showInputError(passwordError);
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