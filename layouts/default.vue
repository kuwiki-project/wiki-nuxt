<template>
<v-app id='navi'>
  <v-navigation-drawer class="teal" permanent floating app dark mini-variant>
    <NaviItems :items="topItem"></NaviItems>
    <v-divider></v-divider>
    <naviIndex></naviIndex>
    <v-divider></v-divider>
    <NaviItems :items="accountItem"></NaviItems>
  </v-navigation-drawer>
  <v-main>
    <nuxt />
  </v-main>
</v-app>
</template>
<script>
import naviIndex from "@/components/naviIndex.vue";
export default {
  components: {
    naviIndex,
  },
  data: () => ({
  topItem: [
    { icon: 'mdi-penguin', text: '京大wiki' , link:'/'},
  ],
  accountItem: [
    { icon: 'mdi-emoticon-happy-outline', text: 'アカウント' , link:''},
  ],
  })
}
</script>
