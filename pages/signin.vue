<template>
  <div class="signin-page">
    <div class="white-card">
      <form class="signin-form" @submit.prevent="userLogin">
        <iconKiwi class="icon-kiwi" />
        <div class="title-kuwiki">京大wiki</div>
        
        <label for="kumoi-email" class="label">メールアドレス</label>
        <input
          id="kumoi-email"
          v-model="credentials.email"
          class="input"
          type="email"
          pattern=".+@st.kyoto-u.ac.jp"
          placeholder="@st.kyoto-u.ac.jp"
          required
        />

        <label for="password" class="label">パスワード</label>
        <input
          id="password"
          v-model="credentials.password"
          class="input"
          type="password"
          minlength="8"
          required
        />
       
        <button type="submit" class="submit-button">ログイン</button>
      </form>
      <div class="mataha">または</div>
    
      <div class="link-buttons">
        <NuxtLink to="/auth/signup" class="link-button">
          アカウントを作成する 
          <arrow-right-icon class="arrow-icon" size="1.2x"></arrow-right-icon>
        </NuxtLink>
        <NuxtLink to="/auth/reset-password" class="link-button">
          パスワードを忘れた
          <arrow-right-icon class="arrow-icon" size="1.2x"></arrow-right-icon>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>

import { ArrowRightIcon } from 'vue-feather-icons'
export default {
  components: {
    ArrowRightIcon
  },
  layout: 'noheader',
  auth: false,
  data: () => ({
    
    credentials: {
      email: "",
      password: ""
    }
  }),
  head: {
    title: "ログイン"
  },
  methods: {
    userLogin() {
      this.$auth
        .loginWith("local", {
          data: {
            email: this.credentials.email,
            password: this.credentials.password
          }
        })
        .then((res) => {
          console.log(res)
          this.$toast.success("ログインしました")
          this.$router.push("/")
        
        })
        .catch((err) => {
          console.log(err)
           this.$toast.error(err.response.data.non_field_errors)
        })
    }
  }
}
</script>

<style scoped>
.icon-kiwi{
  height: 4em;
  width: 4em;
  margin: 0 auto;
  display: block;
  color: var(--color-accent);
}

.title-kuwiki{
  text-align: center;
  font-weight: 300;
  font-size: 1.4em;
  margin: 0 0 1em 0;
}
.signin-page {
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #ddd6f3, #faaca8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.white-card{
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em 0;
  width: 85%;
}
.signin-form {
  width: 90%;
  max-width: 25em;
}
.submit-button {
  display: block;
  border-radius: 1em;
  height: 2em;
  width: 80%;
  max-width: 12em;
  border: none;
  background:#faaca8;
  color: white;
  margin: 1.5em auto;
}

form:invalid .submit-button {
  cursor: not-allowed;
  border: none;
  outline: none;
  background: lightgray;
}
.mataha{
  display: flex;
  align-items: center;
  margin: 0.2em 0;
  display: flex;
  width: 40%;
  font-size: 0.85em;
}
.mataha:before, .mataha:after {
  border-top: 1px solid;
  content: "";
  flex: 1; /* 線の長さ */
}
.mataha:before {
  margin-right: 0.5em; /* 文字の右隣 */
}
.mataha:after {
  margin-left: 0.5em; /* 文字の左隣 */
}

.link-buttons {
  text-align: center;
}
.link-button {
  color: inherit;
  display: block;
  text-decoration: none;
  box-sizing: border-box;
  padding: 0.4em 0;
  font-size: 0.85em;
}
.arrow-icon{
  vertical-align: text-bottom;
}
</style>
