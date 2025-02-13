function toggleChatbot() {
    var chatbot = document.getElementById("chatbot");
    chatbot.style.display = chatbot.style.display === "none" || chatbot.style.display === "" ? "block" : "none";
  }
  
  function sendMessage() {
    var userInput = document.getElementById("userInput");
    var chatbotBody = document.getElementById("chatbotBody");
    var messageText = userInput.value.trim();
  
    if (messageText === "") return;
  
    // Add User Message
    var userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.innerHTML = "<strong>You:</strong> " + messageText;
    chatbotBody.appendChild(userMessage);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  
    // Clear input field
    userInput.value = "";
  
    // Get Bot Reply
    setTimeout(function () {
      botReply(messageText);
    }, 1000);
  }
  
  function botReply(userMessage) {
    var chatbotBody = document.getElementById("chatbotBody");
  
    var replyText = "I'm sorry, I don't understand that.";
  
    // Simple bot responses
    var responses = {
      "hello": "Hello! How can I help you today? 😊",
      "hi": "Hi there! 👋",
      "how are you": "I'm just a bot, but I'm doing great! What about you?",
      "bye": "Goodbye! Have a great day! 😊",
      "thanks": "You're welcome! If you need anything else, let me know."
    };
  
    // Check if message exists in the response list
    var lowerCaseMessage = userMessage.toLowerCase();
    if (responses[lowerCaseMessage]) {
      replyText = responses[lowerCaseMessage];
    }
  
    // Add Bot Reply
    var botMessage = document.createElement("div");
    botMessage.classList.add("chatbot-message");
    botMessage.innerHTML = "<strong>ChatBot:</strong> " + replyText;
    chatbotBody.appendChild(botMessage);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }