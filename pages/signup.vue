<template>
  <v-main>
    <v-container class="fill-height">
      <v-card outlined class="mx-auto" width="500px">
        <v-img width="150" class="mx-auto my-3" src="/kiwi.svg"></v-img>
        <v-card-text class="px-6">
          <v-form
            ref="credentials"
            v-model="valid"
            lazy-validation
            class="mx-8 my-4"
          >
            <v-text-field
              v-model="credentials.email"
              :rules="rules.email"
              type="email"
              placeholder="メールアドレス"
              required
            />
            <v-text-field
              v-model="credentials.password"
              :rules="rules.password"
              type="password"
              placeholder="パスワード"
              required
            >
          </v-text-field>
            <v-text-field
              v-model="credentials.password_confirmation"
              :rules="rules.password_confirmation"
              type="password"
              placeholder="パスワード再入力"
              loading
            >
            <template v-slot:progress>
            <v-progress-linear
            :value="progress"
            :color="color"
            absolute
            height="3"
        ></v-progress-linear>
        </template>
          </v-text-field>
          </v-form>
          <h5 align="center">
            <div>
              アカウント作成により
              <NuxtLink :to="`terms/`"> 利用規約 </NuxtLink>
              に同意したものとみなされます
            </div>
          </h5>
          <v-card-actions class="mx-7 my-2">
            <v-btn
              color="primary"
              :disabled="!valid || !allEntered"
              depressed
              block
              large
              @click="signup"
            >
              <h4>アカウント作成</h4>
            </v-btn>
          </v-card-actions>
          <div align="center">
            <h5>
              <div>
                パスワードをお忘れの方は<NuxtLink to="/reset_password">
                  こちら </NuxtLink
                >から
              </div>
            </h5>
            <h5>
              <div>
                アカウントをすでにお持ちの方は<NuxtLink to="/signin">
                  こちら </NuxtLink
                >から
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
    value: false,
    credentials: {
      email: "",
      password: "",
      password_confirmation: "",
      confirm_success_url: process.env.WIKI_CONFIRM_SUCCESS_URL,
    },
    rules: {
      email: [
        (v) =>
          /^.+@st.kyoto-u.ac.jp$/.test(v) ||
          "学生用メール @st.kyoto-u.ac.jp を入力してください",
      ],
      password: [
        (v) => !!v || "必須",
        (v) => v.length > 7 || "8文字以上",
      ],
      password_confirmation: [
        (v) => !!v || "必須",
        (v) => v.length > 7 || "8文字以上",
        // v => v === this.cresidentials.password
      ],
    },
  }),
  computed: {
    allEntered: function () {
      if (
        this.credentials.email == "" ||
        this.credentials.password == "" ||
        this.credentials.password_confirmation == ""
      ) {
        return false
      } else {
        return true
      }
    },
    progress: function () {
        return Math.min(100, this.credentials.password_confirmation.length * 10)
      },
    color: function () {
        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
      },
    },
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
