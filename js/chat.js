  const chatButton = document.getElementById("chat-button");
  const chatWindow = document.getElementById("chat-window");
  const closeChat = document.getElementById("close-chat");
  const sendBtn = document.getElementById("send-btn");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");

  // Abrir chat
  chatButton.addEventListener("click", () => {
    chatWindow.classList.remove("hidden");
    chatButton.classList.add("hidden");
  });

  // Cerrar chat
  closeChat.addEventListener("click", () => {
    chatWindow.classList.add("hidden");
    chatButton.classList.remove("hidden");
  });

  // Enviar mensaje
  function sendMessage() {
    const message = chatInput.value.trim();
    if (message === "") return;

    // Burbuja del usuario
    const userBubble = document.createElement("div");
    userBubble.className = "flex items-start space-x-2 justify-end";
    userBubble.innerHTML = `
      <div class="bg-yellow-600 text-white px-3 py-2 rounded-xl max-w-[70%]">
        ${message}
      </div>
    `;
    chatMessages.appendChild(userBubble);

    chatInput.value = "";

    // Respuesta automática
    setTimeout(() => {
      const botBubble = document.createElement("div");
      botBubble.className = "flex items-start space-x-2";
      botBubble.innerHTML = `
        <div class="bg-gray-200 text-gray-800 px-3 py-2 rounded-xl max-w-[70%]">
          Gracias por tu mensaje 🙌.  
          Un asesor de <span class="font-semibold">MiJoyería</span> se pondrá en contacto contigo pronto.
        </div>
      `;
      chatMessages.appendChild(botBubble);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  sendBtn.addEventListener("click", sendMessage);
  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });