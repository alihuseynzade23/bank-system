function validateForm() {
    // Call all validation functions
    validateName("fname", "nameError");
    validateName("sname", "surnameError");
    validateEmail();
    validatePassword('pass', 'passError');
    passwordSimilarity('pass', 'pass2', 'passError2');

    // Check if there are any error messages
    const errorElements = document.querySelectorAll('.error');
    for (const errorElement of errorElements) {
        if (errorElement.textContent !== '') {
            // If any error messages are present, prevent form submission
            return false;
        }
    }

    // If all validations pass, allow form submission
    return true;
}

document.getElementById('registrationSubmit').addEventListener('click', () => {
    if (validateForm()) {
        // If the form is valid, perform the redirection
        window.location.href = 'http://127.0.0.1:5500/index.html';
    }
});

// Name and surname validator
function validateName(inputId, errorId) {
    const input = document.getElementById(inputId)
    const error = document.getElementById(errorId)
    const nameRegex = /^[A-Za-z]+$/;

    if(input.value === '') {
        error.textContent = 'Xananı doldurun'
    } else if(!nameRegex.test(input.value)) {
        error.textContent = 'Səhv input. Ancaq hərflər qəbul olunur.'
    } else {
        error.textContent = ''
    }
}

document.getElementById("fname").addEventListener("input", () => {
    validateName("fname", "nameError");
  });
  
  document.getElementById("sname").addEventListener("input", () => {
    validateName("sname", "surnameError");
  });


// Email validator
function validateEmail() {
    const input = document.getElementById("email")
    const error = document.getElementById("emailError")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(input.value === '') {
        error.textContent = 'Xananı doldurun'
    } else if(!emailRegex.test(input.value)) {
        error.textContent = 'Zəhmət düzgün email formatı yazardiz'
    } else {
        error.textContent = ''
    }
}

document.getElementById('email').addEventListener('input', validateEmail)


// Password validator
function validatePassword(inputId, errorId) {
    const input = document.getElementById(inputId)
    const error = document.getElementById(errorId)
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if(input.value === '') {
        error.textContent = 'Xananı doldurun'
    } else if(!passwordRegex.test(input.value)) {
        error.textContent = 'Şifrə yalnız latın hərfləri olmalıdır və rəqəmlər'
    } else {
        error.textContent = ''
    }

}

document.getElementById('pass').addEventListener('input', () => {
    validatePassword('pass', 'passError')
  })



//Passwords similarity validator
function passwordSimilarity(firstPassId, secondPassId, errorId) {
    const pass1 = document.getElementById(firstPassId).value;
    const pass2 = document.getElementById(secondPassId).value;
    const error = document.getElementById(errorId);
    
    error.textContent = ''; 

    if (pass1.length !== pass2.length) {
        error.textContent = 'Şifrə eyni deyil';
    } else {
        for (let i = 0; i < pass1.length; i++) {
            if (pass1[i] !== pass2[i]) {
                error.textContent = 'Şifrə eyni deyil';
                break; 
            }
        }
    }
}

document.getElementById('pass2').addEventListener('input', () => {
    passwordSimilarity('pass', 'pass2', 'passError2')
})



document.getElementById('registrationSubmit').addEventListener('click', () => {
    console.log('hello')
})