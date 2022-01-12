<template>
  <div class="fixed-page">
    <h1>利用登録</h1>
    <form @submit.prevent="userSignUp">
      <label for="kumoi-email" class="label-gray"
        >メールアドレス<span class="label-gray-small"
          >KUMOIアドレス
        </span></label
      >
      <input
        id="kumoi-email"
        v-model="credentials.email"
        type="email"
        class="input-gray"
        pattern=".+@st.kyoto-u.ac.jp"
        placeholder="@st.kyoto-u.ac.jp"
        required
      />

      <label for="password1" class="label-gray"
        >パスワード<span class="label-gray-small">8文字以上</span></label
      >
      <input
        id="password1"
        v-model="credentials.password1"
        class="input-gray"
        type="password"
        minlength="8"
        required
      />

      <label for="password2" class="label-gray"
        >パスワード確認<span class="label-gray-small">8文字以上</span></label
      >
      <input
        id="password2"
        v-model="credentials.password2"
        class="input-gray"
        type="password"
        minlength="8"
        required
      />

      <p class="term-message">
        アカウント作成により<NuxtLink
          to="/terms"
          target="”_blank”"
          class="link-underline"
          >利用規約</NuxtLink
        >に同意したものとみなされます
      </p>

      <button type="submit" class="button-submit">アカウント作成</button>
    </form>
  </div>
</template>
<script>
import axios from "axios"
export default {
  auth: false,
  data: () => ({
    credentials: {
      email: "",
      password1: "",
      password2: ""
    }
  }),
  head: {
    title: "アカウント作成"
  },
  methods: {
    userSignUp() {
      if (this.credentials.password1 !== this.credentials.password2) {
        this.$toast.error("パスワードが一致しません")
        return
      }
      this.$toast.info("処理中...少々お待ちください")
      axios
        .post(`${this.$config.WIKI_API_URL}/rest-auth/registration/`, {
          email: this.credentials.email,
          password1: this.credentials.password1,
          password2: this.credentials.password2
        })
        .then((res) => {
          this.$toast.clear()
          this.$toast.success(
            "メールアドレスに認証URLを送信しました　認証を完了させてください"
          )
          this.$router.push("/signin")
          return res
        })
        .catch((err) => {
          this.$toast.clear()
          if (err.response.data.email !== null) {
            this.$toast.error(err.response.data.email)
          }
          if (err.response.data.password !== null) {
            this.$toast.error(err.response.data.password)
          }
          if (
            err.response.data.email !== null &&
            err.response.data.password !== null
          ) {
            this.$toast.error("登録に失敗しました")
            console.log(err.response)
          }
        })
    }
  }
}
</script>

<style scoped>
.term-message {
  font-size: 0.8em;
}

.button-submit {
  background: var(--color-accent);
}
form:invalid .button-submit {
  background: lightgray;
}
</style>
