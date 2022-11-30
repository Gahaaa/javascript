const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

const toDoArr = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArr));

}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText="❌";
    button.addEventListener("click", deleteTodo);

    span.innerText= newTodo;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    toDoArr.push(newTodo);
    paintTodo(newTodo);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(item){
    console.log("hello", item);
}

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parseToDos = JSON.parse(savedTodos);
    parseToDos.forEach(sayHello);
    /*
    ==
    parseToDos.forEach((item) => console.log("hello", item))
    */

}