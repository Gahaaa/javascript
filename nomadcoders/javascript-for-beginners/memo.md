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

## 6) Recap

###


