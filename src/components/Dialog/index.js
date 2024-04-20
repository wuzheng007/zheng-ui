import Dialog from './index.vue'

// 给组件加上install安装方法,供按需引入组件使用
Dialog.install = (app) => {
  app.component(Dialog.name, Dialog)
}

export default Dialog