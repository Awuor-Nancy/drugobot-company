document.addEventListener('DOMContentLoaded', function() {
  const icon = document.querySelector('.chatbot-icon');
  const content = document.querySelector('.chatbot-content');
  const chatbotResponse = document.querySelector('#chatbot-response');
  const form = document.getElementById('chatbot-form');

  icon.addEventListener('click', function() {
    content.style.display = (content.style.display === 'none') ? 'block' : 'none';
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const userInput = document.getElementById('message').value.toLowerCase().trim();

    if (userInput === 'hello') {
      const responses = [
        "You're not alone in this journey. You are stronger than you think.",
        "Every step you take is a step towards a healthier and brighter future.",
        "Seeking help is a sign of strength. Keep going!"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const chatbotMessage = document.createElement('div');
      chatbotMessage.classList.add('chatbot-message');
      chatbotMessage.textContent = randomResponse;
      chatbotResponse.appendChild(chatbotMessage);
    }

    document.getElementById('message').value = '';
  });
});
