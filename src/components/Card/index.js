import Card from './index.vue'

// 给组件加上install安装方法,供按需引入组件使用
Card.install = (app) => {
  app.component(Card.name, Card)
}

export default Card