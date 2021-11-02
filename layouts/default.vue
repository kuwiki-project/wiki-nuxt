<template>
  <div class="full-page">
    <theHeader />
    <Nuxt />
  </div>
</template>
<style scoped>
.the-header{
  height: 4em;
}
.fixed-page {
  display: flex;
  min-height: calc(100vh - 4em);;
  height: calc(-webkit-fill-available - 4em);
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.scroll-page {
  width: 90%;
  margin: 0 auto 1em auto;
}
.narrow-scroll-page {
  width: 85%;
  max-width: 25em;
  margin: 0 auto 1em auto;
}
</style>