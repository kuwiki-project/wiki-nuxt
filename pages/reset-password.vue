
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
        <v-img src="/kuwiki.svg" class="mx-auto my-3" width="100" />
        <v-card-subtitle>
          パスワード再発行用メールを送信します
        </v-card-subtitle>
        <v-text-field
          type="email"
          placeholder="email"
          filled
          dense
          rounded
          autofocus
          required
        />
        <v-card-actions>
          <v-btn color="primary" depressed block large @click="signup">
            パスワードリセット
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <div class="text-caption">
            サインインは<NuxtLink to="/signin">
              こちら
            </NuxtLink>から
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  auth: false,
}
</script>
