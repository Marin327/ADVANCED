function notify(message) {
 const notification = document.getElementById("notification");
 notification.textContent = message;
 notification.style.display = "block";
 notification.addEventListener(
  "click",
  () => (notification.style.display = "none")
 );
}
//
console.log("---------");
//

function notify(message) {
  const div = document.getElementById('notification');
  div.textContent = message;
  div.style.display = 'block';
  div.addEventListener('click', () => div.style.display = 'none');
}
//
console.log("-----");
//
function notify (message) {
  const notifDiv = document.getElementById(`notification`)
  notifDiv.textContent = message
  notifDiv.style.display = 'block'
  notifDiv.addEventListener('click', () => notifDiv.style.display = 'none')
}