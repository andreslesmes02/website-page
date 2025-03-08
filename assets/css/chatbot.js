function toggleChat() {
    let chatbot = document.querySelector(".chatbot");
    chatbot.classList.toggle("active");
}

function sendMessage() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");

    // Append user message
    let userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.textContent = userInput;
    chatBox.appendChild(userMessage);

    // Generate bot response
    let botResponse = document.createElement("p");
    botResponse.classList.add("bot-message");

    if (userInput.includes("projects")) {
        botResponse.textContent = "You can check out my projects here: [https://andreslesmes02.github.io]";
    } else if (userInput.includes("about")) {
        botResponse.textContent = "Learn more about me on my About page: [https://andreslesmes02.github.io]";
    } else if (userInput.includes("contact")) {
        botResponse.textContent = "You can contact me here: [https://andreslesmes02.github.io]";
    } else {
        botResponse.textContent = "I'm not sure how to help with that. Try asking about projects, about me, or contact info!";
    }

    chatBox.appendChild(botResponse);
    document.getElementById("user-input").value = ""; // Clear input
}
