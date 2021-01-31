<template>
  <v-app id="default">
    <v-app-bar app flat absolute color="white">
      <v-toolbar-title>
        <span id="title">
          <NuxtLink to="/" class="grey--text">京大wiki</NuxtLink>
        </span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-for="item in items"
        :key="item.icon"
        text
        color="secondary"
        :to="item.link"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-app-bar>
    <Nuxt />
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    tabs: null,
    // アイコン検索 https://vue-feather-icons.egoist.sh/
    items: [
      {
        icon: "$search",
        text: "トップ",
        link: "/",
      },
      {
        icon: "$info",
        text: "京大wikiとは",
        link: "/about",
      },
      {
        icon: "$book",
        text: "wiki",
        link: "/wiki",
      },
      {
        icon: "$login",
        text: "サインイン",
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

a {
  text-decoration: none;
}

div.v-application {
  /* background-color: #A19BFF; */
}
</style>
