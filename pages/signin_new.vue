<template>
  <v-container grid-list-md>
    <v-layout row wrap align-center justify-center fill-height>
      <v-flex xs12 sm8 lg4 md5>
        <v-card class="login-card">
          <v-card-title>
            <span class="headline">京大Wikiログイン</span>
          </v-card-title>
          <v-spacer />
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-container>
                <v-text-field
                  v-model="credentials.email"
                  :counter="100"
                  label="メールアドレス"
                  :rules="rules.email"
                  maxlength="100"
                  required
                  autofocus
                />
                <v-text-field
                  type="password"
                  v-model="credentials.password"
                  :counter="100"
                  label="パスワード"
                  :rules="rules.password"
                  maxlength="100"
                  required
                />
              </v-container>
              <v-btn class="blue--text" :disabled="!valid" @click="login">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import router from "../.nuxt/router";
export default {
  data: () => ({
    valid: false,
    credentials: {},
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

