<template>
  <div class="zheng-card" :class="{[`shadow-${shadow}`]: shadow}">
    <!-- 标题 -->
    <div class="zheng-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <!-- 主体 -->
    <div class="zheng-card__body" :style="bodyStyle" :class="bodyClass">
      <slot></slot>
    </div>
    <!-- 页脚 -->
    <div class="zheng-card__footer" v-if="$slots.footer">
      <slot name="footer"></slot>

    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ZhengCard'
})

defineProps({
  header: { // 卡片标题
    type: String,
    default: ''
  },
  shadow: { // 卡片阴影显示时机
    type: String,
    default: 'always',
    validator(val) {
      return ['always', 'hover', 'never'].includes(val)
    }
  },
  bodyStyle: { // 卡片主体样式
    type: Object,
    default: () => ({})
  },
  bodyClass: { // 卡片主体样式类名
    type: String,
    default: ''
  },
})
</script>

<style lang="scss" scoped>

</style>