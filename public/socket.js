const socket = io("http://localhost:3000");

socket.on("connect", () => {
    const username = prompt("Please Enter A Username", "user5301")
    socket.emit("new-user", username)
})

socket.on("new-player", players => {
    
})