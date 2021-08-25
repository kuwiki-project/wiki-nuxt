<template>
  <div class="one-page">
    <h1>利用登録</h1>
    <form class="signup-form" @submit.prevent="userSignUp">
      <label for="kumoi-email" class="label">メールアドレス<span class="form-message">KUMOIアドレス
      </span></label>
      <input
        id="kumoi-email"
        v-model="credentials.email"
        type="email"
        class="input"
        pattern=".+@st.kyoto-u.ac.jp"
        placeholder="@st.kyoto-u.ac.jp"
        required
      />
      
      <label for="password1" class="label">パスワード<span class="form-message">8文字以上</span></label>
      <input id="password1" v-model="credentials.password1" class="input" type="password" minlength="8" required />


      <label for="password2" class="label">パスワード確認<span class="form-message">8文字以上</span></label>
      <input id="password2" v-model="credentials.password2" class="input" type="password" minlength="8" required />
     
    
      <p class="term-message">アカウント作成により<NuxtLink to="/terms" target="”_blank”" class="link-text">利用規約</NuxtLink>に同意したものとみなされます</p>

      <button type="submit" class="submit-button">
        アカウント作成
      </button>
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
        this.$toast.error('パスワードが一致しません')
        return
      }
      this.$toast.show('処理中...')
      axios
        .post(`${this.$config.WIKI_API_URL}/rest-auth/registration/`, {
          email: this.credentials.email,
          password1: this.credentials.password1,
          password2: this.credentials.password2
        })
        .then((res) => {
          this.$toast.clear()
          this.$toast.show('メールアドレスに認証URLを送信しました　認証を完了させてください')
          this.$router.push("/signin")
          return res
        })
        .catch((err) => {
          this.$toast.clear()
          if (err.response.data.email !== null) {
            this.$toast.error(err.response.data.email)
          } else if (err.response.data.password !== null) {
            this.$toast.error(err.response.data.password)
          } else {
            this.$toast.error("登録に失敗しました")
            console.log(err.response)
          }
        })
    }
  }
}
</script>

<style scoped>

.signup-form {
  width: 90%;
  max-width: 20em;
}
.form-message{
  font-size: 0.8em;
  margin: 0 1em;
}

.term-message{
  font-size: 0.8em;
}

.submit-button {
  display: block;
  border-radius: 0.4em;
  height: 2em;
  width: 100%;
  border: none;
  background:#faaca8;
  color: white;
  margin: 1.5em auto;
}
form:invalid .submit-button{
  cursor: not-allowed;
  border: none;
  background: lightgray;
}
</style>