const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input[type="text"]');
const link = document.querySelector('a');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden"//일반적으로 string만 포함한 변수 대문자로 표기
const USERNAME_KEY = "username";

function onLoginSubmit(info){//info: 막 일어난 것들
    const userName = loginInput.value;
    info.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, userName);
    painGreetings(userName)
    
    
}

function painGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}




let savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    painGreetings(savedUsername);
}

//4 6 2:16
