const form = document.querySelector('.form-js');
const commentsList = document.querySelector('.chat-items--js');

function addComment() {
  const message = document.querySelector('.message-js textarea').value;
  if (message) {
    const element = document.createElement('div');
    const date = new Date();
    const monthList = new Array();
    monthList[0] = "January";
    monthList[1] = "February";
    monthList[2] = "March";
    monthList[3] = "April";
    monthList[4] = "May";
    monthList[5] = "June";
    monthList[6] = "July";
    monthList[7] = "August";
    monthList[8] = "September";
    monthList[9] = "October";
    monthList[10] = "November";
    monthList[11] = "December";
    let month = monthList[date.getMonth()];
    element.classList.add('chat-items__item');
    element.innerHTML = `
      <div class="chat-items__item-title">
        <h3>Nikolas Shpakovskiy</h3>
        <div class="date">${date.getDate()} ${month} ${date.getFullYear()}</div>
      </div>
      <div class="chat-items__item-message">${message}</div>
      `;
    commentsList.prepend(element);
    form.reset();
  }
}

form.addEventListener("submit", addComment);

let keysPressed = {};
document.addEventListener('keydown', (event) => {
  keysPressed[event.key] = true;
  if (keysPressed['Control'] && event.key == 'Enter') {
    addComment()
  }
});
