<template>
  <div>
    <h1 class="row-title">普通使用</h1>
    <div class="row">
      <ZhengIcon icon="fa-home" />
      <ZhengIcon icon="fa-phone"/>
      <ZhengIcon icon="fa-user" />
      <ZhengIcon icon="fa-check" />
      <ZhengIcon icon="fa-download" />
      <ZhengIcon icon="fa-image" />
      <ZhengIcon icon="fa-bars" />
      <ZhengIcon icon="fa-compass" />
    </div>
    <h1 class="row-title">设置大小</h1>
    <div class="row">
      <Zheng-Icon icon="fa-home" size="xs" />
      <Zheng-Icon icon="fa-phone" size="2xs" />
      <Zheng-Icon icon="fa-user" size="sm" />
      <Zheng-Icon icon="fa-check" size="lg" />
      <Zheng-Icon icon="fa-download" size="xl" />
      <Zheng-Icon icon="fa-image" size="2xl" />
      <Zheng-Icon icon="fa-bars" size="2x" />
      <Zheng-Icon icon="fa-compass" size="3x" />
    </div>
    <h1 class="row-title">旋转和翻转</h1>
    <div class="row">
      <ZhengIcon icon="fa-solid fa-coffee" rotation="90" />
      <ZhengIcon icon="fa-solid fa-coffee" rotation="180" />
      <ZhengIcon icon="fa-solid fa-coffee" rotation="270" />
      <ZhengIcon icon="fa-solid fa-coffee" flip="horizontal" />
      <ZhengIcon icon="fa-solid fa-coffee" flip="vertical" />
      <ZhengIcon icon="fa-solid fa-coffee" flip="both" />
    </div>
    <h1 class="row-title">动画</h1>
    <div class="row">
      <ZhengIcon icon="fa-home" beat/>
      <ZhengIcon icon="fa-phone" beat-fade/>
      <ZhengIcon icon="fa-user" bounce />
      <ZhengIcon icon="fa-check" fade/>
      <ZhengIcon icon="fa-download" flip/>
      <ZhengIcon icon="fa-image" shake/>
      <ZhengIcon icon="fa-bars" spin/>
      <ZhengIcon icon="fa-compass" spin spin-reverse/>
      <ZhengIcon icon="fa-spinner" spin-pulse/>
    </div>
    <h1 class="row-title">自定义属性</h1>
    <div class="row">
      <ZhengIcon icon="fa-home" type="primary"/>
      <ZhengIcon icon="fa-phone" type="success"/>
      <ZhengIcon icon="fa-user" type="warning"/>
      <ZhengIcon icon="fa-check" type="danger"/>
      <ZhengIcon icon="fa-download" type="info"/>
      <ZhengIcon icon="fa-image" color="#f00"/>
      <ZhengIcon icon="fa-bars" color="#0f0"/>
      <ZhengIcon icon="fa-compass" color="#00f"/>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>