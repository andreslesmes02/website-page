document.addEventListener("DOMContentLoaded", function () {
    const chatbotBtn = document.getElementById("chatbot-btn");
    const chatbot = document.getElementById("chatbot");
    const closeChat = document.getElementById("close-chat");
    const chatInput = document.getElementById("chatbot-input");
    const chatBody = document.getElementById("chatbot-body");

    if (!chatbotBtn || !chatbot || !closeChat || !chatInput || !chatBody) {
        console.error("One or more chatbot elements are missing!");
        return;
    }

    // Show/Hide Chatbot
    chatbotBtn.addEventListener("click", function () {
        chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
    });

    closeChat.addEventListener("click", function () {
        chatbot.style.display = "none";
    });

    // Handle User Input
    chatInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            let message = chatInput.value.trim();
            if (message !== "") {
                chatBody.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
                chatInput.value = "";

                // Simple Bot Response
                setTimeout(() => {
                    chatBody.innerHTML += `<p><strong>Bot:</strong> I'm just a simple chatbot!</p>`;
                    chatBody.scrollTop = chatBody.scrollHeight;
                }, 500);
            }
        }
    });

    console.log("Chatbot script loaded successfully!");
});
