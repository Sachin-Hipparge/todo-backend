const API_URL = 'http://localhost:8080/api/todos';

function loadTodos() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('todo-list');
      list.innerHTML = '';
      data.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        li.innerHTML = `
          <span>${todo.title} - ${todo.description}</span>
          <button onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        list.appendChild(li);
      });
    });
}

function addTodo() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description, completed: false })
  })
    .then(() => {
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
      loadTodos();
    });
}

function deleteTodo(id) {
  fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  }).then(() => loadTodos());
}

// Load todos on page load
window.onload = loadTodos;
