<template>
<v-main>
  <v-container class="fill-height">
    <v-card outlined class="mx-auto" width="500px">
      <v-card-title id="title" class="py-5">
        <KupediaLogo />
      </v-card-title>
      <v-card-text class="px-6">

        <v-form class="mx-8 my-4">
          <span class='mx-2 my-9'>メールアドレス {{ email }}</span>
          <v-text-field type="password" placeholder="パスワード *" filled dense rounded reqired />
          <v-text-field type="password" placeholder="パスワード確認 *" filled dense rounded reqired />
        </v-form>
        <v-card-actions class="mx-7 my-2">
          <v-btn color="primary" depressed block large @click="signup">
            <span class='text-button'>パスワード再発行</span>
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</v-main>
</template>
<script>
export default {
  data: () => ({
    email: "example@st.kyoto-u.ac.jp",
  }),
}
</script>
