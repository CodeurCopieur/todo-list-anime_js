const selector = (s) => document.querySelector(s);

//selecteurs
const todoInput = selector('.todo-input');
const todoButton = selector('.todo-button');
const todoList = selector('.todo-list');
const todoFilter = selector('.todo-filter');
const todoCount = selector('.todo-count');

//ajout d'élément
const addTodo = (e) => {
  e.preventDefault();

  todoList.innerHTML += `
      <div class="todo">
        <li class="todo-item">
          ${todoInput.value}
        </li>
        <button class="complete-btn">
          <i class="fas fa-check"></i>
        </button>
        <button class="trash-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;

    todoInput.value = "";
};

todoButton.addEventListener('click', addTodo);

//supprimerl'élément
const deleteCheck = (e) => {
  let {target} = e;

  if(target.classList[0] === "trash-btn"){

    target.parentElement.classList.add("fall");

    target.parentElement.addEventListener('transitionend', () =>{
      target.parentElement.remove();
    })

  }

  if(target.classList[0] === "complete-btn"){
    target.parentElement.classList.toggle("completed");
  }
}
todoList.addEventListener('click', deleteCheck);

//ecouteurs

const filterTodo = (e) => {
  const {target} = e;
  const todos = document.querySelectorAll('.todo');
  console.log(todos);

  todos.forEach( todo => {
    switch (target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains('completed')) {
          todo.style.display = "flex";
        }else{
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains('completed')) {
          todo.style.display = "flex";
        }else{
          todo.style.display = "none";
        }
        break;
    }
  });
}

todoFilter.addEventListener('input', filterTodo)