<template>
<v-app id='navi'>
  <v-navigation-drawer class="teal" permanent floating app dark mini-variant>
    <NaviItems :items="topItem"></NaviItems>
    <v-divider></v-divider>
    <NaviIndex></NaviIndex>
    <v-divider></v-divider>
    <NaviItems :items="accountItem"></NaviItems>
  </v-navigation-drawer>
  <v-main>
    <nuxt />
  </v-main>
</v-app>
</template>
<script>
import NaviIndex from "@/components/NaviIndex.vue";
export default {
  components: {
    NaviIndex,
  },
  data: () => ({
  topItem: [
    { icon: 'mdi-led-variant-outline', text: '京大wiki' , link:'/'},
  ],
  accountItem: [
    { icon: 'mdi-emoticon-happy-outline', text: 'アカウント' , link:'/signup'},
  ],
  })
}
</script>
