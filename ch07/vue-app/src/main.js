import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import App2 from './App2.vue'
import CheckboxItem from './components/CheckboxItem.vue'
// import CheckboxItem2 from './components/CheckboxItem2.vue'

createApp(App).component('CheckboxItem', CheckboxItem).mount('#app')
// createApp(App2).component('CheckboxItem2', CheckboxItem2).mount('#app')
