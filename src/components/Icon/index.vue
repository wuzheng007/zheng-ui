<template>
  <i class="zheng-icon" :class="{ [`zheng-icon-${type}`]: type }" @click="$emit('click')">
    <font-awesome-icon v-bind="$attrs" />
  </i>
</template>

<script setup>
defineOptions({
  name: 'ZhengIcon'
})

defineProps({
  type: { // 颜色类型，也可直接通过style属性直接设置颜色
    type: String,
    validate(value) {
      return ['primary', 'success', 'warning', 'danger', 'info'].includes(value)
    }
  }
})

defineEmits(['click'])
</script>

<style lang="scss" scoped></style>