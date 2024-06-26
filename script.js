function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Replace 'yourpassword' with your actual password
    if (password === 'pink') {
        document.getElementById('passwordPrompt').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        errorMessage.textContent = 'Incorrect password, please try again.';
    }
}
