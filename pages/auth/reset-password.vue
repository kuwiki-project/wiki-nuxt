<template>
  <!-- パスワード再発行メールの送信先を入力する画面-->
  <div class="narrow-scroll-page">
    <h1>パスワード再発行</h1>
    <StepsPwReset class="steps"></StepsPwReset>
    <p>
      現在のパスワードをリセットして，新たにパスワードを発行します。<br />
      登録しているメールアドレスを入力してください。
    </p>
    <form class="send-reset-email-form" @submit.prevent="sendResetEmail">
      <input
        id="kumoi-email"
        v-model="credentials.email"
        type="email"
        pattern=".+@st.kyoto-u.ac.jp"
        placeholder="***@st.kyoto-u.ac.jp"
        required
        class="input-gray"
      />
      <button type="submit" class="button-submit">
        パスワード再発行メールを送信
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios"
export default {
  auth: false,
  data: () => ({
    valid: false,
    credentials: {
      email: ""
    }
  }),
  head: {
    title: "パスワード再発行"
  },
  methods: {
    sendResetEmail() {
      this.$toast.info("処理中...少々お待ちください")
      axios
        .post(`${this.$config.WIKI_API_URL}/password/reset/`, {
          email: this.credentials.email
        })
        .then((res) => {
          this.$toast.clear()
          this.$toast.success("パスワード変更メールを送信しました")
          this.$router.push("/auth/email-sent-reset")
          return res
        })
        .catch((err) => {
          this.$toast.clear()
          this.$toast.error(err, { duration: 10000 })
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
.steps:deep(.step1) {
  fill: var(--color-primary);
  background-color: var(--color-primary);
  color: white;
}
</style>
