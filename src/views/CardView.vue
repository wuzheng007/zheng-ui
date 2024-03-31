<template>
  <div>
    <h1 class="row-title">基础用法</h1>
    <div class="row">
      <ZhengCard header="标题1" shadow="hover">
        <div>
          hover时显示阴影
        </div>
        <template #footer>
          <div>底部1</div>
        </template>
      </ZhengCard>
      <ZhengCard shadow="always">
        始终显示阴影
      </ZhengCard>
      <ZhengCard shadow="never">
        <div>
          从不显示阴影
        </div>
        <template #footer>
          <div>底部3</div>
        </template>
      </ZhengCard>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>