document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
        
    document.getElementById('successMessage').classList.remove('hidden');
    
    this.reset();
});