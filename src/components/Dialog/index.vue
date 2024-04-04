<template>
  <Teleport :to="appendTo">
    <Transition name="modal-fade" @after-leave="emit('closed')">
      <div class="zheng-dialog-modal" v-show="visible">
        <div class="zheng-dialog" ref="dialog">
          <!-- 关闭按钮 -->
          <ZhengIcon v-if="showClose" icon="close" size="xl" class="zheng-dialog-close" @click="onClose"></ZhengIcon>
          <!-- 头部 -->
          <header class="zheng-dialog__header">
            <slot name="header">{{ title }}</slot>
          </header>
          <!-- 主体 -->
          <div class="zheng-dialog__body" v-if="$slots.default">
            <slot></slot>
          </div>
          <!-- 底部 -->
          <footer class="zheng-dialog__footer">
            <slot name="footer">
              <ZhengButton size="medium" @click="onCancel">{{ cancelText }}</ZhengButton>
              <ZhengButton size="medium" type="primary" @click="onConfirm">{{ confirmText }}</ZhengButton>
            </slot>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// 这个宏可以用来直接在 <script setup> 中声明组件选项，而不必使用单独的 <script> 块
defineOptions({
  name: 'ZhengDialog'
})
// 仅 <script setup> 中可用的编译宏命令，并不需要显式地导入。声明的 props 会自动暴露给模板。defineProps 会返回一个对象，其中包含了可以传递给组件的所有 props
const props = defineProps({
  // 标题
  title: {
    type: String,
    default: '提示'
  },
  // 弹窗宽度，默认50%
  width: {
    type: String,
    default: '50%'
  },
  // 弹窗顶部的margin-top值，默认15vh
  top: {
    type: String,
    default: '15vh'
  },
  // 关闭前的回调，会暂停 Dialog 的关闭. 回调函数内执行 done 参数方法的时候才是真正关闭对话框的时候.
  beforeClose: Function,
  // Dialog 挂载到哪个 DOM 元素，默认body
  appendTo: {
    type: String,
    default: 'body'
  },
  // 是否展示右上角的关闭按钮，默认true
  showClose: {
    type: Boolean,
    default: true
  },
  // 底部取消按钮文本，默认 取 消
  cancelText: {
    type: String,
    default: '取 消'
  },
  // 底部确认按钮文本，默认 确 认
  confirmText: {
    type: String,
    default: '确 认'
  }
})

// 声明要触发的事件：
const emit = defineEmits(['closed', 'cancel', 'confirm'])

// 声明一个双向绑定 prop, 通过父组件的 v-model 来使用
const visible = defineModel()

// 弹窗引用
const dialog = ref(null)

onMounted(() => {
  // 组件挂载后，给dialog设置css变量
  dialog.value.style.setProperty('--zheng-dialog-width', props.width)
  dialog.value.style.setProperty('--zheng-dialog-margin-top', props.top)
})

// 点击 关闭图标 处理函数
function onClose() {
  // 如果传入了关闭之前的处理，就先执行传入的函数，并将关闭弹窗的函数作为参数传递出去，让使用者决定关闭弹窗的时机
  if (typeof props.beforeClose === 'function') {
    props.beforeClose(closeDialog)
  } else {
    closeDialog()
  }
}

// 点击 取消按钮 处理函数
function onCancel() {
  emit('cancel')
}
// 点击 确认按钮 处理函数
function onConfirm() {
  emit('confirm')
}

// 关闭弹窗
function closeDialog() {
  visible.value = false
}
</script>

<style lang="scss" scoped></style>