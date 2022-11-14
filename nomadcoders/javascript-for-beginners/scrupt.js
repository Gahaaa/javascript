const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input[type="text"]');
const link = document.querySelector('a')

function onLoginSubmit(info){//info: 막 일어난 것들
    const userName = loginInput.value;
    info.preventDefault();
    loginForm.classList.add('hidden');
    console.log(userName);
    
    
}

function handleLInk(event){
    event.preventDefault();
    
    

}

loginForm.addEventListener("submit", onLoginSubmit);

link.addEventListener('click', handleLInk);

//3 4 Getting~  2:28
