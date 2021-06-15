const mixedMessages = [
    "What is your Name?",
    "Where  are you going to pay visit?",
    "I suggest you to visit Japan. It is the land of the rising sun. ",
    "What about Balii? Sun and see are good friends in the summer.",
    "You worked hardly. This is the time of rest and vacation.",
    "Manhatten is the amazing and wonder island.",
    "Let's to spend time in Turkey!",
    "Working is not enough -we must apply.Wishing is not enough -we must do!"
];


function newMessage() {
    const randomMessage = Math.floor(Math.random() * (mixedMessages.length));
    document.getElementById('message-generator').innerHTML = mixedMessages[randomMessage]
}
