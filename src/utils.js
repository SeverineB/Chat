export function addMessage(username, text) {
  const messagesList = document.querySelector('.messages');
  const li = document.createElement('li');
  messagesList.appendChild(li);
}
export function randomHexColor() {
  return `#${Math.random().toString(16).slice(2, 8)}`;
}
