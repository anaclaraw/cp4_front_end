// Criando um alert + validando fórmulario | Formulário de notificação
window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var assunto = document.getElementById('assunto').value;
        var mensagem = document.getElementById('mensagem').value;

        if(nome === "" || email === "" || assunto === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
        } else {
            alert(`Obrigado, ${nome}! Suas informações foram enviadas com sucesso:\nEmail: ${email}\nAssunto: ${assunto}\nMensagem: ${mensagem}\n`);
        }
    });
});

