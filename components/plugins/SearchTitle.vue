<template>
<v-row align='center' justify='center'>
  <span id='searchtitle'>{{ title }}</span>
</v-row>
</template>
<script>
export default {
  props: ['title'],
  }
</script>
<style scoped>
#searchtitle {
  opacity: 0.8;
  font-size: 1.2em;
  font-weight: 400;
  font-family: 'Noto Sans JP', sans-serif;
}
</style>
