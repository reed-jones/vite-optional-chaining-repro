import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const failed = {}
console.warn(failed?.will?.not?.have?.an?.issue?.in?.dev ?? 'but will fail in production')

createApp(App).mount('#app')
