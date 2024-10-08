window.alert(`Your about to enter this page!`)

document.getElementById(`kb`)
document.getElementById(`ms`)
document.getElementById(`hp`)

let username;

document.getElementById(`submit`).onclick = function () {
    username = document.getElementById('username').value;
    document.getElementById('name').textContent = `Your name is ${username}`;
}
