<template>
  <!-- パスワード再発行メールの送信先を入力する画面-->
  <div class="narrow-scroll-page">
    <h1>パスワードを忘れた場合</h1>
    <p>
      現在のパスワードをリセットして，新たにパスワードを発行する手続きを行います。<br />
      ご登録されているメールアドレスを入力してください。ご登録のメールアドレス宛にパスワード再発行用のURLを記載したメールを送信します。
    </p>
    <form class="send-reset-email-form" @submit.prevent="sendResetEmail">
      <input
        id="kumoi-email"
        v-model="credentials.email"
        type="email"
        pattern=".+@st.kyoto-u.ac.jp"
        placeholder="@st.kyoto-u.ac.jp"
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
    title: "パスワードを忘れた場合"
  },
  methods: {
    sendResetEmail() {
      axios
        .post(`${this.$config.WIKI_API_URL}/password/reset/`, {
          email: this.credentials.email
        })
        .then((res) => {
          this.$toast.success("パスワード変更メールを送信しました")
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
