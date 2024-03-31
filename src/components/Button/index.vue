<template>
  <button class="zheng-button" :class="classObj">
    <ZhengIcon v-if="loading" icon="spinner" spin></ZhengIcon>
    <ZhengIcon v-if="icon" :icon="icon"></ZhengIcon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import ZhengIcon from '../Icon/index.vue'
defineOptions({
  name: 'ZhengBUtton'
})
const props = defineProps({
  // 类型
  type: {
    type: String,
    validator(val) {
      return ['primary', 'success', 'info', 'warning', 'danger'].includes(val)
    }
  },
  // 朴素
  plain: {
    type: Boolean,
    default: false
  },
  // 圆角
  round: {
    type: Boolean,
    default: false
  },
  // 禁用, button元素原生自带有 disabled 属性，可利用属性透传特性自动添加到 button 元素上
  /* disabled: {
    type: Boolean,
    default: false
  }, */
  // 加载中
  loading: {
    type: Boolean,
    default: false
  },
  // 图标 fa-home fa-user
  icon: {
    type: String,
    default: ''
  },
  // 圆形
  circle: {
    type: Boolean,
    default: false
  },
  // 大小
  size: {
    type: String,
    validator(val) {
      return ['medium', 'small', 'mini'].includes(val)
    }
  }
})

const classObj = ref({
  [`zheng-button--${props.type}`]: props.type,
  'is-plain': props.plain,
  'is-round': props.round,
  'is-loading': props.loading,
  'is-circle': props.circle,
  [`zheng-button--${props.size}`]: props.size,
})
</script>

<style lang="scss" scoped></style>
