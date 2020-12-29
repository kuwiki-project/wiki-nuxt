<template>
  <!-- パスワード再発行メールの送信先を入力する画面-->
<v-main>
  <v-container class="fill-height">
    <v-card outlined class="mx-auto px-12" width="500px">
      <v-card-title id="title" class="py-5">
        <KupediaLogo />
      </v-card-title>
      <v-card-subtitle>パスワード再発行用メールを指定のアドレスに送信します</v-card-subtitle>
      <v-card-text>
        <v-form class='mx-3'>
          <v-text-field type="email" placeholder="メールアドレス *" filled dense rounded autofocus required />
        </v-form>
        <v-card-actions>
          <v-btn color="primary" depressed block large @click="signup">
            <h4>パスワードリセット</h4>
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</v-main>
</template>
