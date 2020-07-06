<template>
  <div id="app">
    <v-app id="inspire">
      <v-container class="fill-height">
        <v-card outlined class="mx-auto" width="300px">
          <v-card-title>
            <span class="headline">京大Wikiログイン</span>
          </v-card-title>
          <v-card-text class="pa-6">
            <v-form class="mx-6 my-2">
              <v-text-field
                v-model="credentials.email"
                :rules="rules.email"
                label="email"
                autofocus
                required
              ></v-text-field>
              <v-text-field
                v-model="credentials.password"
                :rules="rules.password"
                :type="'password'"
                label="password"
                reqired
              ></v-text-field>
            </v-form>
            <v-card-actions class="mx-3 my-2">
              <v-btn color="primary" depressed block @click="login">ログイン</v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import router from "../.nuxt/router";
export default {
  data: () => ({
    valid: false,
    credentials: {
      email:'',
      password:'',
    },
    rules: {
      email: [
        v => !!v || "ユーザー名は必須です",
        v => /^.+@st.kyoto-u.ac.jp$/.test(v) || "学生用メール @st.kyoto-u.ac.jp"
      ],
      password: [v => !!v || "パスワードは必須です"]
    }
  }),
  methods: {
    login() {
      axios
        .post(
          "https://wiki-rails-api.herokuapp.com/auth/sign_in/",
          this.credentials
        )
        .then(res => {
          this.$store.dispatch("setLoginInfo", res.data);
          //router.push()←リダイレクト
        })
        .catch(e => {
          Swal.fire({
            title: "Error",
            text: "メールアドレスまたはパスワード、または両方が間違っています",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000
          });
        });
    }
  }
};
</script>

