<template>
  <v-app id="reset_password">
    <v-container class="fill-height">
      <v-card outlined class="mx-auto" width="500px">
        <v-card-title id="title" class="py-5">
          <KupediaLogo />
        </v-card-title>
        <v-card-text class="px-6">
          <v-form class="mx-8 my-4">
            <v-text-field
              type="password"
              placeholder="パスワード *"
              filled
              dense
              rounded
              reqired
            />
            <v-text-field
              type="password"
              placeholder="パスワード確認 *"
              filled
              dense
              rounded
              reqired
            />
          </v-form>
          <v-card-actions class="mx-7 my-2">
            <v-btn color="primary" depressed block large @click="signup">
              <h4>パスワード再発行</h4>
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "ReissuePassword",
  auth: false,
}
</script>

<style scoped>
#title {
  font-size: 0.9em;
}
</style>
