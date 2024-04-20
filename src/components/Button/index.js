import Button from './index.vue'

// 给组件加上install安装方法,供按需引入组件使用
Button.install = (app) => {
  app.component(Button.name, Button)
}

export default Button