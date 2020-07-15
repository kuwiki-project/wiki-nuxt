<template>
    <v-app id="signup">
      <v-container class="fill-height">
        <v-card outlined class="mx-auto" width="500px">
          <!-- ここであとで京大wikiのロゴなど入れたい -->
          <v-card-title></v-card-title>
          <v-card-text class="pa-6">
            <v-form class="mx-8 my-2">
              <v-text-field
                v-model="credentials.email"
                :rules="rules.email"
                type="email"
                placeholder="メールアドレス *"
                filled dense rounded
                autofocus
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
                :rules="rules.password_confirmation"
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
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import router from "../.nuxt/router";
export default {
  name: 'SignupForm',
  data: () => ({
    valid: false,
    credentials: {
      email: "",
      password: "",
      password_confirmation: "",
      confirm_success_url:"http://localhost:3000/"
    },
    rules: {
      email: [
        v =>
          /^.+@st.kyoto-u.ac.jp$/.test(v) ||
          "学生用メール @st.kyoto-u.ac.jp を入力してください"
      ],
      password: [
        v => !!v || "パスワードを入力してください",
        v => v.length > 7 || "8文字以上",
      ],
      password_confirmation: [
        v => !!v || "パスワードを入力してください",
        v => v.length > 7 || "8文字以上",
        // v => v === this.cresidentials.password
      ],
    }
  }),
  methods: {
    signup() {
      if(this.credentials.password != this.credentials.password_confirmation){
        Swal.fire({
            text: "パスワードが一致しません",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000
          });
          return;
      }
      axios
        .post(
          process.env.WIKI_API_URL + '/user/', //環境変数呼び出し
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
