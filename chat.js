document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const nextChatButton = document.getElementById("next-chat-button");
    const startChatButton = document.getElementById("start-chat-button");

    const colaboradorNome = document.getElementById("colaborador-nome");
    const chatbotAvatar = document.getElementById("chatbot-avatar");

    let chatStage = 0;
    let userName = '';
    let userAge = '';
    
    sendButton.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;

        // Exibir a mensagem do usuário no chat
        appendUserMessage(userMessage);

        // Limpar o campo de input
        userInput.value = '';

        // Controlar o fluxo do chatbot
        if (chatStage === 0) {
            userName = userMessage;
            appendBotMessage(`Prazer em te conhecer, ${userName}! Qual é a sua idade?`);
            chatStage = 1;
        } else if (chatStage === 1) {
            userAge = userMessage;
            appendBotMessage(`${userAge} anos! Ótimo. Você está em perigo no momento? (Sim ou Não)`);
            chatStage = 2;
        } else if (chatStage === 2) {
            if (userMessage.toLowerCase() === "sim") {
                appendBotMessage("Por favor, mantenha a calma. Vamos acionar ajuda imediatamente.");
                // Aqui pode haver um alerta real ou notificação
                showNextChatButton();
            } else if (userMessage.toLowerCase() === "não") {
                appendBotMessage("Fico feliz em saber! Vamos agora te conectar com um colaborador.");
                // Transição para o colaborador
                showNextChatButton();
            } else {
                appendBotMessage("Desculpe, não entendi. Por favor, responda com 'Sim' ou 'Não'.");
            }
        }
    });

    startChatButton.addEventListener("click", () => {
        window.location.href = "chat_colaborador.html";  // Redireciona para a próxima página
    });

    function appendUserMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function appendBotMessage(message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "received");
        messageElement.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showNextChatButton() {
        // Mostrar o botão para avançar para o colaborador
        nextChatButton.style.display = 'flex';
    }
});
