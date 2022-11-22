## 1) Basic Data Types

### string
문자열. 처음부터 끝까지 문자로 이루어져 있음.

<br>


### 변수
* **const(constant)**  : 바뀌지 않는 값(상수)
-> 값을 절대 업데이트 할 수 없음

* **let** : 변수가 업데이트 되어야 할 때

* **var** : 바뀌지 말아야하는 변수 알지 못함(쓰지 말자.!)

` => 코드의 의미를 파악하기 쉽게 let, const 사용 권장`

<br>

** 변수이름 지정 **
: 자바스크립트에서 camelCase 지정이 최선의 방법

---

<br>

## 2) Booleans

### true/ false

* 값이 존재


### null

* 값이 '비어있음'
* 자연적으로 자연적으로 발생하지 않음(변수 안에 비어있다는걸 보여줌)

### undefind
* 값이 없음

### NaN : 
* 숫자 아님

---
<br>

## 3) Arrays

```javascript:Arrays

const num = [0, 1, 2, 3, 4, 5, 6, 7, 8]

//배열에서 아이템 찾기
console.log(num[1])

//배열에서 아이템 추가
num.push(9)

console.log(num[9])

```
`=>array 의 목적은 변수에 리스트를 가지게 하는 것`

---

<br>

## 4) Objects

* const로 선언한 변수 자체의 값은 바꿀 수 없지만 객체(object)값은 추가, 변경 가능

```javascript:Objects

const player = {
    name: "gaha",
    points: 13000,
    fat: true
}

console.log(player);
console.log(player.name);//console.log(player["name"])

player.fat=false;//const 자체는 수정할 수 없지만 object 안에 무언가를 수정할 수 있음
player.lastName= 'yeom';
console.log(player);


```

---
<br>

## 5) Function

### argument(매개변수): 어떤 정보를 함수에 보낼 수 있는 방법 

* 해당 함수 안에서만 작동 가능!

```javascript:Objects

function sayHello(nameOfPerson, age){
    console.log("Hello! I'm "+ nameOfPerson + "and I'm " + age)
}

sayHello('가하',26);
sayHello('수하',18);
sayHello('주하',17);
sayHello('원열',27);


```

---
<br>

## 6) Return

함수를 함수 밖에서 실행할 수 있게 해줌(반환값)

```javascript:Return
const calculator = {
            add: function(a, b){
                return a + b
            },
            minus: function(a, b){
                return a - b
            },
            multiply: function(a, b){
                return a * b
            },
            devide: function(a, b){
                return a / b
            },
            power : function(a, b){
                return a ** b;
            }
        }

        const plusResult = calculator.add(2,5);
        const minusResult = calculator.minus(plusResult,5);

        console.log(plusResult)
        console.log(minusResult)

```
=> 함수 안에 console.log 없이 값을 가져올 수 있음

(콘솔창에서 변수 이름으로 값확인 가능!)
###

<br>

## 7)Conditionals(조건문)

- parsInt: string -> number(문자 입력시 NAN)


- isNaN(): 숫자인지 아닌지(true/false)
  ㄴ false:number/true:string

- AND:&&

- OR:||

```javascript:Return
const age = parseInt(prompt("How old are you?")); 

if(isNaN(age) || age < 0){
    console.log('유효한 숫자를 입력 해주세요.')
} else if(age < 18){
    console.log('You are too young.')
} else if(age >= 18 && age <= 50){
    console.log('You can drink.')
}else if(age > 50 && age <= 80){
    console.log('You should exercise.')
}
else if(age === 100){
    console.log('You are wise.')
}else if(age > 80){
    console.log('You can do whatever you want.')
}

```
<br>

## 8)The Document Object

`· document: 우리가 접근할 수 있는HTML`

<br>

## HTML in Javascript

console.dir(): document 내부 볼 수 있음(가져올 수 있는 항목들 확인가능)

<br>

### getElementsByTagName

<br>

### querySelector
* element를 css 방식으로 검색할 수 있음
* 하나의 element만 return

<br>

### querySelectorAll
* 해당하는 Array 다 가져옴

---

<br>

### [추가하고 싶은 이벤트가 있을 때 확인하는 방법](https://developer.mozilla.org/ko/)
->console.dir()을 통해 접두사on 붙어있는것이 사용할 수 있는 이벤트

```js

const hello = document.querySelector('.hellos');

function handleTitleClick(){
    hello.style.color = 'green';
}

function handleTitleMouse(){
    hello.innerText = 'Mouse is Here!';
}

function handleleave(){
    hello.innerText = 'Mouse is gone!';
}

hello.onclick = handleTitleClick;
//= hello.addEventListener('click', handleTitleClick)

hello.onmouseover = handleTitleMouse;
// hello.addEventListener('mouseover', handleTitleMouse)

hello.onmouseleave = handleleave;
//hello.addEventListener('mouseleave', handleleave)

//addEventListener 더 선호(removeEventListener 사용을 위해)

```
<br>

### if를 이용한 addEnentListener

```js
const hello = document.querySelector('.hellos');

function handleTitleClick(){
    const currentColor = hello.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = 'tomato';
    }else{
        newColor = 'blue';
    }


    hello.style.color = newColor;
    console.log(newColor)
    //newColor 입력으로 hello 값 바꿈
}

hello.addEventListener('click', handleTitleClick);
```

## class 추가

### className
```js
onst h1 = document.querySelector(".hellos h1:first-of-type")

function handleTitleClick(){
    const clickedClass = "clicked"
    if(h1.className === clickedClass){
        h1.className = '';
    }else{
        h1.className = clickedClass;
    }
    
    console.log(h1.className)
}

h1.addEventListener('click', handleTitleClick);
```
-> class 지정되지만 **기존 class 없어짐**

<br>

### classList
```js
const h1 = document.querySelector(".hellos h1:first-of-type")

function handleTitleClick(){
    const clickedClass = "clicked"
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }else{
        h1.classList.add(clickedClass);
    }
    /*== function handleTitleClick(){
            h1.classList.toggle("clicked")*/
        }

h1.addEventListener('click', handleTitleClick);
```
-> 반복적인 add, remove는  **toggle**로 수정가능

## Event
### form과 input
```html
<form id="login-form">
        <input required maxlength="15" type="text" placeholder="What is your name?">
        <button>Log In</button>
    </form>
```
* form 안에 input을 넣어야 자동으로 sumit
* 더이상의 input이 없을 때 엔터를 치면 sumit
* if로 유효성 검사를 할 수 있지만 html에서 처리 할 수 있음 

### string

* 대문자 변수: 일반적으로 string만 포함한 변수 대문자로 표기
* string과 변수 같이 쓰기
```js
    const greeting = document.querySelector('#greeting');

    const HIDDEN_CLASSNAME = "hidden"//일반적으로 string만 포함한 변수 대문자로 표기

    function onLoginSubmit(info){//info: 막 일어난 것들
        const userName = loginInput.value;
        greeting.innerText = "Hello " + userName;
        greeting.innerText = `Hello ${userName}`;
       //같은 결과
        
        
    }

```

---
<br>

### localStorage

```js
localStorage.setItem("username","nico")
//로컬 스토리지에 저장

localStorage.getItem("username")
//"nico"

localStorage.removeItem("username")
//삭제 가능
```

---

<br>

### padStart()

```js
"1".padStart(2, "0");

//(길이, 넣을 문자)
//"01"

"hello".padStart(7, "x");
//xxhello
```




