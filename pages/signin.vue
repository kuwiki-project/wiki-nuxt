<template>
    <v-app id="signin">
      <v-dialog v-model="dialog" persistent width="310px">
        <v-card>
          <!-- ここであとで京大wikiのロゴなど入れたい -->
          <v-card-title></v-card-title>
          <v-card-text class="px-6">
            <v-form class="mx-6">
              <v-text-field
                v-model="credentials.email"
                :rules="rules.email"
                placeholder="email"
                autofocus
                required
              ></v-text-field>
              <v-text-field
                v-model="credentials.password"
                :rules="rules.password"
                :type="'password'"
                placeholder="password"
                required
              ></v-text-field>
            </v-form>
            <v-card-actions class="mx-3">
              <v-btn color="primary" depressed block @click="login">ログイン</v-btn>
            </v-card-actions>
            <div class='mx-6 mt-3'>アカウント作成は<nuxt-link to="/signup">こちら</nuxt-link>から</div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-app>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import router from "../.nuxt/router";
export default {
  name: 'SigninForm',
  data: () => ({
    dialog: true,
    valid: false,
    credentials: {
      email:'',
      password:'',
    },
    rules: {
      email: [
        v => !!v || "ユーザー名を入力してください",
        v => /^.+@st.kyoto-u.ac.jp$/.test(v) || "学生用メール @st.kyoto-u.ac.jp"
      ],
      password: [v => !!v || "パスワードを入力してください"]
    }
  }),
  methods: {
    login() {
      axios
        .post(
          // "http://localhost:3000/auth/sign_in",
          "https://wiki-rails-api.herokuapp.com/auth/sign_in/",
          this.credentials
        )
        .then(res => {
          this.$store.dispatch("setLoginInfo", res.data);
          //router.push()←リダイレクト
        })
        .catch(e => {
          Swal.fire({
            text: "メールアドレスまたはパスワードまたは両方が違います",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000
          });
        });
      }
    }
  };
</script>
