// 상수에 선언된 객체 주소는 변경할 수 없지만 객체 내부의 값들은 변경할 수 있다.
const p1 = { name: 'john', age: 20 }
p1.age = 22

console.log(p1)
