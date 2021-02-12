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

      <v-btn
        v-if="$auth.loggedIn"
        text
        color="secondary"
        to="/settings"
      >
        <v-icon>$settings</v-icon>
      </v-btn>

      <v-btn
        v-if="!($auth.loggedIn)"
        text
        color="secondary"
        to="/signin"
      >
        <v-icon>$login</v-icon>
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
        icon: "$grid",
        link: "/",
      },
      {
        icon: "$search",
        link: "/search",
      },
      {
        icon: "$book",
        link: "/wiki",
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
