<template>
  <!-- パスワード再発行メールの送信先を入力する画面-->
  <v-main>
    <v-container class="fill-height">
      <v-card
        class="mx-auto px-15 py-10"
        width="500px"
        align="center"
        elevation="0"
      >
        <v-img src="/kuwiki.svg" class="mx-auto my-3" width="100" />
        <v-card-subtitle>
          パスワード再発行用メールを送信します
        </v-card-subtitle>
        <v-text-field
          v-model="email"
          type="email"
          placeholder="email"
          filled
          dense
          rounded
          autofocus
          required
        />
        <v-card-actions>
          <v-btn color="primary" depressed block large @click="send()">
            パスワードリセット
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <div class="text-caption">
            サインインは<NuxtLink to="/signin"> こちら </NuxtLink>から
          </div>
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
    email: "",
  }),
  methods: {
    send() {
      axios
        .post(this.$config.WIKI_API_URL + "/password/reset/", {
          email: this.email,
        })
        .then((res) => {
          Swal.fire({
            title: "お知らせ",
            text: "パスワード再発行用のメールを送信しました。",
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
