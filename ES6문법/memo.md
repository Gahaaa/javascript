# ES6 문법 정리

## 1. let, const

* let: 재선언 불가, 재할당 가능
* const: 상수선언
<br>
->예측가능 코드 

```js
let a = 1;
const b = [];

a++; // a + 2;

b.push('a');
b[a] = 1;
```
---
<br>

## 2. 템플릿 리터럴

* `(back tick)
* ${} 중괄호 앞에 달러 표시


```js
// ES5
var str1 = ', ';
var str2 = 'World!';
var str3 = 'Hello' + str1 + str2;

// ES6
let str1 = ', ';
let str2 = 'World!';
let str3 = `Hello ${str1} ${str2}`;
```



---

<br>

## 3. 객체 리터럴

---
<br>

## 4. 화살표 함수
```js
// ES5
function plusFn(a, b) { 
  return a + b; 
} 

// ES6
// 함수 표현식 - 화살표 함수
const plusFn = (a, b) => {
  return a + b;
}
// 함수 표현식 - 화살표 함수 (생략형)
const plusFn = (a, b) => a + b;

`this`

function addElenet () {
    this.elType = 'p';
}

const addElenet = () => {
    this.elType = 'p';
}

```

만약 함수의 본문(body)에 return만 있는 경우 화살표 함수는 return과 {}를 생략할 수 있다. 단, 같이 생략해야한다.

[참고한 사이트](https://hanamon.kr/javascript-es6-%EB%AC%B8%EB%B2%95/)
