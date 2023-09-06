# API
**API (Application Programming Interface)**

- API는 프로그램들이 서로 상호작용 하는 것을 도와주는 매개체다.
- API를 호출한다는 것은 다른 프로그램에게 데이터를 받기 위해 말을 거는 것과 같다.

## API 호출하기
### fetch
- fetch는 서버에 네트워크 요청을 보내고 새로운 정보를 받아오는 일을 할 수 있다.
- fetch는 Promise를 반환하는 비동기 함수이며, 따라서 이 함수의 결과는 then을 통해 사용할 수 있다.

기본적인 리소스 취득요청
```javascript
async function logJSONData() {
  const response = await fetch("http://example.com/movies.json");
  const jsonData = await response.json();
  console.log(jsonData);
}
```
