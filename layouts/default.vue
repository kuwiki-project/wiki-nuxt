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
        icon: "$grid",
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
<style>
a {
  text-decoration: none;
}

div.v-application {
  font-family: "Noto Sans JP", sans-serif;
}

h1 {
  font-weight: 500;
}
h2 {
  font-weight: 500;
}
h3 {
  font-weight: 500;
}
h4 {
  font-weight: 500;
}
h5 {
  font-weight: 500;
}
h6 {
  font-weight: 500;
}
</style>
