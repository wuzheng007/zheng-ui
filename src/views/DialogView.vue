<template>
  <div>
    <ZhengButton @click="visible = true">打开弹窗</ZhengButton>

    <ZhengDialog v-model="visible" top="20vh" :beforeClose="beforeCloseFn" @closed="handleClosed" @cancel="onCancel"
      @confirm="onConfirm">
      <template #header>
        <span style="margin-right: 10px;">自定义标题</span>
        <Zheng-Button size="mini" type="primary">新增</Zheng-Button>
      </template>
      <div>
        测试显示内容
      </div>
    </ZhengDialog>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
// 关闭前的回调函数
function beforeCloseFn(done) {
  console.log('关闭前')
  done()
}
// 弹窗关闭后的处理函数
function handleClosed() {
  console.log('弹窗已经关闭了')
}

function onCancel() {
  visible.value = false
}
function onConfirm() {
  visible.value = false
}
</script>

<style lang="scss" scoped></style>