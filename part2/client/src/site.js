import api from "./svc/api.js"
import ui from "./ui/ui.js"

const form = document.getElementById("newMessage")
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    e.stopPropagation()
    e.stopImmediatePropagation()
    
    const textElement = document.getElementById("messageText")
    await api.sendMessage(textElement.value);

    textElement.value = ""
    
    await ui.displayMessages();
})

await ui.displayMessages()