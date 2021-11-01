<template>
  <div>
    <theHeader />
    <Nuxt />
  </div>
</template>
<style scoped>
.scroll-page {
  width: 90%;
  margin: 0 auto 1em auto;
}
.narrow-scroll-page {
  width: 85%;
  max-width: 25em;
  margin: 0 auto 1em auto;
}
.fixed-page {
  height: 75vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>