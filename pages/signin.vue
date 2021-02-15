<template>
  <v-main>
    <v-container class="fill-height">
      <v-card
        flat
        class="mx-auto my-auto py-5 px-10 d-flex align-start text-center flex-column"
      >
        <img width="80" class="mx-auto my-5" src="/kiwi.svg">
        <v-form ref="credentials" v-model="valid" class="mx-auto">
          <v-text-field
            v-model="credentials.email"
            :rules="emailRules"
            type="email"
            required
            filled
            dense
            rounded
            prepend-inner-icon="$mail"
          />
          <v-text-field
            v-model="credentials.password"
            :rules="passwordRules"
            type="password"
            required
            filled
            dense
            rounded
            prepend-inner-icon="$lock"
          />
          <v-btn
            color="primary"
            :disabled="!valid"
            depressed
            block
            @click="login"
          >
            ログイン
          </v-btn>
        </v-form>
        <v-card-text>
          <div class="my-1 text-caption">
            アカウント作成は
            <NuxtLink to="/signup">
              こちら
            </NuxtLink>
            から
          </div>
          <div class="my-1 text-caption">
            パスワードをお忘れの方は
            <NuxtLink to="/reset-password">
              こちら
            </NuxtLink>
            から
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>
<script>
import Swal from "sweetalert2"
export default {
  name: "SigninForm",
  data: () => ({
    auth: false,
    dialog: true,
    valid: false,
    credentials: {
      email: "",
      password: ""
    }
  }),
  computed: {
    emailRules() {
      return [
        (v) =>
          /^.+@st.kyoto-u.ac.jp$/u.test(v) || "学生用メール @st.kyoto-u.ac.jp"
      ]
    },
    passwordRules() {
      return [(v) => Boolean(v) || "必須", (v) => v.length > 7 || "8文字以上"]
    }
  },
  methods: {
    login() {
      this.$auth
        .loginWith("local", {
          data: {
            email: this.credentials.email,
            password: this.credentials.password
          }
        })
        .then((res) => {
          this.$router.push("/")
        })
        .catch((e) => {
          Swal.fire({
            title: "Error",
            text: e.response.data.non_field_errors,
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
