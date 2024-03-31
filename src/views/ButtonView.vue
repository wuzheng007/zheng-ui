<template>
  <div>
    <h1 class="row-title">普通使用</h1>
    <div class="row">
      <ZhengButton>默认按钮</ZhengButton>
      <ZhengButton type="primary">主要按钮</ZhengButton>
      <ZhengButton type="success">成功按钮</ZhengButton>
      <ZhengButton type="info">信息按钮</ZhengButton>
      <ZhengButton type="warning">警告按钮</ZhengButton>
      <ZhengButton type="danger">危险按钮</ZhengButton>
    </div>
    <h1 class="row-title">朴素按钮</h1>
    <div class="row">
      <ZhengButton>默认按钮</ZhengButton>
      <ZhengButton type="primary" plain>主要按钮</ZhengButton>
      <ZhengButton type="success" plain>成功按钮</ZhengButton>
      <ZhengButton type="info" plain>信息按钮</ZhengButton>
      <ZhengButton type="warning" plain>警告按钮</ZhengButton>
      <ZhengButton type="danger" plain>危险按钮</ZhengButton>
    </div>
    <h1 class="row-title">圆角按钮</h1>
    <div class="row">
      <ZhengButton round>默认按钮</ZhengButton>
      <ZhengButton type="primary" round>主要按钮</ZhengButton>
      <ZhengButton type="success" round>成功按钮</ZhengButton>
      <ZhengButton type="info" round>信息按钮</ZhengButton>
      <ZhengButton type="warning" round>警告按钮</ZhengButton>
      <ZhengButton type="danger" round>危险按钮</ZhengButton>
    </div>
    <h1 class="row-title">禁用状态</h1>
    <div class="row">
      <ZhengButton disabled>默认按钮</ZhengButton>
      <ZhengButton type="primary" disabled>主要按钮</ZhengButton>
      <ZhengButton type="success" disabled>成功按钮</ZhengButton>
      <ZhengButton type="info" disabled>信息按钮</ZhengButton>
      <ZhengButton type="warning" disabled>警告按钮</ZhengButton>
      <ZhengButton type="danger" disabled>危险按钮</ZhengButton>
    </div>
    <h1 class="row-title">加载中</h1>
    <div class="row">
      <ZhengButton loading>默认按钮</ZhengButton>
      <ZhengButton type="primary" loading>主要按钮</ZhengButton>
      <ZhengButton type="success" loading>成功按钮</ZhengButton>
      <ZhengButton type="info" loading>信息按钮</ZhengButton>
      <ZhengButton type="warning" loading>警告按钮</ZhengButton>
      <ZhengButton type="danger" loading>危险按钮</ZhengButton>
    </div>
    <h1 class="row-title">图标和圆形按钮</h1>
    <div class="row">
      <ZhengButton type="primary" icon="fa-trash"></ZhengButton>
      <ZhengButton type="primary" icon="fa-magnifying-glass">搜索</ZhengButton>
      <ZhengButton type="primary">上传 <ZhengIcon icon="fa-upload"></ZhengIcon></ZhengButton>
      <ZhengButton type="primary" icon="fa-trash" circle></ZhengButton>
      <ZhengButton type="success" icon="fa-magnifying-glass" circle></ZhengButton>
      <ZhengButton type="warning" icon="fa-upload" circle></ZhengButton>
    </div>
    <h1 class="row-title">不同尺寸</h1>
    <div class="row">
      <ZhengButton>默认按钮</ZhengButton>
      <ZhengButton size="medium">中等按钮</ZhengButton>
      <ZhengButton size="small">小型按钮</ZhengButton>
      <ZhengButton size="mini">超小按钮</ZhengButton>
    </div>
  </div>
</template>

<script setup>
import ZhengIcon from '@/components/Icon/index.vue'
</script>

<style lang="scss" scoped></style>
