<template>
  <v-app id="navi">
    <v-app-bar app dense dark flat class="primary">
      <v-app-bar-nav-icon @click="drawer = true" />
      <v-toolbar-title>
        <span id="title">
          <nuxt-link to="/">京大wiki</nuxt-link>
        </span>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item-group v-model="group">
          <v-list-item
            v-for="item in items"
            :key="item.text"
            link
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        icon: "mdi-home",
        text: "ホーム",
        link: "/",
      },
      {
        icon: "mdi-file-search-outline",
        text: "科目検索",
        link: "/courses",
      },
      {
        icon: "mdi-file-upload-outline",
        text: "過去問提供",
        link: "/volunteer",
      },
      {
        icon: "mdi-help-circle-outline",
        text: "京大wikiとは",
        link: "/profile",
      },
      {
        icon: "mdi-email-outline",
        text: "問い合わせ",
        link: "/contact",
      },
      {
        icon: "mdi-account",
        text: "ログアウト",
        link: "/signout",
      },
    ],
  }),
}
</script>
<style scoped>
#title {
  font-weight: 400;
  font-family: "Noto Sans JP", sans-serif;
}
a.nuxt-link-active {
  color: white;
  text-decoration: none;
}
</style>
