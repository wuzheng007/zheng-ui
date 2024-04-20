import Icon from './index.vue'

// 给组件加上install安装方法,供按需引入组件使用
Icon.install = (app) => {
  app.component(Icon.name, Icon)
}

export default Icon