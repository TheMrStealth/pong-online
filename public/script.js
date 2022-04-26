const socket = io();

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
    }
});

socket.on('chat message', function(msg) {
    var item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});


const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d")


let pos = {};
let mousedown = false
document.addEventListener("mousemove", e => {
    pos.x = e.clientX;
    pos.y = e.clientY
    if(mousedown){
        draw()

    }
})

document.addEventListener("mousedown", (e) => mousedown = true);
document.addEventListener("mouseup", (e) => mousedown = false)
function draw (){
    c.beginPath();

    c.lineWidth = 5;
    c.lineCap = 'round'
    c.sttrokeStyle = '#c0392h'

    c.moveTo(pos.x, pos.y);
    
    c.lineTo(pos.x, pos.y)

    c.stroke();
}