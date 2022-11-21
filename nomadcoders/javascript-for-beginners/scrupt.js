const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input[type="text"]');
const link = document.querySelector('a');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = "hidden"//일반적으로 string만 포함한 변수 대문자로 표기

function onLoginSubmit(info){//info: 막 일어난 것들
    const userName = loginInput.value;
    info.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username", userName);
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    
}

function handleLInk(event){
    event.preventDefault();
    
    

}

loginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener('click', handleLInk);

//4 4 Getting~  7:08
