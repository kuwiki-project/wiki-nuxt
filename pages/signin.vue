<template>
  <v-main>
    <v-container class="fill-height">
      <v-card outlined width="310px" class="mx-auto" align="center">
        <v-img width="80" class="mt-10" src="/kiwi.svg"></v-img>
        <v-card-text class="px-6">
          <v-form
            ref="credentials"
            v-model="valid"
            class="mx-7"
            lazy-validation
          >
            <v-text-field
              v-model="credentials.email"
              :rules="rules.email"
              placeholder="email"
              type="email"
              required
              filled
              dense
              rounded
            ></v-text-field>
            <v-text-field
              v-model="credentials.password"
              :rules="rules.password"
              placeholder="password"
              type="password"
              required
              filled
              dense
              rounded
            ></v-text-field>
            <v-card-actions class="">
              <v-btn
                color="primary"
                :disabled="!valid || !allEntered"
                depressed
                block
                @click="login"
              >
                <h4>ログイン</h4>
              </v-btn>
            </v-card-actions>
          </v-form>
          <div class="mx-6 my-1">
            <h5 class="my-1">
              アカウント作成は<NuxtLink to="/signup"> こちら </NuxtLink>から
            </h5>
            <h5 class="my-1">
              パスワード再発行は<NuxtLink to="/reset_password"> こちら </NuxtLink>から
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
        (v) => !!v || "",
        (v) =>
          /^.+@st.kyoto-u.ac.jp$/.test(v) || "学生用メール @st.kyoto-u.ac.jp",
      ],
      password: [(v) => !!v || ""],
    },
  }),
  computed: {
    allEntered: function () {
      if (this.credentials.email == "" || this.credentials.password == "") {
        return false
      } else {
        return true
      }
    },
  },
  methods: {
    login() {
      axios
        .post(
          this.$config.WIKI_API_URL + "/user/sign_in/", //環境変数呼び出し もしだめなら this.$config.wikiApiUrl
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
<style scoped>
.haba {
  width: 200px;
}
</style>
