import './assets/main.css'

import { createApp } from 'vue'
// import App from './App.vue'
// import App2 from './App2.vue'
import App3 from './App3.vue'
// import CheckboxItem from './components/CheckboxItem.vue'
// import CheckboxItem2 from './components/CheckboxItem2.vue'
import CheckboxItem3 from './components/CheckboxItem3.vue'

// createApp(App).component('CheckboxItem', CheckboxItem).mount('#app')
// createApp(App2).component('CheckboxItem2', CheckboxItem2).mount('#app')
createApp(App3).component('CheckboxItem3', CheckboxItem3).mount('#app')
