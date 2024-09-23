document.addEventListener("DOMContentLoaded", () => {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    const nextChatButton = document.getElementById("next-chat-button");
    const startChatButton = document.getElementById("start-chat-button");

    let chatStage = 0;
    let userName = '';
    let userAge = '';
    let dangerType = '';

    const dangerKeywords = {
        "Perigo de vida": ["vida", "morte", "perigo grave", "em risco de vida", "ameaça de vida", "ameaça fatal", "perigo extremo"],
        "Perigo de agressão": ["agressão", "ataque", "violência", "perigo físico", "ameaça física", "perigo de ser atacado", "perigo de ser agredido", "perigo de ser violentado", "perigo de ser machucado", "perigo de ser ferido", "perigo de ser morto", "perigo de ser assassinado", "perigo de ser estuprado", "perigo de ser roubado", "perigo de ser sequestrado", "perigo de ser abusado", "perigo de ser assediado", "perigo de ser molestado", "perigo de ser espancado", "ameaça de agressão", "ameaça de violência"],
        "Está machucado": ["machucado", "ferido", "lesão", "ferimento", "dolorido", "dorido", "sangrando", "sangramento", "sangue", "sangrar", "sangrar muito", "sangrando muito", "dor", "doendo", "lesionado", "ferido gravemente"],
        "Tendências suicidas": ["suicídio", "tendências suicidas", "quero me matar", "pensamentos suicidas", "machucar", "machucado", "magoar", "magoado", "me matar", "matar-me", "matar a mim mesmo", "auto-mutilação", "autolesão", "pensamentos de morte"]
    };

    function detectDangerType(message) {
        const lowerCaseMessage = message.toLowerCase();
        for (const [type, keywords] of Object.entries(dangerKeywords)) {
            if (keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
                return type;
            }
        }
        return "Outro";
    }

    function containsOffensiveLanguage(message) {
        const offensiveWords = ["puta", "vagabunda", "vadia", "corno", "cu", "pau", "rola", "buceta", "caralho", "foder", "masturbar", "merda", "idiota", "burro", "imundo", "desgraçado", "filho da puta", "cabrão", "piranha", "chato", "escroto", "porra"];
        return offensiveWords.some(word => message.toLowerCase().includes(word));
    }

    sendButton.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;

        if (containsOffensiveLanguage(userMessage)) {
            appendBotMessage("Por favor, mantenha um diálogo respeitoso.");
            userInput.value = '';
            return;
        }

        appendUserMessage(userMessage);
        userInput.value = '';

        if (chatStage === 0) {
            userName = userMessage;
            appendBotMessage(`Prazer em te conhecer, ${userName}! Qual é a sua idade?`);
            chatStage = 1;
        } else if (chatStage === 1) {
            userAge = userMessage;
            appendBotMessage(`${userAge} anos! Ótimo. Você está em perigo no momento? (Sim ou Não)`);
            chatStage = 2;
        } else if (chatStage === 2) {
            const normalizedMessage = userMessage.toUpperCase().trim();
            if (["SIM", "SIM, SIM", "SIM SIM", "SIM, SIM, SIM"].includes(normalizedMessage)) {
                appendBotMessage("Por favor, mantenha a calma. Vamos acionar ajuda imediatamente.");
                appendBotMessage("Pode me dizer mais sobre o tipo de perigo que você está enfrentando? Use palavras para descrever seu perigo.");
                chatStage = 3;
            } else if (["NÃO", "NÃO, NÃO", "NÃO NÃO", "NÃO, NÃO, NÃO"].includes(normalizedMessage)) {
                appendBotMessage("Fico feliz em saber! Vamos agora te conectar com um colaborador.");
                showNextChatButton();
                chatStage = 4;
            } else {
                appendBotMessage("Desculpe, não entendi. Por favor, responda com 'Sim' ou 'Não'.");
            }
        } else if (chatStage === 3) {
            dangerType = detectDangerType(userMessage);
            appendBotMessage(`Entendi, você está enfrentando um perigo relacionado a "${dangerType}". Vamos te conectar com um colaborador que pode te ajudar. Por favor, aguarde um momento.`);
            showNextChatButton();
            chatStage = 4;
        }
    });

    startChatButton.addEventListener("click", () => {
        window.location.href = "chat_colaborador.html";
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
        nextChatButton.style.display = 'flex';
    }
});
