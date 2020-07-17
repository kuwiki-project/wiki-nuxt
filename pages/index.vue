<template>
<v-app id="index">
  <v-container class="fill-height">
    <v-row align='center' justify='center'>
      <span id='title'>京大wiki</span>
    </v-row>
    <v-row>
      <span id='searchfield' class='mx-auto'>
        <v-text-field rounded solo flat prepend-inner-icon="mdi-magnify">
        </v-text-field>
      </span>
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
#index {
  background-image: url("~@/assets/vangoghmuseum.jpg");
  background-size: cover;
}

#searchfield {
  width: 400px;
  opacity: 0.9;
}

#title {
  color: white;
  opacity: 0.9;
  font-size: 5em;
  font-weight: bold;
}
</style>
