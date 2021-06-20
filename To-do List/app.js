// Selector

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteList);

//Functions

function addTodo(event){

//prevent from submitting form
    event.preventDefault(); 

//creating todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

//create list
    const newTodo = document.createElement('li');
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add('todo-list');    
    todoDiv.appendChild(newTodo);

//Delete Todo button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"> </i>';
    deleteButton.classList.add('delete-btn');
    todoDiv.appendChild(deleteButton);

//Appending to container
    todoList.appendChild(todoDiv);

// clear INput
    todoInput.value = "";
}


function deleteList(e){
    const item = e.target;
    if(item.classList.contains("delete-btn"))
        item.parentElement.remove();      
}