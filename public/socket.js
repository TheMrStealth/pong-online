const socket = io("http://172.16.102.130:3000");
const userDiv = document.getElementById("users")

socket.on("connect", () => {
    const username = prompt("Please Enter A Username", "user5301")
    socket.emit("new-user", username)
})

socket.on("users", (u) => {
    removeAllChildNodes(userDiv);
    const users = Object.keys(u);
    for(let i = 0; i < users.length; i++) {
        const gameTag = document.createElement("hi")
        gameTag.innerHTML = users[i];
        userDiv.append(gameTag)
    }
})

socket.on("choose-word", ()=>{
    const word = window.prompt("choose-word")
    isPlaying = true
    socket.emit("start-game", word)
})

socket.on("draw-output", (draw) => {
    linesArray = draw;
    redraw();
})

function sendDrawData(array) {
    socket.emit("draw-input", array)
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}