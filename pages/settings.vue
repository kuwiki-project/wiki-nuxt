<template>
  <div class="scroll-page">
    <h1>設定</h1>
    <button class="white-link-button" @click="logout">
      ログアウトする
    </button>
    <p>
      <NuxtLink to="privacy" class="link-text"><chevron-right-icon size="1.5x" class="link-icon"></chevron-right-icon>プライバシーポリシー</NuxtLink>
    </p>
    <p>
      <NuxtLink to="privacy" class="link-text"><chevron-right-icon size="1.5x" class="link-icon"></chevron-right-icon>利用規約</NuxtLink>
    </p>
  </div>
</template>
<script>
import { ChevronRightIcon } from 'vue-feather-icons'
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
