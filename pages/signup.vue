<template>
  <v-main>
    <v-container class="fill-height">
      <v-card outlined class="mx-auto" width="500px">
        <!-- ここであとで京大wikiのロゴなど入れたい -->
        <v-card-title id="title" class="py-5">
          <KupediaLogo />
        </v-card-title>
        <v-card-text class="px-6">
          <v-form class="mx-8 my-4">
            <v-text-field
              v-model="credentials.email"
              :rules="rules.email"
              type="email"
              placeholder="メールアドレス *"
              filled
              dense
              rounded
              autofocus
              required
            />
            <v-text-field
              v-model="credentials.password"
              :rules="rules.password"
              type="password"
              placeholder="パスワード *"
              filled
              dense
              rounded
              reqired
            />
            <v-text-field
              v-model="credentials.password_confirmation"
              :rules="rules.password_confirmation"
              type="password"
              placeholder="パスワード確認 *"
              filled
              dense
              rounded
              reqired
            />
          </v-form>
          <h5 align="center">
            <div>
              アカウント作成により
              <nuxt-link :to="`terms/`"> 利用規約 </nuxt-link>
              に同意したものとみなされます
            </div>
          </h5>
          <v-card-actions class="mx-7 my-2">
            <v-btn color="primary" depressed block large @click="signup">
              <h4>アカウント作成</h4>
            </v-btn>
          </v-card-actions>
          <div align="center">
            <h5>
              <div>
                パスワードをお忘れの方は
                <nuxt-link to="/reset_password"> こちら </nuxt-link>から
              </div>
            </h5>
            <h5>
              <div>
                アカウントをすでにお持ちの方は
                <nuxt-link to="/signin"> こちら </nuxt-link>から
              </div>
            </h5>
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
  name: "SignupForm",
  data: () => ({
    valid: false,
    credentials: {
      email: "",
      password: "",
      password_confirmation: "",
      confirm_success_url: "https://wiki-nuxt.herokuapp.com/confirm_success",
    },
    rules: {
      email: [
        (v) =>
          /^.+@st.kyoto-u.ac.jp$/.test(v) ||
          "学生用メール @st.kyoto-u.ac.jp を入力してください",
      ],
      password: [
        (v) => !!v || "パスワードを入力してください",
        (v) => v.length > 7 || "8文字以上",
      ],
      password_confirmation: [
        (v) => !!v || "パスワードを入力してください",
        (v) => v.length > 7 || "8文字以上",
        // v => v === this.cresidentials.password
      ],
    },
  }),
  methods: {
    signup() {
      if (this.credentials.password != this.credentials.password_confirmation) {
        Swal.fire({
          text: "パスワードが一致しません",
          showConfirmButton: false,
          showCloseButton: false,
          timer: 3000,
        })
        return
      }
      axios
        .post(
          process.env.WIKI_API_URL + "/user/", //環境変数呼び出し
          this.credentials
        )
        .then((res) => {
          return res
          //router.push()←リダイレクト
        })
        .catch((e) => {
          Swal.fire({
            text: "登録に失敗しました",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000,
          })
        })
    },
  },
}
</script>
<style scoped>
#title {
  font-size: 0.9em;
}
</style>
