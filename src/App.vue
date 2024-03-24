<template>
  <h1 class="title">zheng-ui 组件展示</h1>
  <nav class="nav">
    <router-link to="/">Icon</router-link>
    <router-link to="/button">Button</router-link>
    <router-link to="/card">Card</router-link>
    <router-link to="/dialog">Dialog</router-link>
    <router-link to="/pager">Pager</router-link>
    <router-link to="/collapse">Collapse</router-link>
    <router-link to="/tooltip">Tooltip</router-link>
    <router-link to="/dropdown">Dropdown</router-link>
  </nav>
  <div class="display-area">
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
h1.title {
  text-align: center;
  margin-bottom: 1em;
}

.nav {
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1em;
}

.active { // 匹配当前路由的router-link的会有这个类名，对应路由配置中的linkActiveClass属性值
  border-bottom: 3px solid #9BEFBC;
}
</style>