const messageTypes = {
    LEFT: 'left',
    RRIGHT: 'right',
    LOGIN: 'login'
}

const chatWindow = document.querySelector('.group-char-card')
const chatMsgs = document.querySelector('.chat-messages');
const sendBtn = document.querySelector('.primary-sm')
const msgInput = document.querySelector('.msg-input');
const loginBtn = document.querySelector('.login-btn');
const usernameInput = document.querySelector('.username-input')
const login = document.querySelector('.')
let socket = io();

socket.on('message', message => {
    if (message.type !== messageTypes.LOGIN) {
        if (message.author === username) {
            message.type = messageTypes.RIGHT
        } else {
            message.type = messageTypes.LEFT
        }
    }

    chatMsgs.push(message);
    displayMessages()
});

createMsg = msg => {
    if (message.type === messageTypes.LOGIN) {
        return /*html*/`
            <p class="secondary-text text-center mb-2">
                ${message.author} joined the chat
            </p>
        `
    }

    return /*html*/`
        <div class="message ${message.type === messageTypes.LEFT ? 'message-left' : 'message-right'}">
            <div class="message-details flex">
                <p class="flex-grow-1 message-author">
                    ${mesage.type === messageTypes.LEFT ? message.author : ''}
                </p>
                <p class="message-date">${message.date}</p>
            </div>
        </div>
    `
}

const displayMessages = () => {
    const msgsHtml = messages
        .map(message => createMessageHtml(message))
        .join('')

    chatMsgs.innerHTML = msgsHtml
}

sendBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!msgInput.value) {
        console.log('invalid input')
    }

    const date = Date();
    const month = ('0' + date.getMonth()).slice(0, 2);
    const day = date.getDate();
    const year = date.getFullYear();
    const dateString = `${month}/${day}/${year}`;

    const mesage = {
        author: usernamme,
        date: dateString,
        content: msgInput.value
    }

    sendMessage(message);

    msgInput.value = ''
})

loginBtn.addEventListener('click', e => {
    e.preventDefault();

    if (!usernameInput.value) {
        return console.log('must supply a username')
    }

    username = usernameInput.value
    sendMessage({ author: username, type: messageTypes.LOGIN});
})

const sendMessage = message => {
    socket.emit('message', message);
}