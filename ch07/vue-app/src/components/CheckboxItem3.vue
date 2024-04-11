<template>
  <li><input type="checkbox" :checked="idol.checked" /> {{ idol.name }}</li>
</template>
<script>
export default {
  name: 'CheckboxItem3',
  props: ['idol'],
}
</script>
