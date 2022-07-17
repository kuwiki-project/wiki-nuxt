<template>
  <div class="fixed-page">
    <h1>新規登録</h1>
    <StepsSignUp class="signup-steps"></StepsSignUp>
    <form @submit.prevent="userSignUp">
      <label for="kumoi-email" class="label-gray">📩 メールアドレス<span class="label-gray-small">KUMOI </span></label>
      <input
        id="kumoi-email"
        v-model="credentials.email"
        type="email"
        class="input-gray"
        pattern=".+@st.kyoto-u.ac.jp"
        placeholder="***@st.kyoto-u.ac.jp"
        required
      />

      <label for="password1" class="label-gray">🔑 パスワード<span class="label-gray-small">8文字以上</span></label>
      <input
        id="password1"
        v-model="credentials.password1"
        class="input-gray"
        type="password"
        minlength="8"
        required
      />

      <label for="password2" class="label-gray">🔑 パスワード確認</label>
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
        >
          利用規約
        </NuxtLink>に同意したものとみなされます
      </p>

      <button type="submit" class="button-submit">アカウント作成</button>
    </form>
  </div>
</template>
<script>
import axios from "axios"
import StepsSignUp from "../../components/StepsSignUp.vue"
export default {
  auth: false,
  components: { StepsSignUp },
  data: () => ({
    credentials: {
      email: "",
      password1: "",
      password2: ""
    }
  }),
  head: {
    title: "新規登録"
  },
  methods: {
    userSignUp() {
      if (this.credentials.password1 !== this.credentials.password2) {
        this.$toast.clear()
        this.$toast.error("パスワードが一致しません", { duration: 10000 })
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
          this.$router.push("/auth/email-sent")
        })
        .catch((err) => {
          console.log(err.response)
          this.$toast.clear()
          if (err.response.data.email !== null) {
            this.$toast.error(err.response.data.email, { duration: 10000 })
          }
          if (err.response.data.password !== null) {
            this.$toast.error(err.response.data.password, { duration: 10000 })
          }
          if (
            err.response.data.email !== null &&
            err.response.data.password !== null
          ) {
            this.$toast.error(err.response, { duration: 10000 })
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

.signup-steps:deep(.step1) {
  fill: var(--color-primary);
  background-color: var(--color-primary);
  color: white;
}
</style>
