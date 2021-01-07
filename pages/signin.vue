<template>
  <v-main>
    <v-container>
      <v-card outlined class="mx-auto" width="310px">
        <KupediaLogo />
        <v-card-text class="px-6">
          <v-form ref="form" v-model="valid" lazy-validation class="mx-6">
            <v-text-field
              v-model="credentials.email"
              :rules="rules.email"
              placeholder="email"
              :type='email'
              autofocus
              required
            />
            <v-text-field
              v-model="credentials.password"
              :rules="rules.password"
              :type="'password'"
              placeholder="password"
              required
            />
          </v-form>
          <v-card-actions class="mx-3">
            <v-btn color="primary" :disabled="!valid" depressed block @click="login">
              <h4>ログイン</h4>
            </v-btn>
          </v-card-actions>
          <div class="mx-6 mt-3">
            <h5>アカウント作成は <nuxt-link to="/signup">こちら</nuxt-link> から</h5>
          </div>
          <div class="mx-6 mt-3">
            <h5>パスワード再発行は <nuxt-link to="/reset_password">こちら</nuxt-link> から</h5>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>
<script>
import axios from "axios"
import Swal from "sweetalert2"
import router from "../.nuxt/router"
export default {
  name: "SigninForm",
  data: () => ({
    dialog: true,
    valid: false,
    credentials: {
      email: "",
      password: "",
    },
    rules: {
      email: [
        (v) => !!v || "メールアドレスを入力してください",
        (v) =>
          /^.+@st.kyoto-u.ac.jp$/.test(v) || "学生用メール @st.kyoto-u.ac.jp",
      ],
      password: [(v) => !!v || "パスワードを入力してください"],
    },
  }),
  methods: {
    login() {
      axios
        .post(
          process.env.WIKI_API_URL + "/user/sign_in/", //環境変数呼び出し もしだめなら this.$config.wikiApiUrl
          this.credentials
        )
        .then((res) => {
          this.$store.dispatch("setLoginInfo", res.data)
          //router.push()←リダイレクト
        })
        .catch((e) => {
          Swal.fire({
            text: e.response.data.errors,
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000,
          })
        })
    },
  },
}
</script>
