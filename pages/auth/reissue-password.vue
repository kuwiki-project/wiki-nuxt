<template>
  <!-- パスワード再発行メールからアクセスできるパスワード更新用の画面-->
  <div class="scroll-page">
    <h1>
      パスワード変更
    </h1>
    <form @submit.prevent="reissuePassword">
      <label for="password1" class="label">パスワード<span class="form-message">8文字以上</span></label>
      <input id="password1" v-model="credentials.password1" class="input" type="password" minlength="8" required />
    
      <label for="password2" class="label">パスワード確認<span class="form-message">8文字以上</span></label>
      <input id="password2" v-model="credentials.password2" class="input" type="password" minlength="8" required />

      <button class="submit-button">
        パスワードを更新する
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
      email: "example@st.kyoto-u.ac.jp",
      password1: "",
      password2: ""
    },
    valid: false
  }),
   head: {
    title: "パスワード再発行"
  },
  mounted() {
    this.credentials.email = this.$route.query.email
  },
  methods: {
    reissuePasssword() {
      axios
        .post(
          `${this.$config.WIKI_API_URL}/rest-auth/password/reset/confirm/`,
          {
            uid: this.$route.query.uid,
            token: this.$route.query.token,
            new_password1: this.credentials.password1,
            new_password2: this.credentials.password2
          }
        )
        .then((res) => {
          this.$toast.success("パスワードを変更しました．新しいパスワードでログインしてください")
          this.$router.push("/signin")
          return res
        })
        .catch((err) => {
          this.$toast.error("エラーが発生しました")
          console.log(err)
        })
    }}}
</script>
<style scoped>
.submit-button {
  display: block;
  height: 2em;
  width: 100%;
  border-radius: 0.4em;
  border: none;
  background-color: cornflowerblue;
  color: white;
  margin: 1em 0;
}
form:invalid .submit-button {
  cursor: not-allowed;
  border: none;
  background-color: lightsteelblue;
}
.form-message{
  font-size: 0.8em;
  margin: 0 1em;
}
</style>