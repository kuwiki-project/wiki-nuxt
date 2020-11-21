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
              type="email"
              placeholder="メールアドレス *"
              filled
              dense
              rounded
              autofocus
              required
            />
          </v-form>
          <v-card-actions class="mx-7 my-2">
            <v-btn color="primary" depressed block large @click="signup">
              <h4>パスワードリセット</h4>
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>
<style scoped>
#title {
  font-size: 0.9em;
}
</style>
