<template>
  <v-main>
    <v-container class="fill-height">
      <v-card class="mx-auto" width="500px" elevation="0" align="center">
        <v-img width="80" class="mx-auto mt-4" src="/kiwi.svg" />
        <v-card-text class="px-6">
          <v-form ref="credentials" v-model="valid" class="mx-8 my-4">
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
                />
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
                />
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
                />
              </template>
            </v-text-field>

            <v-btn
              color="primary"
              :disabled="!valid || !allEntered"
              depressed
              block
              large
              class="my-2"
              @click="signup"
            >
              アカウント作成
            </v-btn>
          </v-form>

          <div class="my-1 text-caption">
            アカウントをすでにお持ちの方は
            <NuxtLink to="/signin">
              こちら
            </NuxtLink>
            から
          </div>
          <div class="my-1 text-caption">
            パスワードをお忘れの方は
            <NuxtLink to="/reset_password">
              こちら
            </NuxtLink>
            から
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>
<script>
import axios from "axios"
import Swal from "sweetalert2"
export default {
  name: "SignupForm",
  auth: false,
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
      return [(v) => Boolean(v) || "必須", (v) => v.length > 7 || "8文字以上"]
    },
    passwordConfirmationRules() {
      return [
        (v) => Boolean(v) || "必須",
        (v) => v === this.credentials.password || "パスワードが合致しません",
      ]
    },
    allEntered() {
      return !(
        this.credentials.email === "" ||
        this.credentials.password === "" ||
        this.credentials.password_confirmation === "" ||
        this.checkbox === false
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
      return Math.min(100, this.credentials.password.length * 10)
    },
    passwordColor() {
      return ["secondary", "warning", "primary"][
        Math.floor(this.passwordProgress / 40)
      ]
    },
    passwordConfirmationProgress() {
      return Math.min(100, this.credentials.password_confirmation.length * 10)
    },
    passwordConfirmationColor() {
      return ["secondary", "warning", "primary"][
        Math.min(1, Math.floor(this.passwordConfirmationProgress / 80)) +
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
      Swal.fire({
        title: "お知らせ",
        text: "処理が終了し、メッセージが表示されるまでお待ちください。",
        showConfirmButton: false,
        showCloseButton: false,
        timer: 3000,
      })
      axios
        .post(this.$config.WIKI_API_URL + "/rest-auth/registration/", {
          email: this.credentials.email,
          password1: this.credentials.password,
          password2: this.credentials.password_confirmation,
        })
        .then((res) => {
          Swal.fire({
            title: "お知らせ",
            text:
              "メールアドレスに認証URLを送信しました。認証を完了させてください。",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000,
          })
          this.$router.push("/signin")
          return res
        })
        .catch((e) => {
          if (e.response.data.username != null) {
            Swal.fire({
              title: "Error",
              text: e.response.data.username,
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000,
            })
          } else if (e.response.data.email != null) {
            Swal.fire({
              title: "Error",
              text: e.response.data.email,
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000,
            })
          } else if (e.response.data.password != null) {
            Swal.fire({
              title: "Error",
              text: e.response.data.password,
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000,
            })
          } else {
            Swal.fire({
              title: "Error",
              text: "登録に失敗しました",
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000,
            })
          }
        })
    },
  },
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: var(--v-info-base);
}
</style>
