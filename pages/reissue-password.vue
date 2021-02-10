<template>
  <!-- パスワード再発行メールからアクセスできるパスワード再設定用の画面-->
  <v-main>
    <v-container class="fill-height">
      <v-card outlined class="mx-auto" width="500px">
        <v-card-title id="title" class="py-5">
          <img src="/kuwiki.svg" width="150" />
        </v-card-title>
        <v-card-text class="px-6">
          <v-form class="mx-8 my-4">
            <span class="mx-2 my-9">メールアドレス {{ email }}</span>
            <v-text-field
              v-model="password1"
              type="password"
              placeholder="パスワード *"
              filled
              dense
              rounded
              reqired
            />
            <v-text-field
              v-model="password2"
              type="password"
              placeholder="パスワード確認 *"
              filled
              dense
              rounded
              reqired
            />
          </v-form>
          <v-card-actions class="mx-7 my-2">
            <v-btn color="primary" depressed block large @click="reissue">
              <span class="text-button">パスワード再発行</span>
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  auth: false,
  data: () => ({
    password1: "",
    password2: "",
    email: "example@st.kyoto-u.ac.jp",
  }),
  mounted() {
    this.email = this.$route.query.email;
  },
  methods: {
    reissue() {
      axios
        .post(
          this.$config.WIKI_API_URL + "/rest-auth/password/reset/confirm/",
          {
            uid: this.$route.query.uid,
            token: this.$route.query.token,
            new_password1: this.password1,
            new_password2: this.password2,
          }
        )
        .then((res) => {
          Swal.fire({
            title: "お知らせ",
            text: "パスワードのリセットに成功しました。",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000,
          });
          this.$router.push("/signin");
          return res;
        })
        .catch((e) => {
          Swal.fire({
            title: "Error",
            text: "エラーが発生しました。",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000,
          });
        });
    },
  },
};
</script>