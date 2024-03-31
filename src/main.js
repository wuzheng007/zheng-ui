import './assets/main.css'
// 导入样式入口文件
import '@/styles/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* 导入 font awesome 图标组件 */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* 导如free-solid-svg-icons所有的图标 */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* 将图标添加到库中 */
library.add(fas)


import Icon from '@/components/Icon/index.vue'
import Button from '@/components/Button/index.vue'
import Card from '@/components/Card/index.vue'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('ZhengIcon', Icon)
app.component('ZhengButton', Button)
app.component('ZhengCard', Card)

app.use(router)

app.mount('#app')
