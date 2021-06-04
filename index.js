const selector = (s) => document.querySelector(s);

//selecteurs
const todoInput = selector('.todo-input');
const todoButton = selector('.todo-button');
const todoList = selector('.todo-list');

//functions
const addTodo = (e) => {
  e.preventDefault();

  const {target} = e;
  console.log(e,target);

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

    todoInput.value = ""
};

const deleteCheck = (e) => {


  const {target} = e;

  if(target.classList[0] === "trash-btn"){
    target.parentElement.remove();
  }

  if(target.classList[0] === "complete-btn"){
    target.parentElement.classList.toggle("complete")
  }
}

//ecouteurs
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
