// let: 블록 수준의 유효범위
let msg = 'GLOBAL'

function outer() {
  let msg = 'OUTER'
  console.log(msg)

  if (true) {
    let msg = 'BLOCK'
    console.log(msg)
  }
}

outer()
