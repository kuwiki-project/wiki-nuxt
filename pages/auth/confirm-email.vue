<template>
  <div class="narrow-scroll-page">
    <h1>メールアドレス認証</h1>
    <StepsSignUp id="signup-steps" class="signup-steps" :class="{ err: err }" />
    <p class="message">
      {{ message }}
    </p>
  </div>
</template>

<script>
import axios from "axios"
export default {
  auth: false,
  data: () => ({
    message: "",
    err: false
  }),
  head: {
    title: "メール認証"
  },
  beforeMount() {
    axios
      .post(
        `${this.$config.WIKI_API_URL}/rest-auth/registration/verify-email/`,
        {
          key: this.$route.query.key
        }
      )
      .then((res) => {
        this.message = "利用登録が完了しました🎉"
        this.$toast.clear()
        return res
      })
      .catch((err) => {
        this.message = ""
        this.$toast.clear()
        this.$toast.error(err, { duration: 10000 })
        this.err = true
      })
  }
}
</script>
<style scoped>
.signup-steps:deep(.step3) {
  fill: var(--color-primary);
  background-color: var(--color-primary);
  color: white;
}
.err:deep(.step3) {
  fill: gray;
  background-color: gray;
  color: white;
}
</style>
