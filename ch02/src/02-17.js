let obj = {
  name: '아이패드',
  price: 20000,
  quantity: 2,

  // function 키워드 생략 가능
  order() {
    if (!this.amount) {
      this.amount = this.quantity * this.price
    }
    console.log('주문금액 : ' + this.amount)
  },

  discount(rate) {
    if (rate > 0 && rate < 0.8) {
      this.amount = (1 - rate) * this.price * this.quantity
    }
    console.log(100 * rate + '% 할인된 금액으로 구매합니다.')
  },
}

obj.discount(0.2)
obj.order()
