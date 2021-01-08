<template>
  <v-main>
    <v-container class="fill-height">
      <v-card outlined width="310px" class="mx-auto">
        <v-card-text class="px-6 text-center">
          <v-img width="150" class="mx-auto my-3" src="/kiwi.svg"></v-img>
          <v-form v-model="valid" lazy-validation>
            <div class="haba mx-auto">
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
            </div>
            <v-card-actions>
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
          </div>
          <div class="mx-6 my-1">
            <h5>
              アカウント作成は
              <NuxtLink to="/signup">
                こちら
              </NuxtLink> から
            </h5>
          </div>
          <div class="mx-6 my-1">
            <h5>
              パスワード再発行は
              <NuxtLink to="/reset_password">
                こちら
              </NuxtLink> から
            </h5>
          </div>
        </v-card-text>
      </v-card>
      </v-row>
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
<style scoped>
 .haba{
   width: 200px;
 }
</style>
