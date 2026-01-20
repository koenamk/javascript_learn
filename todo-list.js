const todoList = [{}];

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `<p>${name} ${dueDate}
    <button onclick="todoList.splice(${i}, 1);
    renderTodoList();">Delete</button>
    </p>`;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const nameInput = document.querySelector('.js-name-input');
  const name = nameInput.value;

  const dateInput = document.querySelector('.js-due-date-input');
  const dueDate = dateInput.value;
  
  todoList.push({ name, dueDate });
  nameInput.value = '';
  renderTodoList();
}