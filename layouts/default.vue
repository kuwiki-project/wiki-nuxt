<template>
  <div class="default-layout">
    <theHeader class="the-header" />
    <Nuxt />
  </div>
</template>
<style scoped>
.default-layout .the-header {
  height: 10%;
}
.default-layout .fixed-page {
  height: 90%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.default-layout .scroll-page {
  width: 90%;
  margin: 0 auto 2em auto;
}
.default-layout .narrow-scroll-page {
  width: 85%;
  max-width: 25em;
  margin: 0 auto 1em auto;
}
.narrow-scroll-page:deep(h1) {
  text-align: center;
  margin: 2em 0 1em;
}
</style>
