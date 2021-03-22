<template>
  <v-main>
    <v-container class="fill-height">
      <v-card class="mx-auto" width="500px" elevation="0" align="center">
        <v-card-text class="px-6">
          <v-form ref="credentials" v-model="valid" class="mx-8 my-4">
            <InputSignUpEmail v-model="email" />
            <InputSignUpPassword1 v-model="password1" />
            <InputSignUpPassword2 v-model="password2" />
            <v-dialog v-model="dialog" width="600px">
              <template #activator="{ on, attrs }">
                <div class="text-caption">
                  アカウント作成により
                  <a color="primary" dark text v-bind="attrs" v-on="on">
                    利用規約
                  </a>
                  に同意したものとみなされます
                </div>
              </template>
              <v-card>
                <div>
                  <DocsTerms />
                </div>
              </v-card>
            </v-dialog>

            <v-btn
              color="primary"
              :disabled="!valid"
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
            <NuxtLink to="/signin"> こちら </NuxtLink>
            から
          </div>
          <div class="my-1 text-caption">
            パスワードをお忘れの方は
            <NuxtLink to="/reset-password"> こちら </NuxtLink>
            から
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>
<script>
import Swal from "sweetalert2"
import axios from "axios"
export default {
  auth: false,
  data: () => ({
    valid: false,
    value: false,
    email: "",
    password1: "",
    password2: ""
  }),
  methods: {
    signup() {
      if (this.password1 !== this.password2) {
        Swal.fire({
          icon: "error",
          text: "パスワードが一致しません",
          showConfirmButton: false,
          showCloseButton: false,
          timer: 3000
        })
        return
      }
      Swal.fire({
        icon: "info",
        text: "処理が終了しメッセージが表示されるまでお待ちください",
        showConfirmButton: false,
        showCloseButton: false,
        timer: 3000
      })
      axios
        .post(`${this.$config.WIKI_API_URL}/rest-auth/registration/`, {
          email: this.email,
          password1: this.password1,
          password2: this.password2
        })
        .then((res) => {
          Swal.fire({
            text:
              "メールアドレスに認証URLを送信しました　認証を完了させてください",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000
          })
          this.$router.push("/signin")
          return res
        })
        .catch((e) => {
          if (e.response.data.email !== null) {
            Swal.fire({
              icon: "error",
              text: e.response.data.email,
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000
            })
          } else if (e.response.data.password !== null) {
            Swal.fire({
              icon: "error",
              text: e.response.data.password,
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000
            })
          } else {
            Swal.fire({
              icon: "error",
              text: "登録に失敗しました",
              showConfirmButton: false,
              showCloseButton: false,
              timer: 3000
            })
          }
        })
    }
  }
}
</script>
