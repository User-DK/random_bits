document.getElementById('getUser').addEventListener('click', () => {
  fetch('http://localhost:3000/user')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});

document.getElementById('postUser').addEventListener('click', () => {
  fetch('http://localhost:3000/user', {
    method: 'POST'
  })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});

document.getElementById('putUser').addEventListener('click', () => {
  fetch('http://localhost:3000/user', {
    method: 'PUT'
  })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});

document.getElementById('deleteUser').addEventListener('click', () => {
  fetch('http://localhost:3000/user', {
    method: 'DELETE'
  })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});

document.getElementById('getUserById').addEventListener('click', () => {
  const userId = prompt('Enter User ID:');
  fetch(`http://localhost:3000/user/${userId}`)
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});


