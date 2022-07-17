<template>
  <div class="scroll-page">
    <h1>設定</h1>
    <button class="button-white" @click="logout">ログアウトする</button>
    <p>
      <NuxtLink to="/privacy">
        <IconTriangle class="svg-triangle"></IconTriangle>
        プライバシーポリシー
      </NuxtLink><br />
      <NuxtLink to="/terms" class="link-underline">
        <IconTriangle class="svg-triangle"></IconTriangle> 利用規約
      </NuxtLink>
    </p>
  </div>
</template>
<script>
export default {
  head: {
    title: "設定"
  },
  methods: {
    logout() {
      this.$auth.logout()
      this.$toast.clear()
      this.$toast.success("ログアウトしました")
    }
  }
}
</script>
<style scoped>
.svg-triangle {
  height: 0.9em;
  width: auto;
  display: inline-block;
  text-decoration: none;
}
</style>
