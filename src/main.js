import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { imageEmits } from 'element-plus'
import { lazyPludin } from './directives'
import { componentPlugin } from './components'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPludin)
app.use(componentPlugin)

app.mount('#app')