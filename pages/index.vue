<template>
<v-app id="index">
  <v-container class="fill-height">
    <v-row>
      <span class='text-h1 mx-auto'>京大wiki</span>
    </v-row>
    <v-row>
      <span class='mx-auto'><v-text-field solo rounded></v-text-field></span>
    </v-row>
    <v-row align='center' justify='center'>
      <v-card outlined>
      <v-card-title>ダッシュボード</v-card-title>
    </v-card>
      <v-card outlined>
      <v-card-title>お問い合わせ</v-card-title>
    </v-card>
      <v-card outlined>
      <v-card-title></v-card-title>
    </v-card>
    </v-row>
  </v-container>
</v-app>
</template>

<style scoped>
/deep/ .v-text-field{
      width: 400px;
}
</style>
