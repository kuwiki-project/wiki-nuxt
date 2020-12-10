<template>
<v-app id="index">
  <v-container>
    <KupediaLogo />
    <v-row justify='center' id='ku-wiki-is'>
      <span><strong> 京大wiki </strong>とは</span>学内資料を収集・整理・公開するプロジェクト
    </v-row>
  </v-container>
  <v-btn elevation="8" fab icon x-large></v-btn>
  <v-footer padless absolute>
    <v-col class="text-center" cols="12">
      <strong>京大wiki</strong>
    </v-col>
  </v-footer>
</v-app>
</template>
<style scoped>
strong {
  font-size: 1em;
}
#ku-wiki-is {
  font-size: 1.2em;
  margin: 30pt 10pt 30pt;
}
</style>
