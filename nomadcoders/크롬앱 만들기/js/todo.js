const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const toDoArr = [];

function saveToDo(){
    localStorage.setItem("todo", JSON.stringify(toDoArr));

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
    saveToDo();

}

toDoForm.addEventListener("submit", handleToDoSubmit)