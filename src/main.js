import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { imageEmits } from 'element-plus'
import { lazyPludin } from './directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPludin)

app.mount('#app')