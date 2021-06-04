// Establish a Socket.io connection
const socket = io();
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const client = feathers();

client.configure(feathers.socketio(socket));
// Use localStorage to store our login token
client.configure(feathers.authentication());

const messageSelector = document.getElementById('message');
const tokens = document.getElementById('tokens');
const fiats = document.getElementById('fiats');
const submit = document.getElementById('submit-pairs');

submit.addEventListener('click', ()=>client.service('pairs').create({tokens: tokens.value, fiats: fiats.value}));
// Renders a message to the page
const addMessage = message => {
  messageSelector.textContent = JSON.stringify(message, null, '\t');
};

// Listen to created events and add the new message in real-time
client.service('prices').on('created', addMessage);