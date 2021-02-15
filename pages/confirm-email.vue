<template>
  <v-main>
    <v-container>
      <v-row justify="center">
        <v-col cols="10" sm="8">
          <v-card flat>
            <v-card-title>メールアドレス認証</v-card-title>
            <v-card-text>
              <v-alert type="error" border="left" dark dense>
                <div class="text-body-2">
                  受信したメールに身に覚えのない方は無視してください
                </div>
              </v-alert>
              京大wikiへの利用登録を完了するため，以下のボタンを押してアカウントを有効化してください
            </v-card-text>

            <v-card-actions class="mx-2 px-5">
              <v-btn color="primary" depressed block large @click="activate()">
                アカウント有効化
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Swal from "sweetalert2"
import axios from "axios"
export default {
  name: "ConfirmEmail",
  auth: false,
  methods: {
    activate() {
      axios
        .post(
          `${this.$config.WIKI_API_URL}/rest-auth/registration/verify-email/`,
          {
            key: this.$route.query.key
          }
        )
        .then((res) => {
          Swal.fire({
            text: "アカウント有効化に成功しました",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000
          })
          this.$router.push("/signin")
          return res
        })
        .catch((e) => {
          Swal.fire({
            title: "Error",
            text: "エラーが発生しました",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000
          })
        })
    }
  }
}
</script>
