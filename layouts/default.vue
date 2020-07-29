<template>
<v-app id='navi'>
  <v-navigation-drawer class="teal" permanent floating app dark mini-variant>
    <v-list nav dense rounded>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-penguin</v-icon>
        </v-list-item-icon>
        <v-list-item-title>京大wiki</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <indexList></indexList>
    <v-divider></v-divider>

    <v-list nav dense rounded>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-emoticon-happy-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>アカウント</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-main>
    <nuxt />
  </v-main>
</v-app>
</template>
<script>
import indexList from "@/components/indexList.vue";
export default {
  components: {
    indexList
  }
}
</script>
