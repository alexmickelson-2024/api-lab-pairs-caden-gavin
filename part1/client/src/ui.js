import { AddMessage, GetMessages } from "./service.js";

const setupForm = () => {
    const formElement = document.getElementById("textcollectionform");
    formElement.addEventListener("submit", async (e) => {
        e.preventDefault();
        const message = document.getElementById("textinput").value;
        await AddMessage(message);
        await renderMessageBoard();
    })
}

const renderMessageBoard = async () => {
    const MessageList = await GetMessages();
    console.log(MessageList);

    const containerElement = document.getElementById("Messagecontainer");
    containerElement.replaceChildren();

    MessageList.forEach(Message => {
        const messageCard = document.createElement("div");
        messageCard.innerText = `${Message.posted} - ${Message.text}`;
        containerElement.appendChild(messageCard);
    });
}

setupForm();
renderMessageBoard();