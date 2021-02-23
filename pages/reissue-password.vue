<template>
  <!-- パスワード再発行メールからアクセスできるパスワード再設定用の画面-->
  <v-main>
    <v-container class="fill-height">
      <v-card flat class="mx-auto" width="500px">
        <v-card-text class="px-6">
          <v-form v-model="valid" class="mx-8 my-4">
            <!-- <span class="mx-2 my-9">メールアドレス {{ $store.state.auth.user }}</span> -->
            <v-text-field
              v-model="password1"
              type="password"
              placeholder="パスワード *"
              filled
              dense
              rounded
              reqired
              :rules="passwordRules"
            />
            <v-text-field
              v-model="password2"
              type="password"
              placeholder="パスワード確認 *"
              filled
              dense
              rounded
              reqired
              :rules="passwordConfirmationRules"
            />
          </v-form>
          <v-card-actions class="mx-7 my-2">
            <v-btn
              color="primary"
              :disabled="!valid"
              depressed
              block
              large
              @click="reissue"
            >
              <span class="text-button">パスワード再発行</span>
            </v-btn>
          </v-card-actions>
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
    password1: "",
    password2: "",
    email: "example@st.kyoto-u.ac.jp",
    valid: false
  }),
  computed: {
    passwordRules() {
      return [(v) => Boolean(v) || "必須", (v) => v.length > 7 || "8文字以上"]
    },
    passwordConfirmationRules() {
      return [
        (v) => Boolean(v) || "必須",
        (v) => v === this.password1 || "パスワードが合致しません"
      ]
    }
  },
  mounted() {
    this.email = this.$route.query.email
  },
  methods: {
    reissue() {
      axios
        .post(
          `${this.$config.WIKI_API_URL}/rest-auth/password/reset/confirm/`,
          {
            uid: this.$route.query.uid,
            token: this.$route.query.token,
            new_password1: this.password1,
            new_password2: this.password2
          }
        )
        .then((res) => {
          Swal.fire({
            text: "パスワードを変更しました",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000
          })
          this.$router.push("/signin")
          return res
        })
        .catch((e) => {
          Swal.fire({
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
