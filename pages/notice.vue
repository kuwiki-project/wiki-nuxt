<template>
  <div class="scroll-page">
    <h1>お知らせ</h1>
    <Timeline id="kuwiki99" sourceType="profile" />
  </div>
</template>
<script scoped>
import { Timeline } from 'vue-tweet-embed'
export default {
  components: {
    Timeline
  },
  auth: false,
  head: {
    title: "お知らせ"
  }
}
</script>
