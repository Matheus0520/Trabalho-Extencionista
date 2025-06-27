
// Authentication page functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Toggle between login and register forms
    function showLogin() {
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    }

    function showRegister() {
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    }

    loginBtn.addEventListener('click', showLogin);
    registerBtn.addEventListener('click', showRegister);

    // Form validation and submission
    const forms = document.querySelectorAll('.form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const formType = this.closest('#loginForm') ? 'login' : 'register';
            
            if (formType === 'register') {
                const password = formData.get('password');
                const confirmPassword = formData.get('confirmPassword');
                
                if (password !== confirmPassword) {
                    alert('As senhas não coincidem!');
                    return;
                }
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Processando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert(`${formType === 'login' ? 'Login' : 'Cadastro'} realizado com sucesso!`);
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Redirect to home page
                window.location.href = 'index.html';
            }, 2000);
        });
    });

    // Password strength indicator (for register form)
    const passwordInput = document.getElementById('registerPassword');
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            const password = this.value;
            let strength = 0;
            
            if (password.length >= 8) strength++;
            if (/[A-Z]/.test(password)) strength++;
            if (/[0-9]/.test(password)) strength++;
            if (/[^A-Za-z0-9]/.test(password)) strength++;
            
            // You can add visual feedback here
            console.log('Password strength:', strength);
        });
    }
});