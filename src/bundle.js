/* 此文件是用于打包的入口文件 */

/* 导入 fontawesome 核心包 */
import { library } from '@fortawesome/fontawesome-svg-core'

/* 导入 font awesome 图标组件 */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* 导如free-solid-svg-icons所有的图标 */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* 将图标添加到库中 */
library.add(fas)

// 导入样式入口文件
import '@/styles/index.scss'

// 导入所有的自定义组件
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Dialog from '@/components/Dialog'

// 自定义组件集合
const components = [Icon, Button, Card, Dialog]

// 组件库是以插件的形式给外部使用，需要是一个有install方法对象或直接是安装函数本身
function install(app) {
  app.component('font-awesome-icon', FontAwesomeIcon)
  components.forEach(component => {
    app.component(component.name, component)
  })
}

// 全部导出
export default install

// 按需导出
export {
  install,
  Icon,
  Button,
  Card,
  Dialog
}