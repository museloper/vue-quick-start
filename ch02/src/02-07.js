let arr = [10, 20, 30, 40]

let [a1, a2, a3] = arr

console.log(a1, a2, a3)

let obj = { name: '홍길동', age: 20, gender: 'M' }

// { gender } = { gender: gender }
// 객체의 속성과 할당하려는 변수의 이름이 동일할 때에는 변수명을 생략할 수 있다.
let { name: n, age: a, gender } = obj

console.log(n, a, gender)
