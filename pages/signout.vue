<template>
  <div id="signout">
    <v-dialog v-model="dialog" persistent width="310px">
      <v-card>
        <v-card-title id="title">
          <span class="headline">ログアウトしました</span>
        </v-card-title>
        <v-card-text class="px-6">
          <v-card-actions class="mx-3">
            <v-btn
              color="primary"
              depressed
              block
              @click="login"
            >
              再ログイン
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Signout',
  layout: 'sign',
  auth: false,
  data: () => ({
    dialog: true,
  }),
  mounted() {
    this.logout()
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
    login() {
      this.$router.push('/signin')
    },
  },
}
</script>
