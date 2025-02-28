// Configuração das partículas
particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: '#8952f3' },
      shape: { type: 'circle' },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#8952f3',
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: true, mode: 'push' },
        resize: true
      }
    },
    retina_detect: true
  });
  
  // Função para mostrar/ocultar o pop-up de chat
  function toggleChatPopup() {
    const chatPopup = document.getElementById('chatPopup');
    chatPopup.style.display = chatPopup.style.display === 'block' ? 'none' : 'block';
  }
  
// Função para exibir a notificação
function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message; // Define o texto da notificação
  notification.style.display = 'block'; // Mostra a notificação

  // Esconde a notificação após 3 segundos
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}

// Fechar o pop-up após o envio do formulário
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Simula o envio do formulário (substitua pelo código real de envio)
  showNotification('Mensagem enviada com sucesso!');
  toggleChatPopup();
  this.reset(); // Limpa o formulário
});
  
