// Função para mostrar página específica
function showPage(pageId) {
    // Ocultar todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Mostrar página selecionada
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Função para lidar com o envio do formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Validação básica
            if (nome && email && assunto && mensagem) {
                // Simular envio (em produção, isso seria enviado para um servidor)
                alert(`Obrigado, ${nome}! Sua mensagem foi recebida. Entraremos em contato em breve.`);
                
                // Limpar formulário
                contactForm.reset();
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }

    // Mostrar página inicial por padrão
    showPage('home');
});

// Fechar menu ao clicar em um link (útil para dispositivos móveis)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
        // Scroll suave para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

