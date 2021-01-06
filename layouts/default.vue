<template>
<v-app id='default'>
  <v-app-bar color="secondary" dense app hide-on-scroll>
    <v-toolbar-title class='mx-auto'>
      <span id="title">
        <nuxt-link to="/" class="white--text">京大wiki</nuxt-link>
      </span>
    </v-toolbar-title>
    <template v-slot:extension>
      <v-tabs v-model="tab" dark fixed-tabs slider-color="primary">
        <v-tab v-for="item in items" :key="item.text" :to="item.link">
          <v-icon>{{ item.icon }}</v-icon>
          <!-- {{ item.text }} -->
        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
  <Nuxt />
</v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [{
        icon: "mdi-widgets",
        text: "トップ",
        link: "/",
      },
      {
        icon: "mdi-folder-search",
        text: "科目検索",
        link: "/courses",
      },
      {
        icon: "mdi-file-upload-outline",
        text: "過去問提供",
        link: "/volunteer",
      },
      {
        icon: "mdi-account-circle",
        text: "ログイン",
        link: "/signin",
      },
    ],
  }),
}
</script>
<style scoped>
#title {
  font-weight: 700;
  font-family: "Noto Sans JP", sans-serif;
}

a.nuxt-link-active {
  text-decoration: none;
}

div.v-application {
  /* background-color: #A19BFF; */
}
</style>
