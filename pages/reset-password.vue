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
        <v-img src="/kiwi.svg" class="mx-auto my-3" width="80" />
        <v-card-subtitle>
          パスワード再発行用メールを送信します
        </v-card-subtitle>
        <v-form ref="credentials" v-model="valid">
          <v-text-field
            v-model="email"
            type="email"
            prepend-inner-icon="$mail"
            filled
            dense
            rounded
            autofocus
            required
            :rules="emailRules"
          />
          <v-card-actions>
            <v-btn
              color="primary"
              depressed
              block
              large
              :disabled="!valid"
              @click="send()"
            >
              パスワードリセット
            </v-btn>
          </v-card-actions>
        </v-form>
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
import Swal from "sweetalert2"
import axios from "axios"
export default {
  auth: false,
  data: () => ({
    valid: false,
    credentials: {
      email: ""
    }
  }),
  computed: {
    emailRules() {
      return [
        (v) =>
          /^.+@st.kyoto-u.ac.jp$/u.test(v) ||
          "学生用メール @st.kyoto-u.ac.jp を入力してください"
      ]
    }
  },
  methods: {
    send() {
      axios
        .post(`${this.$config.WIKI_API_URL}/password/reset/`, {
          email: this.email
        })
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: "パスワード再発行用のメールを送信しました",
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000
          })
          this.$router.push("/signin")
          return res
        })
        .catch((e) => {
          Swal.fire({
            icon: "error",
            text: e.response.data,
            showConfirmButton: false,
            showCloseButton: false,
            timer: 3000
          })
        })
    }
  }
}
</script>
<style scoped>
>>> .v-input__prepend-inner {
  padding-right: 9px !important;
}

>>> .v-text-field--rounded > .v-input__control > .v-input__slot {
  padding: 0 16px !important;
}

>>> .v-icon {
  color: #a9a9a9;
}
</style>
