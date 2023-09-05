function validateName(inputId, errorId) {
    const input = document.getElementById(inputId)
    const error = document.getElementById(errorId)
    const nameRegex = /^[A-Za-z]+$/;

    if(input.value === '') {
        error.textContent = 'Xanani doldurun'
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
  