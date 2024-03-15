// 기본 파라미터
function addContact(
  name,
  mobile,
  home = '없음', // 기본값 지정
  address = '없음', // 기본값 지정
  email = '없음' // 기본값 지정
) {
  var str = `name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`
  console.log(str)
}

addContact('홍길동', '010-2222-3333')
addContact('이몽룡', '010-2222-3333', '02-1234-5678', '서울시')
