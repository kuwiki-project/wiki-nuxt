<template>
  <v-main>
    <v-container>
      <v-row class="button" justify="center" align-content="center">
        <v-col cols="12" sm="8" md="6" lg="5" xl="3">
          <v-card>
            <v-card-title>
              アカウント有効化のために下のボタンを押してください。
            </v-card-title>
            <v-card-actions class="mx-7 my-2">
              <v-btn color="primary" depressed block large @click="activate()">
                <h4>Activate</h4>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios"
import Swal from "sweetalert2"
export default {
  name: "ConfirmEmail",
  auth: false,
  methods: {
    activate() {
      axios
        .post(
          this.$config.WIKI_API_URL + "/rest-auth/registration/verify-email/",
          {
            key: this.$route.query.key,
          }
        )
        .then((res) => {
          Swal.fire({
            title: "お知らせ",
            text: "アカウントの有効化に成功しました。ログインしてください。",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000,
          })
          this.$router.push("/signin")
          return res
        })
        .catch((e) => {
          Swal.fire({
            title: "Error",
            text: "エラーが発生しました。",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000,
          })
        })
    },
  },
}
</script>
