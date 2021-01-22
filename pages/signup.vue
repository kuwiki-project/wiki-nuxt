<template>
  <v-main>
    <v-container class="fill-height">
      <v-card class="mx-auto" width="500px" elevation="0" align="center">
        <v-img width="80" class="mx-auto mt-4" src="/kiwi.svg"></v-img>
        <v-card-text class="px-6">
          <v-form ref="credentials" v-model="valid" class="mx-8 my-4">
            <div>
            <mail-icon class='ma-1'></mail-icon>
            <lock-icon class='ma-1'></lock-icon>
          </div>
            <v-text-field
              v-model="credentials.email"
              :rules="emailRules"
              type="email"
              placeholder="メールアドレス"
              required
              loading
            >
              <template #progress>
                <v-progress-linear
                  :value="emailProgress"
                  :color="emailColor"
                  absolute
                  height="3"
                ></v-progress-linear>
              </template>
            </v-text-field>
            <v-text-field
              v-model="credentials.password"
              :rules="passwordRules"
              type="password"
              placeholder="パスワード"
              required
              loading
            >
              <template #progress>
                <v-progress-linear
                  :value="passwordProgress"
                  :color="passwordColor"
                  absolute
                  height="3"
                ></v-progress-linear>
              </template>
            </v-text-field>
            <v-text-field
              v-model="credentials.password_confirmation"
              :rules="passwordConfirmationRules"
              type="password"
              placeholder="パスワード再入力"
              loading
            >
              <template #progress>
                <v-progress-linear
                  :value="passwordConfirmationProgress"
                  :color="passwordConfirmationColor"
                  absolute
                  height="3"
                ></v-progress-linear>
              </template>
            </v-text-field>

            <h5 align="center">
              <div>
                アカウント作成により
                <NuxtLink :to="`terms/`"> 利用規約 </NuxtLink>
                に同意したものとみなされます
              </div>
            </h5>
            <v-card-actions class="my-2">
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
          </v-form>
          <div align="center">
            <h5>
              <div>
                アカウントをすでにお持ちの方は
                <NuxtLink to="/signin"> こちら </NuxtLink>
                から
              </div>
            </h5>
            <h5>
              <div>
                パスワードをお忘れの方は
                <NuxtLink to="/reset_password"> こちら </NuxtLink>
                から
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
import { MailIcon, LockIcon } from "vue-feather-icons"
export default {
  name: "SignupForm",
  components: {
    MailIcon,
    LockIcon,
  },
  data: () => ({
    valid: false,
    value: false,
    credentials: {
      email: "",
      password: "",
      password_confirmation: "",
    },
  }),
  computed: {
    emailRules() {
      return [
        (v) =>
          /^.+@st.kyoto-u.ac.jp$/.test(v) ||
          "学生用メール @st.kyoto-u.ac.jp を入力してください",
      ]
    },
    passwordRules() {
      return [(v) => !!v || "必須", (v) => v.length > 7 || "8文字以上"]
    },
    passwordConfirmationRules() {
      return [
        (v) => !!v || "必須",
        (v) => v === this.credentials.password || "パスワードが合致しません",
      ]
    },
    allEntered() {
      return !(
        this.credentials.email === "" ||
        this.credentials.password === "" ||
        this.credentials.password_confirmation === ""
      )
    },
    emailProgress() {
      return Math.min(100, this.credentials.email.length * 3.3)
    },
    emailColor() {
      return ["secondary", "warning", "primary"][
        Math.floor(this.emailProgress / 60) +
          Number(/^.+@st.kyoto-u.ac.jp$/.test(this.credentials.email))
      ]
    },
    passwordProgress() {
      return Math.min(100, this.credentials.password.length * 7.5)
    },
    passwordColor() {
      return ["secondary", "warning", "primary"][
        Math.floor(this.passwordProgress / 30)
      ]
    },
    passwordConfirmationProgress() {
      return Math.min(100, this.credentials.password_confirmation.length * 7.5)
    },
    passwordConfirmationColor() {
      return ["secondary", "secondary", "warning", "primary"][
        Math.floor(this.passwordConfirmationProgress / 30) +
          Number(
            this.credentials.password_confirmation !== "" &&
              this.credentials.password_confirmation ===
                this.credentials.password
          )
      ]
    },
  },
  methods: {
    signup() {
      axios
        .post(
          this.$config.WIKI_API_URL + "/user/", // 環境変数呼び出し
          this.credentials
        )
        .then((res) => {
          return res
          // router.push()←リダイレクト
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
