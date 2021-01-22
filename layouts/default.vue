<template>
  <v-app id="default">
    <v-app-bar app flat hide-on-scroll color="white">
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
        <component :is="item.icon"></component>
      </v-btn>
    </v-app-bar>
    <Nuxt />
  </v-app>
</template>
<script>
import { SearchIcon, InfoIcon, BookIcon, LogInIcon } from "vue-feather-icons"
export default {
  components: {
    SearchIcon,
    InfoIcon,
    BookIcon,
    LogInIcon,
  },
  data: () => ({
    drawer: false,
    group: null,
    tabs: null,
    // アイコン検索 https://vue-feather-icons.egoist.sh/
    items: [
      {
        icon: "search-icon",
        text: "トップ",
        link: "/",
      },
      {
        icon: "info-icon",
        text: "京大wikiとは",
        link: "/about",
      },
      {
        icon: "book-icon",
        text: "wiki",
        link: "/wiki",
      },
      {
        icon: "log-in-icon",
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
