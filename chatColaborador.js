document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const audioCallButton = document.getElementById("audio-call-btn");
    const videoCallButton = document.getElementById("video-call-btn");

    sendButton.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;

        // Exibir a mensagem do usuário no chat
        appendUserMessage(userMessage);

        // Limpar o campo de input
        userInput.value = '';

        // Simular uma resposta automática do colaborador (pode ser removida depois)
        setTimeout(() => {
            appendBotMessage("Entendido. Pode me contar mais sobre isso?");
        }, 1000);
    });

    audioCallButton.addEventListener("click", () => {
        alert("Iniciando chamada de áudio com o colaborador...");
        // Aqui poderia haver uma integração real com uma chamada de áudio
    });

    videoCallButton.addEventListener("click", () => {
        alert("Iniciando chamada de vídeo com o colaborador...");
        // Aqui poderia haver uma integração real com uma chamada de vídeo
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
});
