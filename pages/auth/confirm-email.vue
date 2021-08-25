<template>
  <div class="scroll-page">
    <h1>メールアドレス認証</h1>
    <p>
      京大wikiへの利用登録を完了するため，以下のボタンを押してアカウントを有効化してください
    </p>
    <div class="alert">
      <alert-triangle-icon size="1.5x" class="alert-icon"></alert-triangle-icon>
      受信したメールに身に覚えのない方はこのページを閉じてください
    </div>
    <button class="white-link-button">
      アカウント有効化
    </button>
  </div>
</template>

<script>
import axios from "axios"
import { AlertTriangleIcon } from 'vue-feather-icons'
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
          this.$toast.success('アカウント有効化に成功しました')
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
<style>
.alert{
  display: flex;
  margin: 1em 0;
}
.alert-icon{
  margin: 0 0.4em 0 0;
}
</style>