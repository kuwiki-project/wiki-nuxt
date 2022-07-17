<template>
  <div class="fixed-page">
    <div class="white-card">
      <iconKiwi2 class="icon-kiwi" />
      <div class="title-kuwiki">京大wiki</div>
      <form class="form-signin" @submit.prevent="userLogin">
        <label for="kumoi-email" class="label">📩 メールアドレス</label>
        <input
          id="kumoi-email"
          v-model="credentials.email"
          class="input-gray"
          type="email"
          pattern=".+@st.kyoto-u.ac.jp"
          placeholder="***@st.kyoto-u.ac.jp"
          required
        />

        <label for="password" class="label">🔑 パスワード</label>
        <input
          id="password"
          v-model="credentials.password"
          class="input-gray"
          type="password"
          minlength="8"
          required
        />

        <button type="submit" class="button-submit">ログイン</button>
      </form>
      <div class="mataha">または</div>
      <NuxtLink to="/auth/signup" class="button-link">
        アカウントを作成する
        <arrow-right-icon class="icon-with-text" size="1.2x"></arrow-right-icon>
      </NuxtLink>
      <NuxtLink to="/auth/reset-password" class="button-link">
        パスワードを忘れた
        <arrow-right-icon class="icon-with-text" size="1.2x"></arrow-right-icon>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import { ArrowRightIcon } from "vue-feather-icons"
export default {
  components: {
    ArrowRightIcon
  },
  layout: "noheader",
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
          this.$toast.clear()
          this.$toast.success("ログインしました")
          this.$router.push("/")
        })
        .catch((err) => {
          this.$toast.clear()
          this.$toast.error(err.response.data.non_field_errors, {
            duration: 10000
          })
        })
    }
  }
}
</script>
<style scoped>
.fixed-page {
  background: aliceblue;
}

.white-card {
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4em 0;
  width: 85%;
  max-width: 25em;
}

.form-signin {
  width: 90%;
  margin-top: 1em;
}

.button-submit {
  display: block;
  height: 2em;
  border-radius: 1em;
  width: 80%;
  max-width: 12em;
  border: none;
  background: var(--color-primary);
  color: white;
  margin: 1.5em auto;
}

form:invalid .button-submit {
  cursor: not-allowed;
  border: none;
  outline: none;
  background: lightgray;
}

.mataha {
  display: flex;
  align-items: center;
  margin: 0.3em 0;
  width: 40%;
  font-size: 0.85em;
}

.mataha:before {
  border-top: 1px solid;
  content: "";
  flex: 1;
  margin-right: 0.5em; /* 文字の右隣 */
}
.mataha:after {
  border-top: 1px solid;
  content: "";
  flex: 1; /* 線の長さ */
  margin-left: 0.5em; /* 文字の左隣 */
}

.button-link {
  display: block;
  color: inherit;
  text-align: center;
  margin: 0.3em auto;
  font-size: 0.85em;
}
.input-gray {
  margin: 0.5em 0 1em 0;
}

a {
  text-decoration: none;
}
</style>
