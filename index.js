// Get references to the input elements
const emailInput = document.getElementById('logEmail');
const passInput = document.getElementById('logPass');


// Function to save the input values to local storage
function saveToLocalStorage() {
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('password', passInput.value);
}
// Add event listeners to the input elements to save their values



function checkTheData() {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    
    const emailInputValue = document.getElementById('logEmail').value;
    const passInputValue = document.getElementById('logPass').value;

    // Check if the entered values match the saved values
    for(let i = 0; i < emailInputValue.length; i++) {
        if(emailInputValue[i] !== savedEmail[i] || passInputValue[i] !== savedPassword[i] || emailInputValue.length === 0 || passInputValue.length === 0) {
            return false
        } else {
            return true
        }

    }

    
}

emailInput.addEventListener('input', saveToLocalStorage);
passInput.addEventListener('input', saveToLocalStorage);

document.getElementById('signInSubmit').addEventListener('click', () => {
    if (checkTheData()) {
        window.location.href = 'http://127.0.0.1:5500/pages/main.html';
    } else {
        alert('Invalid email or password.');
    }
});

// Load saved values from local storage when the page loads
// emailInput.value = localStorage.getItem('email') || '';
// passInput.value = localStorage.getItem('password') || '';