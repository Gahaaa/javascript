const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"

let toDoArr = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoArr));

}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDoArr = toDoArr.filter((toDo) => toDo.id !== parseInt(li.id))
    saveToDos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");

    button.innerText="❌";
    button.addEventListener("click", deleteTodo);

    span.innerText= newTodo.text;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDoArr.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();

}

toDoForm.addEventListener("submit", handleToDoSubmit)

// function sayHello(item){
//     console.log("hello", item);
// }

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos){
    const parseToDos = JSON.parse(savedTodos);
    toDoArr = parseToDos;
    parseToDos.forEach(paintTodo);
    // parseToDos.forEach((item) => console.log("hello", item))
     /*==
    parseToDos.forEach(sayHello);
    */

}

// 6-4 10:33