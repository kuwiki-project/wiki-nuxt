<template>
  <div id="app">
    <v-app id="inspire">
      <v-container class="fill-height">
        <v-card outlined class="mx-auto" width="500px">
          <v-card-title>
            <span class="headline"></span>
          </v-card-title>
          <v-card-text class="pa-6">
            <v-form class="mx-8 my-2">
              <v-text-field
                v-model="credentials.email"
                :rules="rules.email"
                type="email"
                placeholder="メールアドレス *"
                filled dense rounded
                autofocus
              ></v-text-field>
              <v-text-field
                v-model="credentials.name"
                :rules="rules.name"
                type="text"
                placeholder="ユーザー名 *"
                filled dense rounded
                required
              ></v-text-field>
              <v-text-field
                v-model="credentials.password"
                :rules="rules.password"
                type="password"
                placeholder="パスワード *"
                filled dense rounded
                reqired
              ></v-text-field>
              <v-text-field
                v-model="credentials.password_confirmation"
                :rules="rules.password"
                type="password"
                placeholder="パスワード確認 *"
                filled dense rounded
                reqired
              ></v-text-field>
            </v-form>
            <v-card-actions class="mx-7 my-2">
              <v-btn color="primary" depressed block large @click="signup">アカウント作成</v-btn>
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
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    },
    rules: {
      name: [
        v => !!v || "ユーザー名を入力してください",
        v => /^\w+$/.test(v) || "英数字とアンダーバーが使えます",
        v => v.length > 3 || "4文字以上",
        v => v.length <= 10 || "10文字以下"
      ],
      email: [
        v =>
          /^.+@st.kyoto-u.ac.jp$/.test(v) ||
          "学生用メール @st.kyoto-u.ac.jp を入力してください"
      ],
      password: [
        v => !!v || "パスワードを入力してください",
        v => v.length > 7 || "8文字以上"
      ],
    }
  }),
  methods: {
    signup() {
      if(this.credentials.password!=this.credentials.password_confirmation){
        Swal.fire({
            title: "Error",
            text: "パスワードが一致しません",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000
          });
          return;
      }
      axios
        .post(
          "https://wiki-rails-api.herokuapp.com/auth/sign_up/",
          this.credentials
        )
        .then(res => {
          return res;
          //router.push()←リダイレクト
        })
        .catch(e => {
          Swal.fire({
            text: "登録に失敗しました",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000
          });
        });
    }
  }
};
</script>
