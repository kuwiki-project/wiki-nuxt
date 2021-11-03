<template>
  <div class="scroll-page">
    <h1>お知らせ</h1>
    <a class="twitter-timeline" href="https://twitter.com/kuwiki99"
      >Tweets by kuwiki99</a
    >
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
    ></script>
  </div>
</template>
<script>
export default {
  auth: false,
  head: {
    title: "お知らせ"
  }
}
</script>
