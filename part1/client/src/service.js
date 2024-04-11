export const AddMessage = async (message) => {
    const url = "http://localhost:5154/messages";

    const newMessage = {
        posted: new Date(),
        text: message,
    };
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage),
    });
}

export const GetMessages = async () => {
    const url = "http://localhost:5154/messages";
    const response = await fetch(url);
    return await response.json();
}