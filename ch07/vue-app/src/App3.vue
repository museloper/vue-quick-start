<template>
  <div>
    <h2>관심있는 K-POP 가수?</h2>
    <hr />
    <ul>
      <CheckboxItem3 v-for="idol in idols" :key="idol.id" :idol="idol" />
    </ul>
  </div>
</template>

<script>
import CheckboxItem3 from './components/CheckboxItem3.vue'
import Idol from './Idol'

export default {
  name: 'App',
  components: {
    CheckboxItem3,
  },
  data() {
    return {
      idols: [
        new Idol(1, 'BTS', true),
        new Idol(2, 'Black Pink', false),
        new Idol(3, 'EXO', false),
        new Idol(4, 'ITZY', false),
      ],
    }
  },
}
</script>
