// JavaScript para funcionalidades do site
document.addEventListener('DOMContentLoaded', function() {
    // Modal de Login/Cadastro
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const switchToRegister = document.getElementById('switch-to-register');
    const switchToLogin = document.getElementById('switch-to-login');
    const userTypeSelect = document.getElementById('user-type');
    const cpfGroup = document.getElementById('cpf-group');
    const cnpjGroup = document.getElementById('cnpj-group');
    
    // Abrir modal de login
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'flex';
    });
    
    // Fechar modais
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        });
    });
    
    // Alternar para cadastro
    switchToRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'none';
        registerModal.style.display = 'flex';
    });
    
    // Alternar para login
    switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerModal.style.display = 'none';
        loginModal.style.display = 'flex';
    });
    
    // Alternar entre CPF e CNPJ
    userTypeSelect.addEventListener('change', function() {
        if (this.value === 'pf') {
            cpfGroup.style.display = 'block';
            cnpjGroup.style.display = 'none';
        } else {
            cpfGroup.style.display = 'none';
            cnpjGroup.style.display = 'block';
        }
    });
    
    // Fechar modal clicando fora
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
    
    // Botões de ver preço
    const precoBtns = document.querySelectorAll('.preço-btn');
    precoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            loginModal.style.display = 'flex';
        });
    });
    
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    });
    
    // Form submission handlers
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Aqui você adicionaria a lógica de autenticação
        alert('Login realizado com sucesso!');
        loginModal.style.display = 'none';
    });
    
    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Aqui você adicionaria a lógica de cadastro
        alert('Cadastro realizado com sucesso!');
        registerModal.style.display = 'none';
    });
});