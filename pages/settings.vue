<template>
  <div class="scroll-page">
    <h1>設定</h1>
    <button class="button-white" @click="logout">ログアウトする</button>
    <p>
      <NuxtLink to="/privacy" class="link-underline">
        <chevron-right-icon class="icon-with-text"></chevron-right-icon>プライバシーポリシー
      </NuxtLink><br />
      <NuxtLink to="/terms" class="link-underline">
        <chevron-right-icon class="icon-with-text"></chevron-right-icon>利用規約
      </NuxtLink>
    </p>
  </div>
</template>
<script>
import { ChevronRightIcon } from "vue-feather-icons"
export default {
  components: {
    ChevronRightIcon
  },
  head: {
    title: "設定"
  },
  methods: {
    logout() {
      this.$auth.logout()
      this.$toast.success("ログアウトしました")
    }
  }
}
</script>
