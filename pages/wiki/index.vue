<template>
  <v-main>
    <v-container>
      
      <v-chip-group
        v-model="selectedCategory"
        active-class="info--text"
        mandatory
      >
        <v-chip
          v-for="category in categories.data.contents"
          :key="category.name"
          :value="category.name"
        >
          {{ category.name }}
        </v-chip>
      </v-chip-group>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="article in articles.data.contents"
          :key="article.id"
        >
          <div v-if="selectedCategory == article.category.name">
            <v-expansion-panel-header>
              {{ article.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ article.body }}
            </v-expansion-panel-content>
          </div>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-main>
</template>
<script>
import axios from "axios"
export default {
  async asyncData({ $axios, $config }) {
    const articles = await $axios.get("https://kuwiki.microcms.io/api/v1/wiki", {
      headers: {
        "X-API-KEY": $config.WIKI_MICROCMS_API_KEY,
      },
    })
    const categories = await $axios.get(
      "https://kuwiki.microcms.io/api/v1/wiki-categories",
      {
        headers: {
          "X-API-KEY": $config.WIKI_MICROCMS_API_KEY,
        },
      }
    )
    return {
      articles,
      categories,
    }
  },
  data: () => ({
    selectedCategory: "",
  }),
}
</script>
