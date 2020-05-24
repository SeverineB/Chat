export function addMessageInList(inputValue) {
  console.log('j\'ajoute un message');
  const message = document.querySelector('.list-item');
  const messagesList = document.querySelector('.messages');
  const newLi = document.createElement('li');
  newLi.classList.add('list-item');
  messagesList.appendChild(newLi);
  const newText = document.createElement('p');
  message.appendChild(newText);
  newText.innerHTML = inputValue;
}

export function changeTextValue() {
  const input = document.querySelector('.form-input');
  console.log(input.value);
  return input.value;
}
