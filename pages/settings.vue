<template>
  <div>
    <v-main>
      <v-card width="300" flat class="mx-auto">
        <v-card-text class="px-6">
          {{ $auth.user.email }}
          <v-card-actions class="mx-3">
            <v-btn color="primary" depressed block @click="logout">
              ログアウト
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-main>
    <TheFooter />
  </div>
</template>

<script>
import Swal from "sweetalert2"
export default {
  data: () => ({
    dialog: true
  }),
  methods: {
    logout() {
      this.$auth.logout()
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        iconColor: "var(--v-primary-base)",
        timer: 3000
      })
      Toast.fire({
        icon: "success",
        text: "ログアウトしました"
      })
    }
  }
}
</script>
