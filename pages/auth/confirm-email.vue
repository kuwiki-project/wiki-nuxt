<template>
  <div class="narrow-scroll-page">
    <h1>メールアドレス認証</h1>
    <div class="alert-message">
      <alert-triangle-icon
        size="1.2x"
        class="icon-with-text"
      ></alert-triangle-icon>
      受信したメールに身に覚えのない方はこのページを閉じてください
    </div>
    <p>
      京大wikiへの利用登録を完了するため，以下のボタンを押してアカウントを有効化してください
    </p>
    <form @submit.prevent="activate">
      <button type="submit" class="button-submit">アカウント有効化</button>
    </form>
  </div>
</template>

<script>
import axios from "axios"
import { AlertTriangleIcon } from "vue-feather-icons"
export default {
  auth: false,
  components: {
    AlertTriangleIcon
  },
  head: {
    title: "アカウント有効化"
  },
  methods: {
    activate() {
      axios
        .post(
          `${this.$config.WIKI_API_URL}/rest-auth/registration/verify-email/`,
          {
            key: this.$route.query.key
          }
        )
        .then((res) => {
          this.$toast.success("アカウント有効化に成功しました")
          this.$router.push("/signin")
          return res
        })
        .catch((err) => {
          this.$toast.error(err)
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
.alert-message {
  background: var(--color-danger);
  color: black;
  padding: 0.5em;
}
</style>
