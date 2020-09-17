<template>
  <v-app id="signin">
    <v-dialog v-model="dialog" persistent width="310px">
      <v-card>
        <v-card-title id="title">
          <KupediaLogo></KupediaLogo>
          <span class="headline">ログアウトしました。</span>
        </v-card-title>
        <v-card-text class="px-6">
          <v-card-actions class="mx-3">
            <v-btn color="primary" depressed block @click="login">再ログイン</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: "Logout",
  data: () => ({
    dialog: true,
  }),
  mounted() {
    this.logout();
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
    login() {
      this.$router.push("signin");
    },
  },
};
</script>
