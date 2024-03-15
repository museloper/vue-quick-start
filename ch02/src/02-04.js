// 상수에 새로운 객체 주소가 할당되는 것은 허용되지 않는다.
const p1 = { name: 'john', age: 20 }
p1 = { name: 'susan', age: 20 }

console.log(p1)
