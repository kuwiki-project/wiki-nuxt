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
            :rules="rules.email"
            type="email"
            required
            filled
            dense
            rounded
            prepend-inner-icon="$mail"
          />
          <v-text-field
            v-model="credentials.password"
            :rules="rules.password"
            type="password"
            required
            filled
            dense
            rounded
            prepend-inner-icon="$lock"
          />
          <v-btn
            color="primary"
            :disabled="!valid || !allEntered"
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
            パスワード再発行は
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
      password: "",
    },
    rules: {
      email: [
        (v) => Boolean(v) || "",
        (v) =>
          /^.+@st.kyoto-u.ac.jp$/.test(v) || "学生用メール @st.kyoto-u.ac.jp",
      ],
      password: [(v) => Boolean(v) || ""],
    },
  }),
  computed: {
    allEntered() {
      if (this.credentials.email === "" || this.credentials.password === "") {
        return false
      }
      return true
    },
  },
  methods: {
    login() {
      this.$auth
        .loginWith("local", {
          data: {
            email: this.credentials.email,
            password: this.credentials.password,
          },
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
            timer: 3000,
          })
        })
    },
  },
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
